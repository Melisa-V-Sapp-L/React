import React from "react";

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide mb-3">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.ibb.co/rxvHS6F/10.jpg" alt="..." />
          <div className="carousel-caption">
            <h1 className="text-black-50">10</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/0hCWY2n/11.jpg" alt="..." />
          <div className="carousel-caption">
            <h1 className="text-black-50">11</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/dp2G38v/12.jpg" alt="..." />
          <div className="carousel-caption">
            <h1 className="text-black-50">12</h1>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
