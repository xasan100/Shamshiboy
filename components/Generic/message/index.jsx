import Container from './style'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import WarningIcon from '../../../assets/svg/worningIcon.svg'
import SuccessIcon from '../../../assets/svg/successIcon.svg'
import ErrorIcon from '../../../assets/svg/errorIcon.svg'
import MessageClose from '../../../assets/svg/messageClose.svg'
import { resetAllData } from '../../../redux/slice/message/index.js';


const Message = () => {

    const {hiddenBool, message, time, type} = useSelector((state)=> state.messageSlice)

    const dispatch = useDispatch()

    useEffect(()=> {
        setTimeout(()=> {
            dispatch(resetAllData())
        }, time)
    }, [hiddenBool])

    const closeFunc = () => {
        dispatch(resetAllData())
    }

    const iconFunc = (type) => {
        switch (type){
            case 'error': return <ErrorIcon />
            case 'success': return <SuccessIcon />
            default: return <WarningIcon />
        }
    }
    const messageFunc = (type) => {
        switch (type){
            case 'error': return <>
                <p className={'title'}>Error</p>
                <p className={'desc'}>{message}</p>
            </>
            case 'success': return <>
                <p className={'title'}>Success</p>
                <p className={'desc'}>{message}</p>
            </>
            default: return <>
                <p className={'title'}>Warning</p>
                <p className={'desc'}>{message}</p>
            </>
        }
    }

    return(
        <Container hiddenState={hiddenBool}>
            <Container.Left>
                {iconFunc(type)}
            </Container.Left>
            <Container.Right>
                <Container.MessageArea>
                    {messageFunc(type)}
                </Container.MessageArea>
                <Container.IconArea>
                    <MessageClose className={'pointer'} onClick={()=> closeFunc()} />
                </Container.IconArea>
            </Container.Right>
        </Container>
    )
}

export default Message