import React from 'react';
import { Container, Row, Col } from "reactstrap";

import constants from "@/constants";

const {
  service_content: {
    title,
    subtitle,
    expertise
  }
} = constants

const Service = () => (
  <section className="section" id="service">
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
          expertise.map((service, key) =>
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-5">
                    <i className={service.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                <p className="text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          )
        }
      </Row>
    </Container>
  </section>
)

export default Service;