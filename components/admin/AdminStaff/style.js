import styled from "styled-components";
import { Modal, Select } from 'antd';

const Container = styled.div`
  margin: 0 auto; 
  max-width: 1280px;
   width: 100%;

  @media only screen and (max-width: 1000px) {}
`

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`
Container.Scrool = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: grid;
  gap:10px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  @media only screen and (max-width: 1000px) {

  }
`

Container.Table = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  >div{
    display: flex;
    justify-content: end;
  }
>table{
  width: 100%auto;
  border: 1px solid black;
  padding: 5px;
 
>tr{
  border: 1px solid yellow;
  
  >th {
    border: 1px solid black;
  }
}}
`

Container.Spin = styled.div`
 position: absolute;
 top: 350px;
 left: 100px;
 right: 0px;
 bottom: 0px;
 display: flex;
 justify-content:center ;
 align-items: center;

`
Container.Text = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 20px;
 >h1{
 font-style: normal;
 font-weight: 500;
 font-size: 36px;
 line-height: 44px;
 display: flex;
 align-items: center;
 color:  black;
 }

`
const Antmodal = styled(Modal)`
  width: 700px!important;
  left: 100px;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  @media only screen and (max-width: 1000px) {
    width: 700px!important;
  }
  :where(.css-dev-only-do-not-override-mxhywb).ant-modal .ant-modal-content {
        padding: 41px 24px !important;
  }
`

Container.Add = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

Container.Btn = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
`

export { Wrapper, Antmodal }
export default Container