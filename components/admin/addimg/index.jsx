import { Container, Content, Wrapper } from "./stayle.js";
import { useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import Addimg from "../../../assets/svg/addimg.svg"
import Image from "next/image.js";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { Button } from "../../Generic/index.jsx";
import { adminAddFetch } from "../../../redux/slice/admin/adminCreate/create.js";
export const AdminStaff = () => {
    const dispatch = useDispatch()

    const [phoneFace, setPhoneface] = useState('+998')
    const [fileList, setFileList] = useState([]);
    const [data, setData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        phone: '',
        image: '',
    })
    const addPushData = () => {
        dispatch(adminAddFetch({
            name: data?.name,
            email: data?.email,
            role: data?.role,
            password: data?.password,
            phone: data?.phone,
        }))
    }


    console.log(data?.name, 'name');





    return (
        <Content>
            <div className="subTitle"><h3>Admin Qo`shsih</h3></div>
            <div>
                <Input placeholder="name" type="text" onChange={(e) => setData({ ...data, name: e.target.value })} />
            </div>
            <div>
                <Input placeholder="email" type="email" onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <div>
                <Input placeholder="Permissition Id" type="text" onChange={(e) => setData({ ...data, role: e.target.value })} />
            </div>
            <div>
                <Input placeholder="Password" type="text" onChange={(e) => setData({ ...data, password: e.target.value })} />
            </div>
            <div>
                <PhoneInput
                    maxLength={17}
                    className={'customPhoneInput'}
                    onChange={(e) => setData({ ...data, phone: e })}
                    value={phoneFace}

                />
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
                    {fileList.length < 1 && <Image style={{ width: '100px', height: '100px' }} src={Addimg} alt="img" />}
                </Content.Upload>
            </div>
            <div>
                <Button width="%" onClick={addPushData}>
                    Login
                </Button>
            </div>
        </Content>
    );
};

export default AdminStaff;



