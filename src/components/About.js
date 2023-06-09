import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'

import hooks from '@/hooks'
import constants from '@/constants'

const { AnimationOnScrollView } = hooks
const {
  about_content: {
    title,
    subtitle,
    vision,
    mission
  }
} = constants

const About = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`section bg-light ${isVisible ? 'appear' : ''}`}
      id="about"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <p className="text-muted">{title}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">{subtitle}</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Mission</h6>
                <p className="text-muted font-weight-light">{mission}</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Vision</h6>
                <p className="text-muted font-weight-light">{vision}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About