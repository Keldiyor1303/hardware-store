// import { Button } from '@mui/material';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import React, { useState } from 'react';
import { Button } from '@mui/material';


const BasketProducts = ({ id, image, title, model, price, stars, description, date, type, themeChange, num, plus, minus }) => {

    const [number, setNumber] = useState(num)

    return (
        <Wrapper themeChange={themeChange}>
            <Zoom bottom cascade>
                <div className="product">
                    <Image themeChange={themeChange}>
                        <img src={`http://142.93.229.148/${image}`} alt="" />
                    </Image>

                    <div className="infoes">
                        <div className="info info-column">
                            <h2>{title}</h2>
                            <p className='model'>{model}</p>
                            <p className='description'>{description}</p>
                        </div>
                        <div className="info">
                            <h3 className='price'>{price}</h3>
                        </div>
                    </div>
                    <div className="numbers">
                        {number !== 1 ? <Button variant="contained" color="error" onClick={() => { minus(id); setNumber(number - 1) }}>-</Button> : <Button variant="contained" color="error" disabled>-</Button>}
                        <p>{number}</p>
                        <Button variant="contained" color="success" onClick={() => { plus(id); setNumber(number + 1) }}>+</Button>
                    </div>

                </div>
            </Zoom>
        </Wrapper >
    );
}

export default BasketProducts;

const Wrapper = styled.div`    
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.background : props.theme.light.background};
    text-decoration: none;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    margin-right: 24px;
    width: 100%;
    position: relative;

    .infoes{
        color: ${(props) => props.themeChange === "dark" ? props.theme.dark.secondaryColor : props.theme.light.secondaryColor};
    
        p{
            font-size: 1rem;
        }

        .description {
            color: white;
        }

        .price {
            font-size: 2rem;
            margin-top: 30px;
        }

        .model {
            color: wheat;
        }

        h2 {
            font-size: 2rem;
        }
    }
    
    .product {
        display: flex;
    }


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

    .numbers {
        display: flex;
        align-items: center;
        gap: 16px;

        position: absolute;
        right: 24px;
        bottom: 24px;

        p {
            font-size: 24px;
        }
    }
    
`

const Image = styled.div`
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.productImgBgColor : props.theme.light.productImgBgColor}; 
    cursor: pointer;
    min-width: 400px;
    height: 400px;
    position: relative;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 300px;
        max-height: 250px;
    }


`
