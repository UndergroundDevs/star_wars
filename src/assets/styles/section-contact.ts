import styled from 'styled-components'

export const SectionContact = styled.section`
  width: 100%;
  height: calc(100vh - 95px);
  display: flex;
  justify-content: space-between;
  padding: 10px 30px 10px 30px;
  background-color: var(--background);

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 0 100px;
  }

  div h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 40px;
    line-height: 120%;
    color: #3A3A3A;
    margin-bottom: 30px;
  }

  div p {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 19px;
    line-height: 150%;
    color: #616161;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 54px;
    background-color: #FFFFFF;
    border: 1px solid rgba(34, 52, 61, 0.2);
    border-radius: 5px;
  }

  form input {
    width: 100%;
    height: 54px;
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 20px;
  }

  form input::placeholder,
  form textarea::placeholder {
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #22343D;
  }

  form span {
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: rgba(34, 52, 61, 0.45);
  }

  form textarea {
    padding: 23px 20px;
    width: auto;
    height: 193px;
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 5px;
  }

  form button {
    width: 145px;
    height: 52px;
    left: 54px;
    top: 475px;
    background: #B18B5A;
    color: #FFFFFF;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    min-height: calc(100vh - 75px);
    height: auto;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0;
    }

    div h1 {
      font-size: 25px;
      margin-bottom: 20px;
    }

    div p {
      font-size: 15px;
    }

    form {
      padding: 30px;
    }

    form input {
      height: 49px;
      padding: 0 15px;
    }

    form button {
      height: 49px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    min-height: auto;

    div {
      margin-bottom: 30px;
    }

    form {
      display: flex;
      height: 560px !important;
    }
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }
`;