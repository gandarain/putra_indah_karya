import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'

import hooks from '@/hooks'
import constants from '@/constants'

const { AnimationOnScrollView } = hooks
const {
  expertise_content: {
    title,
    subtitle,
    expertise
  }
} = constants

const Expertise = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`section bg-light ${isVisible ? 'appear' : ''}`}
      id="expertise"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">{title}</span></h3>
              <p className="text-muted">{subtitle}</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            expertise.map((item, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={item.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{item.title}</h5>
                  <p className="text-muted mb-4">{item.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  )
}

export default Expertise