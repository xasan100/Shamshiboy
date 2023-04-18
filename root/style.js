import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`


Container.Inset = styled.div`
  height: ${({ firstPage }) => firstPage ? '700px' : '700px'};
  height: 100vh;
  max-width: 1440px;
  min-width: 1200px;
  width: 100%;
  border-radius: 45px;
  @media only screen and (max-width: 1000px) {
    height: 720px;
    max-height: 750px;
    min-height: 600px;
    width: 100%;
    max-width: 800px;
    min-width: 200px;
  }
`

Container.Sidebar = styled.div`
height: 100vh;
background-color: red !important;
`


Container.Logo = styled.div``










export default Container