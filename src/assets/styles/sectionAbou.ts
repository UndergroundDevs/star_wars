import styled from 'styled-components'

export const SectionAboout = styled.section`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  ul li div {
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 24px;
  }

  ul li span h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
  }

  ul li span p {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #898989;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 25px;

    ul li span h1 {
      font-size: 16px;
    }

    ul li span p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 0 20px;

    ul {
      display: grid;
      justify-content: center;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      gap: 100px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0 20px;

    ul {
      display: grid;
      justify-content: center;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      gap: 25px;
    }

    ul li div {
      width: 25px;
      height: 25px;
      margin-right: 15px;
    }

    ul li span h1 {
      font-size: 14px;
    }

    ul li span p {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 424px) {
    padding: 0 90px;

    ul {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 374px) {
    padding: 0 50px;
  }
`;