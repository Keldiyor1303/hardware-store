import { Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../Components/Product';


const Products = ({ themeChange, element, added, deleted }) => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    function submit() {
        navigate("create")
    }

    return (
        <Wrapper>
            {
                pathname === "/adminPanel" && <Button variant="contained" color="success" onClick={submit} className="submit">Texnika qo`shish</Button>
            }

            <div className='products'>
                {
                    element.map((data) => {
                        return (
                            <Product
                                key={data.id}
                                themeChange={themeChange}
                                added={added}
                                data={data}
                                deleted={deleted}
                            />
                        )
                    })
                }
            </div>

        </Wrapper>
    );
}

export default Products;

const Wrapper = styled.div`
    padding: 0 40px;

    .products {
        padding-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(346px, 1fr));
        gap: 24px;
        grid-auto-flow: dense;
    }

    .submit {
        width: 100%;
        height: 40px;
        margin-top: 20px;
    }

`
