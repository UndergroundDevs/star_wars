import styled from 'styled-components'

export const SectionOurCreativeProcess = styled.section`
  display: flex;
  height: calc(100vh - 95px);
  padding: 80px 20px;
  background-color: var(--background);

  .content-our-creative-process {
    padding: 0px 50px 200px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content-our-creative-process h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 40px;
    line-height: 120%;
    color: var(--text-title);
  }

  .content-our-creative-process p {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 19px;
    line-height: 150%;
    color: var(--text-paragraph);
  }

  .content-our-creative-process a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    background: #B18B5A;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #F6F7F1;
  }

  .content-lets-start {
    display: flex;
    width: auto;
    align-items: center;
    flex: 1;
    padding: 0 50px;
    flex-direction: column;
  }

  .content-lets-start h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    text-align: center;
    font-size: 40px;
    line-height: 120%;
    color: var(--text-title);
  }

  .content-lets-start h2 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 19px;
    line-height: 150%;
    color: var(--text-title);
  }

  .content-lets-start ul {
    width: 100%;
    height: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
  }

  .content-lets-start ul li {
    width: 205px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-lets-start ul li span {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: #616161;
  }

  .container-icon {
    display: block;
    width: 60px;
    height: 60px;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .content-our-creative-process {
      padding: 0px 0px 170px 10px;
    }

    .content-our-creative-process h1 {
      font-size: 30px;
    }

    .content-our-creative-process p {
      font-size: 16px;
    }

    .content-lets-start {
      width: 60%;
      align-items: center;
      flex: 1;
      padding: 0 0 0 50px;
    }

    .content-lets-start h1 {
      font-size: 40px;
    }

    .content-lets-start h2 {
      font-size: 19px;
    }

    .content-lets-start ul li {
      width: 160px;
      height: auto;
    }

    .content-lets-start ul li span {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    padding: 40px 40px;
    height: auto;

    .content-lets-start h2 {
      margin-bottom: 50px;
    }

    .content-our-creative-process {
      padding: 0 0 50px 0;
    }

    .content-our-creative-process p {
      margin: 20px 0 20px 0;
    }

    .content-lets-start {
      padding: 20px;
    }

    .content-lets-start ul {
      margin-top: 10px;
    }

    .content-lets-start ul li {
      width: 130px;
      height: auto;
    }
  }

  @media screen and (max-width: 767px) {
    .content-lets-start ul {
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }

    .content-lets-start ul li {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }
`;