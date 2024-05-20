import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

// global style
import { Reset } from './styles/globalStyle';

// styled components @import style 하기위한
import { Helmet } from 'react-helmet-async';

// 화면 하단 react-query로 api 호출하는 상태를 ui로 보여줌
// 개발시 devtools 사용
import { ReactQueryDevtools } from 'react-query/devtools';

// 상태관리 Recoil
// import { useRecoilValue } from "recoil";
// atoms(from Recoil)에 선언된 상태 value
// import { isUiModeAtom } from "./atoms";

// import StyledProps from "./samples/StyledProps";
// import StyledStyle from "./samples/StyledStyle";
// import StyledCircle from "./samples/StyledCircle";
// import TsForm from "./samples/TsForm";

import Header from './components/Header';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 600px;
    flex-direction: column;
    height: 100%;
    padding: 0 1em;
    /* align-items: center; */
    /* justify-content: flex-start; */

    /* globalStyle.ts로 이동 */
    /* color: ${(props) => props.theme.textColor}; */
    /* background-color: ${(props) => props.theme.bgColor}; */

    a {
        color: ${(props) => props.theme.textColor};
    }
`;

function App() {
    // const isUiMode = useRecoilValue(isUiModeAtom);

    return (
        <Wrapper>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
            </Helmet>
            <Reset />
            <Header />

            <Outlet context={{ authName: 'chad' }} />

            <ReactQueryDevtools initialIsOpen={true} />

            {/* <Routes></Routes> */}

            {/* styled-components 프롭스 */}
            {/* <StyledProps /> */}

            {/* styled-components 스타일 */}
            {/* <StyledStyle /> */}

            {/* 타입스크립트 프롭스 */}
            {/* <StyledCircle bgColor="red" borderColor="orange" text="입력텍스트" /> */}
            {/* <StyledCircle bgColor="blue" /> */}

            {/* <TsForm /> */}
        </Wrapper>
    );
}

export default App;
