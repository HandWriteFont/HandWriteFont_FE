import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import auth, { changeField, initializeForm, login } from "../../store/auth";
import * as S from './LoginForm.style';

const PageWrapper = styled.div`
    background: #000;
    width: 1920px;
    height: 937px;
`
const LoginForm = () => {
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }))
    const dispatch = useDispatch();
    const [loginInfo, setInfo] = useState({
        id: null,
        password: null
    })
    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }
    // const inputId = (e) => {
    //     setInfo({
    //         ...loginInfo,
    //         id: e.target.value
    //     })
    //     dispatch(changeField({
    //         form: 'login',
    //         id: e.target.value
    //     }))
    // }
    // const inputPw = (e) => {
    //     setInfo({
    //         ...loginInfo,
    //         password: e.target.value
    //     })
    // }
    const clickLogin = () => {
        // if(!loginInfo.id || !loginInfo.password){
        //     alert('로그인정보를 입력해주세요')
        // }
        // if(loginInfo.id && loginInfo.password){
        //     console.log(loginInfo)
        //     dispatch(login({
        //         username: loginInfo.id, 
        //         password: loginInfo.password
        //     }))
        //     console.log(loginInfo)

        // }
        const {username, password} = form
        dispatch(login({username, password}))
    }
    useEffect(() => {
        dispatch(initializeForm('login'))
    },[dispatch])
    return (
        <PageWrapper>
            <S.LoginPlate>
                <S.LoginText>로그인</S.LoginText>
                <S.FormWrapper>
                    <S.Form>
                        <S.FormName>ID</S.FormName>
                        <S.FormInput onChange={onChange} name='username' value={form.username}/>
                    </S.Form>
                    <S.Form>
                        <S.FormName>PassWord</S.FormName>
                        <S.FormInput type="password" onChange={onChange} name='password' value={form.password}/>
                    </S.Form>
                </S.FormWrapper>
                <S.SubmitBtn onClick={clickLogin}>로그인</S.SubmitBtn>
            </S.LoginPlate>
        </PageWrapper>
    )
}

export default LoginForm