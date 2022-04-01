import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';

import React from 'react';
import Bounce from 'react-reveal/Bounce';

const Product = ({ data, themeChange, added, deleted }) => {

    const { pathname } = useLocation()

    const bag = JSON.parse(localStorage.getItem('bag')) ? JSON.parse(localStorage.getItem('bag')) : [];
    let bagId = bag.map((element) => element.id)

    const { id, image, title, model, price, type } = data;

    return (
        <Wrapper type={type} themeChange={themeChange}>
            <Bounce bottom cascade>
                <div className="product">
                    <Image to={`/detail/${id}`} themeChange={themeChange}>
                        <img src={`http://142.93.229.148/${image}`} alt="" />
                    </Image>
                    <div className="infoes">
                        <div className="info info-column">
                            <h2>{title}</h2>
                            <p>{model}</p>
                        </div>
                        <div className="info">
                            <h3>{price}</h3>
                            {
                                pathname === "/adminPanel"
                                    ? true ? <Button key={Math.random()} variant="contained" color="error" onClick={() => deleted(id)}> <RemoveShoppingCart /> </Button>
                                        : ""
                                    : !bagId.includes(id) ? <Button key={Math.random()} onClick={() => added(data)} variant="contained" color="success"> <AddShoppingCartIcon /> </Button>
                                        : <Button key={Math.random()} disabled variant="contained" color="success"> <AddShoppingCartIcon /> </Button>
                            }

                        </div>
                    </div>

                </div>
            </Bounce>
        </Wrapper >
    );
}

export default Product;

const Wrapper = styled.div`  

grid-column: ${({ type }) => type === "laptop" ? `span 2` : `span 1`};
.product {
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.background : props.theme.light.background};
    text-decoration: none;
    border-radius: 10px;
    overflow: hidden;
    color: ${(props) => props.themeChange === "dark" ? props.theme.dark.secondaryColor : props.theme.light.secondaryColor};;
    padding-bottom: 10px;
    /* margin-right: 24px; */

    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;


    display: flex;
    flex-direction: column;


    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 20px;
    }

    .info-column {
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
}
`

const Image = styled(Link)`
    cursor: pointer;
    height: 300px;
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.productImgBgColor : props.theme.light.productImgBgColor};;
    position: relative;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 250px;
    }
    
`
