import React from "react";

function Footer() {
  const gototop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating"
              href="#!"
              role="button"
              style={{
                float: "right",
                height: "70px",
                top: "-10px",
              }}
              onClick={gototop}
            >
              <i class="fa-solid fa-arrow-up"></i>
              <p>Go To Top</p>
            </a>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          <a className="text-white" href="/#">
            Portfolio Anish
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
