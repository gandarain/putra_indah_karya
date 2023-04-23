import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const Contact = () => (
  <section className="section" id="contact">
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <div className="title text-center mb-5">
            <h3 className="font-weight-normal text-dark">Contact <span className="text-warning">Us</span></h3>
            <p className="text-muted">Anda dapat menghubungi kami melalui layanan berikut.</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="title text-center mb-5 bg-light" style={{ padding: 10, borderRadius: 10 }}>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">Email</h5>
            <p className="text-muted">putraindahkarya.konsultan@gmail.com</p>
          </div>
          <div className="title text-center mb-5 bg-light" style={{ padding: 10, borderRadius: 10 }}>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">Phone Number</h5>
            <p className="text-muted">0812-6220-0965</p>
          </div>
          <div className="title text-center mb-5 bg-light" style={{ padding: 10, borderRadius: 10 }}>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">Address</h5>
            <p className="text-muted">Jl. Karet 12 No. 12 Simalingkar, Kel. Mangga, Kec. Medan Tuntungan.</p>
          </div>
        </Col>
        <Col
          md={{
            offset: 1,
            size: 6
          }}
        >
          <Form>
            <FormGroup>
              <Label for="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                type="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">
                Message
              </Label>
              <Input
                id="message"
                name="text"
                type="textarea"
                placeholder="Enter your message"
                style={{ height: 200 }}
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

export default Contact