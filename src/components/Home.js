import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'

import hooks from '@/hooks'
import constants from '@/constants'

const { AnimationOnScrollView } = hooks
const {
  home_content: {
    name,
    short_description
  }
} = constants

const Home = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`section position-relative ${isVisible ? 'appear' : ''}`}
      id="home"
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">{name}</h1>
              <p className="text-muted mb-4 pb-2">{short_description}</p>
              <a href="#services" className="btn btn-warning">
                Detail <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="./images/home.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home