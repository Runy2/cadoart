import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
function importAll(r) {
  return r.keys().map(r);
}

const listOfColorPencil = importAll(require.context('assets/img/colorpencil', false, /\.(png|jpe?g|svg)$/));
const listOfDigital = importAll(require.context('assets/img/digital', false, /\.(png|jpe?g|svg)$/));
const listOfPencil = importAll(require.context('assets/img/pencil', false, /\.(png|jpe?g|svg)$/));
const listOfWatercolor = importAll(require.context('assets/img/watercolor', false, /\.(png|jpe?g|svg)$/));
// const items = [
//   {
//     src: require("assets/img/bg1.jpg"),
//     altText: "Nature, United States",
//     caption: "Nature, United States",
//   },
//   {
//     src: require("assets/img/bg3.jpg"),
//     altText: "Somewhere Beyond, United States",
//     caption: "Somewhere Beyond, United States",
//   },
//   {
//     src: require("assets/img/bg4.jpg"),
//     altText: "Yellowstone National Park, United States",
//     caption: "Yellowstone National Park, United States",
//   },
// ];

const items= [...listOfDigital,...listOfPencil,...listOfWatercolor,...listOfColorPencil]

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
            <h4>Carousel</h4>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src}  />
                      <div className="carousel-caption d-none d-md-block">
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
