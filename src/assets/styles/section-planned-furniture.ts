import styled from 'styled-components'

export const SectionPlannedFurniture = styled.section`
  height: calc(100vh - 95px);
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--background);
  
  .container-picture {
    display: block;
    min-width: 1000px;
    height: 627px;
  }

  aside {
    padding: 0 50px;
  }

  aside h1 {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 40px;
    margin-bottom: 20px;
    line-height: 120%;
    color: var(--text-title)
  }

  aside p {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: normal;
    font-size: 18.5px;
    line-height: 150%;
    color: var(--text-paragraph);
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    height: 100vh;
    width: 100%;

    .container-picture {
      min-width: 800px;
      height: 510px;
    }

    aside {
      padding: 0 20px;
    }

    aside h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }

    aside p {
      font-size: 15.5px;
    }
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    height: auto;

    aside h1 {
      margin: 0;
    }

    aside {
      margin-top: 20px;
    }

    .container-picture {
      min-width: 768px;
      height: 481px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;

    .container-picture {
      min-width: 425px;
      height: 266px;
    }
    
    aside {
      padding: 0 30px;
      margin-top: 20px;
    }

    aside h1 {
      font-size: 25px;
      margin: 0;
    }

    aside p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 424px) {
    .container-picture {
      min-width: 375px;
      height: 266px;
    }
  }

  @media screen and (max-width: 374px) {
    .container-picture {
      min-width: 320px;
      height: 200px;
    }
  }
`;