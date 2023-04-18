import { useEffect, useState } from 'react';
import Container, { Antmodal, AntSelect, ConTable, Wrapper } from './style.js'
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Button, Input } from '../generic/index.jsx';
import { permissionsGetFetch } from "@/redux/slice/premissions/permissionsGet";
import { permissionPostFetch, resetperPermissionPost } from '@/redux/slice/premissions/premissionsCreate/create.js';
import { startMessage } from '@/redux/slice/message/index.js';
import { permissionsDeleteFetch } from '@/redux/slice/premissions/permissionsDelete/index.js';
import { permissionPutFetch } from '@/redux/slice/premissions/premissionsPut/update.js';
const PermissionsCom = () => {

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('')
  const [editID, setEditID] = useState(null);

  const dispatch = useDispatch()

  const permissionsGet = useSelector((store) => store.permissionsGet)
  const permissionPost = useSelector((store) => store.permissionPost)
  const permissionsDelete = useSelector((store) => store.permissionsDelete)
  const permissionPut = useSelector((store) => store.permissionPut)



  // create funck
  const addFunc = () => {
    dispatch(permissionPostFetch({
      name: name
    }))
  }
  // get all
  useEffect(() => {
    dispatch(permissionsGetFetch())
  }, [])

  useEffect(() => {
    if (permissionsGet.status === 'success') setData(permissionsGet.data)
  }, [permissionsGet])



  // message tme 5s window
  useEffect(() => {
    if (permissionPost.status === 'success')
      dispatch(startMessage({ time: 3, message: `Muvofiyaqatli Q'oshildi`, type: "success", }));
    setTimeout(() => {

    }, 500);
  }, [permissionPost, permissionPut]);


  // delete funck
  const findDeleteID = (findDeleteID) => {
    dispatch(permissionsDeleteFetch({ id: findDeleteID }))
  }


  const saveFunc = (permission) => {
    dispatch(permissionPutFetch({
      id: permission._id,
      name: name
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
          <Antmodal open={open} onOk={() => addFunc()} onCancel={handleCancel}>
            <Container.Add>
              <Input width={300} placeholder={'Name'} onChange={(e) => setName(e.target.value)} />
            </Container.Add>
          </Antmodal>
          <div onClick={modalAdd}>
            <Button color={'black'} size={'17px'} height={'40px'} width={'100px'}>Qo’shish</Button>
          </div>
        </Container.Text>
        <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '670px' }}>
          <Container.Table>
            <table>
              <tbody>
                <tr>
                  <th>_id</th>
                  <th>name</th>
                  <th>createdAt</th>
                  <th>updatedAt</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {permissionsGet.status === 'loading' ? <Container.Spin><Spin /> &nbsp; Loading...</Container.Spin>
                  :
                  permissionsGet.status === 'success' && data?.map((value, index) => {
                    return (
                      <>
                        <tr key={value?._id}>
                          <td>{value._id}</td>
                          <td>{editID === value._id ? (
                            <Input width={300} height={30} radius={'1px solid red'} value={name} onChange={(e) => setName(e.target.value)} />
                          ) : (
                            value?.name
                          )}</td>
                          <td>{value?.createdAt}</td>
                          <td>{value?.updatedAt}</td>
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

export default PermissionsCom
