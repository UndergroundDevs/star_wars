import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  background-color: var(--primary);

  .loading {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 99999999999999999;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(1px);
  }
`
export default Main