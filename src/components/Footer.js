import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'

import hooks from '@/hooks'
import constants from '@/constants'

const { AnimationOnScrollView } = hooks
const {
  footer_content: {
    name,
    email,
    phone,
    links,
    address,
    copyright,
    social_media
  }
} = constants

const renderSocialMedia = () => (
  <ul className="list-unstyled footer-social-list mt-4">
    {social_media.map(item => (
      <li key={item.id} className="list-inline-item"><a href={item.link}><i className={`bx bxl-${item.icon}`}/></a></li>
    ))}
  </ul>
)

const Footer = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)
  return (
    <section
      ref={domRef}
      className={`section bg-light ${isVisible ? 'appear' : ''}`}
    >
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <p className="footer-social-list">{name}</p>
              <p className="text-muted">{email}</p>
              <h6 className="text-muted font-weight-normal">{phone}</h6>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Our Address</h6>
                <p className="text-muted f-14">{address}</p>
                <h6 className="text-muted pb-2">Email: {email}</h6>
                {renderSocialMedia()}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <a href="https://gandarain.github.io/gandarainpanjaitan/" className="mb-0 f-15" target="_blank">{copyright}</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer