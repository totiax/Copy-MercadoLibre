import React from "react";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://http2.mlstatic.com/D_NQ_951840-MLA50929759526_072022-OO.webp"
              className="d-block w-200"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_651009-MLA50899329725_072022-OO.webp"
              className="d-block w-200"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_892157-MLA50909368370_072022-OO.webp"
              className="d-block w-200"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_752556-MLA50899500397_072022-OO.webp"
              className="d-block w-200"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_943284-MLA50899717104_072022-OO.webp"
              className="d-block w-200"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_993803-MLA50899774941_072022-OO.webp"
              className="d-block w-200"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_676173-MLA50899923109_072022-OO.webp"
              className="d-block w-200"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
