import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container,
  Row,
  Col
} from 'reactstrap';

import constants from "@/constants";

const {
  project_content: {
    title,
    subtitle,
    content
  }
} = constants

const Project = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? content.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = content.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-thumbnail d-block mx-auto" />
      </CarouselItem>
    );
  });

  return (
    <section className="section position-relative" id="project">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">{title}</span></h3>
              <p className="text-muted">{subtitle}</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              {...args}
            >
              <CarouselIndicators
                items={content}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;