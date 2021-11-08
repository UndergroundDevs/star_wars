import styled from 'styled-components'

const HeaderContent = styled.header<{ isOpen: boolean}>`
  justify-content: space-between;
  align-items: center;
  position: fixed;
  display: flex;
  padding: 0 100px;
  height: 95px;
  width: 100%;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .container-logo {
    width: 270px;
    height: 50px;
    display: block;
  }

  .content-links {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .content-links li {
    display: flex;
    align-items: center;
  }

  .content-links li a {
    font-family: 'ABeeZee', sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-decoration: none;
    color: #3A3A3A;
    padding: 0 10px;
  }

  .content-links li button {
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-decoration: none;
    color: #3A3A3A;
  }

  .content-social-medias {
    display: flex;
    list-style: none;
  }

  .content-social-medias li a {
    display: flex;
    list-style: none;
  }

  button.button {
    display: none;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 25px;
    height: 75px;

  .container-logo {
    width: 222px;
    height: 60px;
  }

  .content-links {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

  @media screen and (max-width: 1023px) {
    padding: 0 25px;
    height: 75px;
    width: 100%;
    position: fixed;

    .container-logo {
      width: 222px;
      height: 60px;
    }

    .content-links {
      width: 60%;
      z-index: 0;
      height: calc(100vh - 75px);
      bottom: 0;
      left: ${({ isOpen }) => ( isOpen ? '0%' : '-60%' )};
      position: fixed;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: var(--primary);
      transition: left .7s;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 10px 8px;
    }

    .content-links li {
      display: flex;
      justify-content: flex-start;
      width: 50%;
      height: 50px;
    }

    .content-links li a {
      font-size: 20px;
    }

    .content-links li button {
      font-size: 20px;
    }

    .content-social-medias {
      display: none;
    }

    button.button {
      display: flex;
      z-index: 999;
    }
  }

  @media screen and (max-width: 767px) {
    .content-links li {
      justify-content: flex-start;
      width: 90%;
    }

    .content-links li a {
      font-size: 16px;
    }

    .content-links li button {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 424px) {
    padding: 0 15px;

    .container-logo {
      width: 192px;
      height: 41px;
    }
  }

  @media screen and (max-width: 374px) {
    .container-logo {
      width: 122px;
      height: 26px;
    }
  }
`;

export default HeaderContent