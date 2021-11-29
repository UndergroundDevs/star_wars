import styled from 'styled-components'
export const FooterComponent = styled.footer`
  width: 100%;
  height: 50vh;
  margin-top: 100px;

  .content-footer {
    height: 100%;
    padding: 0 70px;
  }

  .content-footer nav {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .content-footer nav a.home-logo {
    display: block;
    width: 350px;
    height: 108px;
    margin-top: 30px;
  }

  .content-footer nav .content-links {
    display: flex;
  }

  .content-footer nav .content-links ul {
    width: 200px;
    list-style: none;
  }
  .content-footer nav .content-links ul li {
    display: flex;
    width: auto;
    height: auto;
  }

  .content-footer nav .content-links ul li {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #616161;
  }

  .content-footer nav .content-links ul li + li {
    margin: 13px 0;
  }

  .content-footer nav .content-links ul li h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    color: #000000;
  }

  .content-footer nav .content-links ul li.content-social-medias {
    margin: 30px 0;
  }

  .content-footer nav .content-links ul li.content-social-medias a + a{
    margin-left: 30px;
  }

  .content-footer .copyright {
    width: 100%;
    height: auto;
    padding: 15px 0;
  }

  .content-footer .copyright p {
    text-align: center;
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    margin: 90px 0 0 0;

    .content-footer nav a.home-logo {
      width: 280px;
    }

    .content-footer nav {
      padding: 40 0 40px 0;
    }
  }

  @media screen and (max-width: 1023px) {
    height: auto;

    .content-footer nav {
      flex-direction: column;
    }

    .content-footer nav .content-links {
      flex-direction: column;
    }

    .content-footer nav a.home-logo {
      margin-bottom: 30px;
    }

    .content-footer nav .content-links ul li {
      margin: 13px 0;
    }
  }

  @media screen and (max-width: 767px) {
    .content-footer {
      padding: 0 50px;
    }

    .content-footer nav a.home-logo {
      width: 280px;
    }
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }
`