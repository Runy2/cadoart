/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              // className="n-logo"
              className="photo-container"
              src={require("assets/img/now-logo.jpg")}
            ></img>
            <h1 className="h1-seo">The CadoArt</h1>
            <h3>Manju</h3>
            <h3 className="title">About me</h3>
            <h5 className="description">
            manjus<br/>
Live in my own world 🤪😘🥰<br/>
Artist 🎨<br/>
Self taught<br/>
Learing 👣👣<br/>
            </h5>
          </div>
          

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
