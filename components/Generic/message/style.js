import styled from 'styled-components'

const hiddenFunc = (hiddenState) => {
    if(hiddenState){
        return {
            top: '20px',
            left: '20px'
        }
    }else{
        return {
            top: '20px',
            left: '-510px'
        }
    }
}


const Container = styled.div`
  position: absolute;
  width: 400px;
  min-height: 60px;
  border-radius: 13px;
  background: #fff;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81); */
  background: #0061FD;
  transition: .3s;
  z-index: 9999999999999;
  ${({hiddenState}) => hiddenFunc(hiddenState)}
  padding: 15px 25px;
  display: grid;
  gap: 7px;
  grid-template-columns: 45px 1fr;
  @media only screen and (max-width: 800px) {
    width: 80%;
    max-width: 400px;
    padding: 5px 10px;
  }
  
`
Container.Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
Container.Right = styled.div`
  padding: 5px 0;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 20px;
`
Container.MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title{
    font-size: 24px;
    color: #fff; 
    line-height: 26px;
  }
  .desc{
    font-size: 18px;
    line-height: 22px;
    color: white ;
  }
  .pointer {
    cursor: pointer;
  }
`
Container.IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export default Container