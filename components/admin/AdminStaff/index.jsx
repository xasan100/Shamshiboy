import { useEffect, useState } from 'react';
import Container, { Antmodal, AntSelect, ConTable, Wrapper } from './style.js'
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import AdminStaff from '../addimg/index.jsx';
import { startMessage } from '../../../redux/slice/message/index.js';
import { adminGetFetch } from '../../../redux/slice/admin/adminGet/index.js';
import { adminDeleteFetch } from '../../../redux/slice/admin/adminDelete/index.js';
import { adminPutFetch } from '../../../redux/slice/admin/adminPut/update.js';
import { Button, Input } from '../../Generic/index.jsx';

const AdminCom = () => {

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const [name, setName] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    password: '',
  })


  const dispatch = useDispatch()

  const adminGet = useSelector((store) => store.adminGet)
  const permissionPost = useSelector((store) => store.permissionPost)
  const adminDelete = useSelector((store) => store.adminDelete)
  const permissionPut = useSelector((store) => store.permissionPut)


  // get all
  useEffect(() => {
    dispatch(adminGetFetch())
  }, [])

  useEffect(() => {
    if (adminGet.status === 'success') setData(adminGet.data)
  }, [adminGet])



  // message tme 5s window
  useEffect(() => {
    if (permissionPost.status === 'success')
      dispatch(startMessage({ time: 3, message: `Muvofiyaqatli Q'oshildi`, type: "success", }));
    setTimeout(() => {

    }, 500);
  }, [permissionPost, permissionPut, adminDelete]);


  // delete funck
  const findDeleteID = (findDeleteID) => {
    dispatch(adminDeleteFetch({ id: findDeleteID }))
  }
  const [editID, setEditID] = useState(null);
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
          <Antmodal open={open} onOk={() => addFunc()} onCancel={handleCancel}>
            <AdminStaff />
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
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Password</th>
                  <th>Role</th>
                  <th>Img</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {adminGet.status === 'loading' ? <Container.Spin><Spin /> &nbsp; Loading...</Container.Spin>
                  :
                  adminGet.status === 'success' && data?.map((value, index) => {
                    return (
                      <>
                        <tr key={value?._id}>
                          <td>{value._id}</td>
                          <td>{editID === value._id ? (
                            <Inputx width={300} height={30} radius={'1px solid red'} value={name.name} onChange={(e) => setName({ ...name, name: e.target.value })} />
                          ) : (
                            value?.name
                          )}</td>
                          <td>{editID === value._id ? (
                            <Input width={300} height={30} radius={'1px solid red'} value={name.email} onChange={(e) => setName({ ...name, email: e.target.value })} />
                          ) : (
                            value?.email
                          )}</td>
                          <td>{editID === value._id ? (
                            <Input width={300} height={30} radius={'1px solid red'} value={name.phone} onChange={(e) => setName({ ...name, phone: e.target.value })} />
                          ) : (
                            value?.phone
                          )}</td>

                          <td>{editID === value._id ? (
                            <Input width={300} height={30} radius={'1px solid red'} value={name.password} onChange={(e) => setName({ ...name, password: e.target.value })} />
                          ) : (
                            value?.password
                          )}</td>

                          <td>{editID === value._id ? (
                            <Input width={300} height={30} radius={'1px solid red'} value={name.role} onChange={(e) => setName({ ...name, role: e.target.value })} />
                          ) : (
                            value?.role
                          )}</td>

                          <td>{value?.image}</td>

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

export default AdminCom
