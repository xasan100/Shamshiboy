import { Upload } from "antd";
import styled from "styled-components";




const Content = styled.div`
display: grid;
gap: 10px;
width: 580px;

`




Content.Upload = styled(Upload)`
  .ant-upload-list.ant-upload-list-picture-card
  {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export { Content, };