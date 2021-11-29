import styled from 'styled-components'

export const SectionPortifolio = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;

  h1 {
    text-align: center;
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3A3A3A;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    color: #616161;
  }

  .container-tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .container-grid {
    max-width: 1300px;
    width: 1300px;
    height: 100%;
    padding: 2rem;
  }

  .container-grid .photo-grid {
    display: grid;
    height: 100%;
    justify-content: center;
  	grid-template-columns: 200px 200px 200px 200px 200px;
	  grid-template-rows: 150px 150px 150px;
    gap: 15px;
  }

  .container-grid .photo-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .container-grid .photo-grid .card-1 {
    color: white;
    grid-column: 1/3;
    grid-row: 1/3;
  }

  .card-2 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .card-2 img {
    object-position: center 0%;
  }

  .card-3 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 2/3;
    grid-row: 3/4;
  }

  .card-3 img {
    object-position: center 99%;
  }

  .card-4 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 3/4;
    grid-row: 2/4;
  }

  .card-4 img {
    object-position: right 60%;
  }

  .card-5 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 4/6;
    grid-row: 2/4;
  }

  .card-6 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 3/4;
    grid-row: 1/2;
  }

  .card-6 img {
    object-position: bottom;
  }

  .card-7 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 4/5;
    grid-row: 1/2;
  }

  .card-7 img {
    object-position: right 85%;
  }

  .card-8 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 5/6;
    grid-row: 1/2;
  }

  .card-8 img {
    object-position: right 43%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 10px 20px;
    
    h1 {
      font-size: 30px;
      line-height: 120%;
    }

    p {
      margin-bottom: 0px;
      font-size: 16px;
    }

    .container-grid {
      width: 90vw;
      height: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      justify-content: center;
      padding: 0 2rem 0 2rem;
    }

    .container-grid::-webkit-scrollbar {
      display: none;
    }

    .container-grid .photo-grid {
      justify-content: flex-end !important;
      display: grid;
      height: 100%;
      padding: 0;
      grid-template-columns: 200px 200px 200px 200px 200px;
      grid-template-rows: 150px 150px 150px;
      gap: 10px;
    }
  }

  @media screen and (max-width: 1023px) {
    .container-grid {
      max-width: 700px;
      width: 700px;
      overflow-x: scroll;
      overflow-y: hidden;
      height: 100%;
      padding: 2rem;
    }

    .container-grid .photo-grid {
      width: 950px;
      padding: 0 20px 0 100px;
    }
  }

  @media screen and (max-width: 767px) {
    .container-grid {
      max-width: 400px;
      width: 400px;
      overflow-x: scroll;
      overflow-y: hidden;
      height: 100%;
      padding: 2rem;
    }

    .container-grid .photo-grid {
      width: 950px;
      padding: 0 20px 0 100px;
    }
  }

  @media screen and (max-width: 424px) {
    .container-grid {
      max-width: 350px;
      width: 350px;
      overflow-x: scroll;
      overflow-y: hidden;
      height: 100%;
      padding: 2rem;
    }

    .container-grid .photo-grid {
      width: 950px;
      padding: 0 20px 0 100px;
    }
  }

  @media screen and (max-width: 374px) {
    max-width: 320px;
    padding: 0;

    .container-grid {
      max-width: 300px;
      width: 300px;
      overflow-x: scroll;
      overflow-y: hidden;
      height: 100%;
      padding: 1rem;
    }

    .container-grid .photo-grid {
      width: 950px;
      padding: 0 20px 0 100px;
    }

    .content-portifolio {
      max-width: 320px;
    }

    .title {
      font-size: 8px;
    }
  }
`;