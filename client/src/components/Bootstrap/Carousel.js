import slide1 from '../../images/home/newdevil.jpeg';

import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel slide carousel-fade" id="carouselExampleIndicators" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active"><img className="d-block w-100" src={slide1} alt="First slide" /></div>
      </div>
      {/* <button type="button" className="carousel-control-prev" href="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button type="button" className="carousel-control-next" href="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default Carousel;