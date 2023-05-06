import React, { useRef, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
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
    <div
      key={item.id}
      className="title text-center mb-5 bg-light"
      style={{ padding: 10, borderRadius: 10, cursor: 'pointer' }}
      onClick={() => item.link ? window.open(item.link) : {}}
    >
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
                  onChange={e => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">
                  Name
                </Label>
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="name"
                  required
                  minLength={5}
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">
                  Message
                </Label>
                <Input
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  type="textarea"
                  placeholder="Enter your message"
                  style={{ height: 200 }}
                  required
                  minLength={10}
                />
              </FormGroup>
              <Button block>
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