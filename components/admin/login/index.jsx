import React, { useState } from "react";
import { Container, Content, Wrapper } from "./stayle.js";
import { useRouter } from "next/router.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import Show from "../../../assets/svg/show.svg"
import { Button, Input } from "../../Generic/index.jsx";
import { loginPosFetch } from "../../../redux/slice/admin/login/index.js";
import { startMessage } from "../../../redux/slice/message/index.js";
export const LoginCom = () => {

    const dispatch = useDispatch()
    const quary = useRouter()

    const [login, setLogin] = useState({ email: '', password: '' });
    const loginPost = useSelector((store) => store.loginPost);

    const [showInput, setShowInput] = useState(false);

    const handleChangeEmail = (e) => setLogin({ ...login, email: e.target.value })
    const handelChangePas = (e) => setLogin({ ...login, password: e.target.value })

    const checkFunc = () => {
        dispatch(loginPosFetch({
            email: login?.email,
            password: login.password
        })) }

    useEffect(() => {
        if (loginPost.status === 'success') {
            quary.push('home')
            dispatch(startMessage({ time: 3, message: 'siz muvofiyaqatli `ottingiz', type: 'success' }))
        }
        if (loginPost.status === 'notFound') {
            dispatch(startMessage({ time: 3, message: 'phone number, yoki password xato kiritilgan !!!', type: 'error' }))
        }
    }, [loginPost])

    const handleButtonClick = () => setShowInput(!showInput);
    return (

        <Container>
            <Wrapper>
                <Container>
                    <Content>
                        <div className="subTitle">Login</div>
                        <Input onChange={handleChangeEmail} placeholder="email" type="email" />
                        <div className="inputShow">
                            <Input onChange={handelChangePas} placeholder="password" type={showInput ? "text" : "password"} />
                            <Show className='show' onClick={handleButtonClick} />
                            {showInput ? '' : <p onClick={handleButtonClick}>/</p>}
                        </div>
                        {
                            loginPost.status === 'loading' ? <div><Spin /> </div>
                                :
                                <Button onClick={checkFunc}>
                                    Login
                                </Button>
                        }
                    </Content>
                </Container>,
            </Wrapper>
        </Container>
    );
};

export default LoginCom;


