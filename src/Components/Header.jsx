import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CustomizedSwitches from './ThemeCheck';
import Storefront from '@material-ui/icons/Storefront';
import Admin from '@material-ui/icons/PersonOutline';
import Mall from '@material-ui/icons/LocalMallOutlined';

const Header = ({ themeChange, setThemeChange }) => {

    const auth = localStorage.getItem("token")

    const { pathname } = useLocation()

    return (
        <>
            {
                (pathname !== "/admin") && <Wrapper themeChange={themeChange}>
                    <Link to="/">
                        <h1 themeChange={themeChange}>LOGO</h1>
                    </Link>

                    <nav>
                        {/* <NavLink to="aboutMyself">O`zim haqimda</NavLink> */}
                        <NavLink to="/"><Storefront /> Texnikalar</NavLink>
                        <NavLink to="basket"><Mall /> Savatcha</NavLink>
                        {
                            auth && <NavLink to="adminPanel"><Admin /> Admin Panel</NavLink>
                        }
                        <CustomizedSwitches themeChange={themeChange} setThemeChange={setThemeChange} />
                    </nav>

                </Wrapper>
            }
        </>
    );
}

export default Header;

const Wrapper = styled.header`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    height: 100px;
    padding: 0 40px;
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.background : props.theme.light.background};

    position: sticky;
    z-index: 5;
    top: 0;
    left: 0;

    img {
        width: 150px;
        height: 100px;
    }

    h1 {
        color: ${(props) => props.themeChange === "dark" ? props.theme.dark.color : props.theme.light.color};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.themeChange === "dark" ? props.theme.dark.secondaryColor : props.theme.light.secondaryColor};
    }

    nav {
        display: flex;
        align-items: center;
        gap: 32px;

        a {
            display: flex;
            align-items: center;
            gap: 5px;

            &.active{
                color: ${(props) => props.themeChange === "dark" ? props.theme.dark.color : props.theme.light.color};;
            }
        }
    }
`
