import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import API from '../utils/axios';
import { Button } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import Zoom from 'react-reveal/Zoom';

const Detail = ({ themeChange }) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        API.get(`products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
    }, [id])

    function Stars() {
        let stars = [<StarBorderIcon />, <StarBorderIcon />, <StarBorderIcon />, <StarBorderIcon />, <StarBorderIcon />];
        let starNum = Number(product.stars)

        for (let i = 0; i < 5; i++) {
            if (starNum >= 1) stars[i] = <StarIcon />
            else if (starNum > 0) stars[i] = <StarHalfIcon />
            starNum = starNum - 1
        }

        return stars.map(star => star)
    }

    return (
        <Wrapper themeChange={themeChange}>

            <Button variant="text" className='back' color='info' onClick={() => navigate(-1)} > <ArrowBackIosNewIcon fontSize='small' /> Ortga</Button>

            <Zoom bottom cascade>
                <Info themeChange={themeChange} className="infoes">
                    <Image themeChange={themeChange} className="image">
                        <img src={`http://142.93.229.148/${product.image}`} alt="" />
                    </Image>

                    <div className="info" themeChange={themeChange}>
                        <h2>{product.title}</h2>
                        <p>{product.model}</p>
                        <div className="stars">
                            <Stars />
                            <p className='start'>{product.stars}/5</p>
                        </div>
                        <p className='description'>{product.description}</p>
                        <p className='price'>{product.price}</p>
                    </div>
                </Info>
            </Zoom>
        </Wrapper>
    );
}

export default Detail;

const Wrapper = styled.div`
    padding: 40px;
    min-height: calc(100vh - 100px);
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.primaryColor : props.theme.light.primaryColor};
    
    .back {
        font-size: 16px;
    }

    .info{
        padding: 20px;
        color: ${(props) => props.themeChange === "dark" ? props.theme.dark.secondaryColor : props.theme.light.secondaryColor};
    
        p{
            font-size: 1rem;
        }

        * {
            margin: 10px 0;
        }

        .description {
            color: white;
        }

        .price {
            font-size: 2rem;
            margin-top: 30px;
        }

        .start {
            font-size: 2rem;
        }

        h2 {
            font-size: 2rem;
        }
    }
    
    `

const Info = styled.div`
    margin-top: 20px;
    display: flex;
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.background : props.theme.light.background}; 
    border-radius: 10px;
    overflow: hidden;
    `

const Image = styled.div`
        min-height: 400px;
        min-width: 400px;
        background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.productImgBgColor : props.theme.light.productImgBgColor}; 
        position: relative;

        img {
            max-height: 350px;
            max-width: 350px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) ;
        }

`