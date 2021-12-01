import styled from "styled-components";

export const SectionHome = styled.section`
  height: 100vh;
  padding: 75px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url("/background-header.webp");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content-buget {
    position: absolute;
    z-index: 999;
    padding: 50px 50px;
    width: 494px;
    height: 549.8px;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(31px);
    border-radius: 5px;
    left: 100px;
    top: 115px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content-buget h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 56px;
    line-height: 120%;
    color: #3A3A3A;
  }

  .content-buget p {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;
    color: #898989;
  }

  .content-buget a {
    width: 374px;
    height: 78.54px;
    left: 101px;
    top: 527.92px;
    background: #B18B5A;
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 23px;
    line-height: 150%;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .conten-carousel {
    display: flex;
    width: 100%;
    height: 86%;
  }
  
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background: transparent !important;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-image {
    position: relative;
  }

  span.info {
    position: absolute;
    width: 294px;
    height: 147.06px;
    bottom: 50px;
    right: 100px;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(31px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  span.info div h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 28px;
    line-height: 120%;
    color: #3A3A3A;
  }

  span.info div p {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #616161;
  }

  .swiper-slide img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev {
    width: 30px;
    height: 30px;
    background-color: #B0B0B0;
    border-radius: 50%;
  }

  .swiper-button-next {
    width: 30px;
    height: 30px;
    background-color: #B0B0B0;
    border-radius: 50%;
  }

  .swiper-button-prev::after {
    font-size: 20px;
    color: #FFF;
  }

  .swiper-button-next::after {
    font-size: 20px;
    color: #FFF;
  }

  @media screen and (max-width: 1023px) {
    padding: 75px 0 0 0;

    .content-buget {
      padding: 20px 20px;
      width: 260px;
      height: 300.8px;
      left: 60px;
      top: 115px;
    }

    .content-buget h1 {
      font-size: 26px;
    }

    .content-buget p {
      font-size: 16px;
    }

    .content-buget a {
      width: 100%;
      height: 38.54px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 767px) {
    span.info {
      bottom: 50px;
      right: 20px;
    }
  }

  @media screen and (max-width: 424px) {
    .content-buget {
      padding: 20px 20px;
      width: 260px;
      height: 300.8px;
      left: 30px;
      top: 115px;
    }
  }

  @media screen and (max-width: 374px) {
  }
`