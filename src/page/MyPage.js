import React from "react";
import styled from "styled-components";
import Profile from "../component/MyPage/Profile";
import Header from "../component/Public/Header";

const PageWrapper = styled.div`
    width: 100%;
    height: 937px;
    background: #000;
`

const MyPage = () =>{
    return(
        <PageWrapper>
            <Header/>
            <Profile/>
        </PageWrapper>
    )
}

export default MyPage;