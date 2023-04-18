import { useEffect, useState } from 'react';
import Container, { Antmodal, AntSelect, ConTable, Wrapper } from './style.js'
import Plus from "../../assets/svg/plus.svg";
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Button } from '../generic/index.jsx';
import { shopGetFetch } from '../../redux/slice/shop/shopGet/index.js';

const ShopCom = () => {

  const [data, setData] = useState([])
  const dispatch = useDispatch()

  const shopGet = useSelector((store) => store.shopGet)


  const [open, setOpen] = useState(false);

  // create funck
  const addFunc = () => {
    dispatch(facultetsselectAddPost(
      {}
    ))
  }
  // get all
  useEffect(() => {
    dispatch(shopGetFetch())
  }, [])

  useEffect(() => {
    if (shopGet.status === 'success') setData(shopGet.data)

  }, [shopGet])

  const modalAdd = () => setOpen(true);
  const handleCancel = () => { setOpen(false) };
  return (
    <Wrapper>
      <Container>
        <Container.Text>
          <div>
            <h1> permissions Qoshish</h1>
          </div>
          <Antmodal open={open} onOk={() => addFunc()} onCancel={handleCancel}>
            <Container.Add>

            </Container.Add>
          </Antmodal>
          <div onClick={modalAdd}>
            <Button color={'black'} size={'17px'} height={'40px'} width={'100px'}>Qo’shish</Button>
          </div>
        </Container.Text>

        <Container.Table>
          <table>
            <tbody>


              <tr>
                <th>_id</th>
                <th>name</th>
                <th>createdAt</th>
                <th>updatedAt</th>
                <th>Option</th>
              </tr>

              {shopGet.status === 'loading' ? <Container.Spin><Spin /> &nbsp; Loading...</Container.Spin>
                :
                shopGet.status === 'success' && data?.map((value) => {
                  return (
                    <div>
                      <tr>
                        <td>{value?._id}</td>
                        <td>{value?.name}</td>
                        <td>{value?.createdAt}</td>
                        <td>{value?.updatedAt}</td>
                        <td><button>✏️</button> <button>🗑️</button> </td>
                      </tr>
                    </div>
                  )
                })
              }
            </tbody>
          </table>
        </Container.Table>
      </Container>
    </Wrapper>
  );
};

export default ShopCom
