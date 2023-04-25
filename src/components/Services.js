import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { AnimationOnScrollView } from '../hooks'
import constants from '@/constants'

const {
  services_constant: {
    title,
    subtitle,
    content
  }
} = constants

const ServicesBox = (props) => {
  return (
    <>
    {
      props.services.map((item, key) =>
      (item.id % 2 !== 0 && !props.isBreakpoint) ?
        <Row key={key} className={item.id === 1 ? 'align-items-center' : 'align-items-center mt-5'} id={item.ids}>
          <Col md={5} >
            <div>
              <img src={item.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={item.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{item.title}</h5>
                <p className="text-muted mb-3 f-15">{item.desc}</p>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5" id={item.ids}>
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{item.title}</h5>
            <p className="text-muted mb-3 f-15">{item.desc}</p>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={item.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  )
}

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addListener(updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}

const Services = () => {
  const isBreakpoint = useMediaQuery(768)
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`section ${isVisible ? 'appear' : ''}`}
      id="services"
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
        <ServicesBox services={content} isBreakpoint={isBreakpoint} />
      </Container>
    </section>
  )
}

export default Services
