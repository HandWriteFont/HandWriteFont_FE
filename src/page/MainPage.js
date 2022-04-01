import React from "react";
import styled from 'styled-components';
import DescriptionPage from "../component/MainPage/DescriptionPage";
import Header from "../component/Public/Header";
import InitialPage from "../component/MainPage/InitialPage";
import VideoPage from "../component/MainPage/VideoPage";
const MainPageWrapper = styled.div`
    width: 100vw;
`

const MainPage = () => {
    return (
        <MainPageWrapper>
            <Header/>
            {/* <InitialPage/>
            <VideoPage/>
            <DescriptionPage/> */}
        </MainPageWrapper>
    )
}

export default MainPage;