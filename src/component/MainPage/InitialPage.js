import React from "react";
import styled from "styled-components";
const BackgroudImg = styled.div`
    width: 100%;
    height: 564px;
    background-color: lightgray;
    //배경 색 페이지 구분용 삭제예정
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 373px 0 0 0;
`
const ArticleWrapper = styled.div`
    width: 500px;
    height: 185px;
    text-align: center;
    border: 1px solid black;
`
const Title = styled.span`
    display: block;
    font-size: 40px;
    margin: 0 0 19px 0;
`
const Description = styled.span`
    display: block;
    font-size: 30px;
`
const TryButton = styled.div`
    width: 140px;
    height: 45px;
    font-size: 19px;
    text-align: center;
    background: #000;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 181px;
`
const InitialPage = () =>{
    return (
        <BackgroudImg>
            <ArticleWrapper>
                <Title>졸작이름</Title>
                <Description>설명설명설명설명설명설명설명설명</Description>
            </ArticleWrapper>
            <TryButton>Try</TryButton>
        </BackgroudImg>
    )   
}

export default InitialPage;