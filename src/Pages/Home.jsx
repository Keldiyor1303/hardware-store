import React from 'react';
import styled from 'styled-components';
import Products from '../Containers/Products';

const Home = ({ themeChange, element, added }) => {
    return (
        <Wrapper themeChange={themeChange}>
            <Products themeChange={themeChange} element={element} added={added} />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    padding-bottom: 20px;
    min-height: calc(100vh - 100px);
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.primaryColor : props.theme.light.primaryColor};
`
