import React from 'react';
import styled from 'styled-components';
import Products from '../Containers/Products';

const Adminpanel = ({ themeChange, element, deleted }) => {
    return (
        <Wrapper themeChange={themeChange}>
            <Products themeChange={themeChange} element={element} deleted={deleted} />
        </Wrapper>
    );
}

export default Adminpanel;

const Wrapper = styled.div`
    padding-bottom: 20px;
    min-height: calc(100vh - 100px);
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.primaryColor : props.theme.light.primaryColor};
`