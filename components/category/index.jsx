import { useEffect, useState } from 'react';
import Container, { Antmodal, Content, Wrapper } from './style.js'
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Button, Input } from '../generic/index.jsx';
import { categoryGetFetch } from '@/redux/slice/category/category/index.js';
// import AddCategoryCom from './addCategory/index.jsx';
import AddImg from "../../assets/svg/addimg.jpg"
import Image from 'next/image.js';
import { categoryPostFetch } from '@/redux/slice/category/premissionsCreate/create.js';

const CategoryCom = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const [editID, setEditID] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [name, setName] = useState({
    name: '',
    password: '',
  })


  const addPushData = () => {
    dispatch(categoryPostFetch({
      name: name?.name,
    }))
  }

  const categoryGet = useSelector((store) => store.categoryGet)
  const [open, setOpen] = useState(false);



  // get all
  useEffect(() => {
    dispatch(categoryGetFetch())
  }, [])

  // delete funck
  const findDeleteID = (findDeleteID) => {
    dispatch(permissionsDeleteFetch({ id: findDeleteID }))
  }

  useEffect(() => {
    if (categoryGet.status === 'success') setData(categoryGet.data)

  }, [categoryGet])

  const saveFunc = (permission) => {
    dispatch(adminPutFetch({
      id: permission._id,
      name: name.name,
      email: name.email,
      phone: name.phone,
      role: name.role,
      password: name.password,
    }))
    setEditID(null);
  }

  const modalAdd = () => setOpen(true);
  const handleCancel = () => { setOpen(false) };
  return (
    <Wrapper>
      <Container>
        <Container.Text>
          <div>
            <h1> permissions Qoshish</h1>
          </div>
          <Antmodal open={open} onCancel={handleCancel}>
            <Content>
              <div className="subTitle"><h3>Category Q'shish</h3></div>
              <div>
                <Input placeholder="name" type="text" onChange={(e) => setName({ ...name, name: e.target.value })} />
              </div>
              <div>
                <Content.Upload
                  listType="picture-card"
                // dispatch(deployFileFetch({
                //     file: {
                //         target: {
                //             files: [
                //                 e.file.originFileObj
                //             ]
                //         }
                //     }, by: 'antdesing'
                // })
                // )
                >
                  {fileList.length < 1 && <Image style={{ width: '100px', height: '100px' }} src={AddImg} alt="img" />}
                </Content.Upload>
              </div>
              <div>
                <Button width="%" onclick={addPushData}>
                  Qo'shish
                </Button>
              </div>
            </Content>
          </Antmodal>
          <div onClick={modalAdd}>
            <Button color={'black'} size={'17px'} height={'40px'} width={'100px'}>Qo’shish</Button>
          </div>
        </Container.Text>
        <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '670px', overflowX: 'scroll', Width: '100%', maxWidth: '1270px' }}>
          <Container.Table>
            <table>
              <tbody>
                <tr>
                  <th>_id</th>
                  <th>Name</th>
                  <th>Img</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {categoryGet.status === 'loading' ? <Container.Spin><Spin /> &nbsp; Loading...</Container.Spin>
                  :
                  categoryGet.status === 'success' && data?.map((value, index) => {
                    return (
                      <>
                        <tr key={value?._id}>
                          <td>{value._id}</td>
                          <td>{editID === value._id ? (
                            <Input width={300} height={30} radius={'1px solid red'} value={name.name} onChange={(e) => setName({ ...name, name: e.target.value })} />
                          ) : (
                            value?.name
                          )}</td>

                          <td>{value?.icon}</td>
                          <td>
                            {editID === value._id ? (
                              <Container.Btn>
                                <button onClick={() => saveFunc(value)}>💾</button>
                                <button onClick={() => setEditID(null)}>❌</button>
                              </Container.Btn>
                            ) : (
                              <button onClick={() => setEditID(value._id)}>✏️</button>
                            )}
                          </td>
                          <td><button onClick={() => findDeleteID(value._id)}>🗑️</button></td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </table>
          </Container.Table>
        </Container.Scrool>
      </Container>
    </Wrapper>
  );
};

export default CategoryCom
