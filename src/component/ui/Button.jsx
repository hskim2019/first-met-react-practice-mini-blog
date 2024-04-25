import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;
    // 버튼 컴포넌트에서 props 로 받은 title 이 버튼 목록에 표시
    // props로 받은 onClick 은 StyledButton 에 넣어줌으로써 클릭 이벤트를 상위 컴포넌트에서 받을 수 있게 한다.
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;