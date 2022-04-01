import React from 'react';
import styled from 'styled-components';
import BasketProducts from '../Containers/BasketProducts';

const Basket = ({ themeChange, plus, minus }) => {
    const productData = JSON.parse(localStorage.getItem('bag')) ? JSON.parse(localStorage.getItem('bag')) : [];

    return (
        <Wrapper themeChange={themeChange}>
            <div className="products">
                {
                    productData.map(({ id, image, title, model, price, stars, description, date, type, num }) => {
                        return (
                            <BasketProducts
                                key={id}
                                id={id}
                                date={date}
                                type={type}
                                image={image}
                                title={title}
                                model={model}
                                price={price}
                                stars={stars}
                                num={num}
                                plus={plus}
                                minus={minus}
                                description={description}
                                themeChange={themeChange}
                            />
                        )
                    })
                }
            </div>
        </Wrapper>
    );
}

export default Basket;

const Wrapper = styled.div`
    min-height: calc(100vh - 100px);
    background-color: ${(props) => props.themeChange === "dark" ? props.theme.dark.primaryColor : props.theme.light.primaryColor};
    padding: 20px 40px;

    .products {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`
