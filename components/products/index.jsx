import { useEffect, useState } from 'react';
import Container, { Antmodal, AntSelect, ConTable, Wrapper } from './style.js'

import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Button } from '../generic/index.jsx';
import Image from 'next/image.js';
import { getAllProductFetch } from '../../redux/slice/productGet/index.js';

const data = [
  {
    title: 'title',
    category: 'category',
    unit: 'unit',
    image: 'rasm',
    originalPrice: '320$',
    price: '300$',
    quantity: '50',
    description: 'description',
    id: 1
  }
  ,
  {
    title: 'title',
    category: 'category',
    unit: 'unit',
    image: 'rasm',
    originalPrice: '320$',
    price: '300$',
    quantity: '50',
    description: 'description',
    id: 2
  },

  {
    title: 'title',
    category: 'category',
    unit: 'unit',
    image: 'rasm',
    originalPrice: '320$',
    price: '300$',
    quantity: '50',
    description: 'description',
    id: 3
  }
]

const ProductsCop = () => {

  const [data, setData] = useState([])
  const dispatch = useDispatch()
  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://shamshi-boy-api.vercel.app/api/'}products/`,).then((res) => res.json()).then((res) => setData(res))
  // }, [])

  const getAllProduct = useSelector((store) => store.getAllProduct)




  const [open, setOpen] = useState(false);
  const addFunc = () => {
    dispatch(facultetsselectAddPost(
      {}
    ))
  }
  useEffect(() => {
    dispatch(getAllProductFetch())
  }, [])

  useEffect(() => {
    if (getAllProduct.status === 'success') setData(getAllProduct.data)

  }, [getAllProduct])


  const modalAdd = () => setOpen(true);
  const handleCancel = () => { setOpen(false) };
  return (
    <Wrapper>
      <Container>
        <Container.Text>
          <div>
            <h1> Product Qoshish</h1>
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
                <th>category</th>
                <th>createdAt</th>
                <th>description</th>
                <th>image</th>
                <th>originalPrice</th>
                <th>price</th>
                <th>quantity</th>
                <th>title</th>
                <th>unit</th>
                <th>updatedAt</th>
                <th>_id</th>
                <th>Option</th>
              </tr>

              {getAllProduct.status === 'loading' ? <Container.Spin><Spin /> &nbsp; Loading...</Container.Spin>
                :
                getAllProduct.status === 'success' && data?.map((value) => {
                  var Imags = value.ima
                  return (
                    <>
                      <tr>
                        <td>{value?.category}</td>
                        <td>{value?.createdAt}</td>
                        <td>{value?.description}</td>
                        <td><Image src={Imags} alt="image" /></td>
                        <td>{value?.originalPrice}</td>
                        <td>{value?.price}</td>
                        <td>{value?.quantity}</td>
                        <td>{value?.title}</td>
                        <td>{value?.unit}</td>
                        <td>{value?.updatedAt}</td>
                        <td>{value?._id}</td>
                        <td><button>✏️</button> <button>🗑️</button> </td>
                      </tr>
                    </>
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

export default ProductsCop
