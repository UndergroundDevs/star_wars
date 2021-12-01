import styled from 'styled-components'

export const HeaderContent = styled.header`
  justify-content: space-between;
  align-items: center;
  position: fixed;
  display: flex;
  padding: 0 100px;
  height: 75px;
  width: 100%;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2000;

  .container-logo {
    width: 270px;
    height: 58px;
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
      height: 48px;
    }

    .content-links {
      display: none;
    }

    .content-social-medias {
      display: none;
    }

    button.button {
      display: flex;
    }
  }

  @media screen and (max-width: 767px) {
    .container-logo {
      width: 170px;
      height: 36px;
    }
  }

  @media screen and (max-width: 424px) {
    padding: 0 10px;

    .container-logo {
      width: 122px;
      height: 26px;
    }
  }

  @media screen and (max-width: 374px) {
  }
`;

export const HeaderMobile = styled.aside<{ isOpen: boolean}>`
  display: none;
  z-index: 2;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  @media screen and (max-width: 1023px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    width: 60%;
    height: 100vh;
    left: ${({ isOpen }) => ( isOpen ? '0%' : '-62%' )};
    color: var(--text-title);
    transition: left .7s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .my-header {
      padding: 0 25px;
      height: 75px;
      width: 100%;
      display: flex;
      align-items: center;
    }

    .my-header a {
      display: block;
      width: 222px;
      height: 48px;
    }

    ul.content-links {
      padding: 50px 0 0 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      font-size: 20px;
    }

    ul.content-links li {
      width: 80%;
      height: 50px;
    }

    ul.content-links li button {
      font-size: 20px;
    }

    ul.content-links li a {
      padding: 0 10px;
    }

    ul.content-social-medias {
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0 10%;
    }
  }

  @media screen and (max-width: 767px) {
    .my-header a {
      width: 170px;
      height: 36px;
    }

    ul.content-links {
      font-size: 16px;
    }

    ul.content-links li button {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 424px) {
    .my-header a {
      width: 122px;
      height: 26px;
    }
  }

  @media screen and (max-width: 374px) {
    ul.content-links {
      font-size: 13px;
    }

    ul.content-links li button {
      font-size: 13px;
    }
  }
`