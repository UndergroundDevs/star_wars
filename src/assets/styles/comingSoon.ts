import styled from 'styled-components';

export const ComminSoon = styled.section`
  height: calc(100vh - 95px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  background: #FCF8F3;

  h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 56px;
    line-height: 120%;
    text-align: center;
    color: #3A3A3A;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 50px;

    h1 {
      font-size: 46px;
    }

    .content-commin-soon {
      width: 600px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 50px;

    h1 {
      font-size: 36px;
    }

    .content-commin-soon {
      width: 450px;
    }
  }

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-size: 36px;
      margin-bottom: 40px;
    }

    .content-commin-soon {
      width: 420px;
    }
  }

  @media screen and (max-width: 424px) {
    .content-commin-soon {
      width: 370px;
    }
  }

  @media screen and (max-width: 374px) {
  }

`
