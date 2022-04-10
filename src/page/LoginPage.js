import React from "react";
import styled from "styled-components";
import LoginForm from "../component/LoginPage/LoginForm";
import Header from "../component/Public/Header";

const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`
const LoginPage = () => {
    return (
        <LoginPageWrapper>
            <LoginForm/>
        </LoginPageWrapper>
    )
}

export default LoginPage;