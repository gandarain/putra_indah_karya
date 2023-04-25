import React, { useRef, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback
} from 'reactstrap'
import emailjs from '@emailjs/browser'

import hooks from '@/hooks'
import constants from '@/constants'

const { AnimationOnScrollView } = hooks
const {
  contact_content: {
    title,
    subtitle,
    content
  }
} = constants

const renderContentItems = () => (
  content.map(item => (
    <div key={item.id} className="title text-center mb-5 bg-light" style={{ padding: 10, borderRadius: 10 }}>
      <h5 className="text-dark font-weight-normal mb-3 pt-3">{item.title}</h5>
      <p className="text-muted">{item.desc}</p>
    </div>
  ))
)

const Contact = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)
  const form = useRef()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidName, setInvalidName] = useState(false)
  const [invalidMessage, setInvalidMessage] = useState(false)
  const [disabledButton, setDisabledButton] = useState(true)

  const validateEmail = (value) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRex.test(value)) {
      setInvalidEmail(false)
      setDisabledButton(false)
    } else {
      setInvalidEmail(true)
      setDisabledButton(true)
    }
  }

  const validateName = (value) => {
    const nameRex = /^[a-z ,.'-]+$/i
    if (nameRex.test(value)) {
      setInvalidName(false)
      setDisabledButton(false)
    } else {
      setInvalidName(true)
      setDisabledButton(true)
    }
  }

  const validateMessage = (value) => {
    if (value.length >= 10) {
      setInvalidMessage(false)
      setDisabledButton(false)
    } else {
      setInvalidMessage(true)
      setDisabledButton(true)
    }
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, '#formContact', process.env.PUBLIC_KEY)
      setEmail('')
      setName('')
      setMessage('')
      alert('Pesan berhasil dikirim')
    } catch (error) {
      alert('Pesan gagal dikirm')
    }
  }

  return (
    <section
      ref={domRef}
      className={`section ${isVisible ? 'appear' : ''}`}
      id="contact"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">{title} <span className="text-warning">Us</span></h3>
              <p className="text-muted">{subtitle}</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            {renderContentItems()}
          </Col>
          <Col
            md={{
              offset: 1,
              size: 6
            }}
          >
            <Form ref={form} onSubmit={onSubmitForm} id="formContact">
              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                <Input
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                    validateEmail(e.target.value)
                  }}
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  invalid={invalidEmail}
                  required
                />
                {invalidEmail && <FormFeedback>Please input valid email</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="name">
                  Name
                </Label>
                <Input
                  value={name}
                  onChange={e => {
                    setName(e.target.value)
                    validateName(e.target.value)
                  }}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="name"
                  invalid={invalidName}
                  required
                />
                {invalidName && <FormFeedback>Please input valid name</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="message">
                  Message
                </Label>
                <Input
                  value={message}
                  onChange={e => {
                    setMessage(e.target.value)
                    validateMessage(e.target.value)
                  }}
                  id="message"
                  name="message"
                  type="textarea"
                  placeholder="Enter your message"
                  style={{ height: 200 }}
                  invalid={invalidMessage}
                  required
                />
                {invalidMessage && <FormFeedback>Please input valid message</FormFeedback>}
              </FormGroup>
              <Button block disabled={disabledButton}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact