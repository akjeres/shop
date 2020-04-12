import React, { useState } from "react";
import { Card as CardComponent } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = CardComponent;

export const Card = (props) => {
    const { el } = props;

    console.log(el);
    return (
        <Link to="/cart">
            <CardComponent
                hoverable
                style={ styles.cardStyle }
                cover={
                    <img alt={ el.name } src={ el.image }
                         style={ styles.imageStyle }/>
                }
            >

                    <Meta title={ el.name } />
                    <div>Price: { el.price }</div>
                    <div>Amount: { el.quantity }</div>
            </CardComponent>
        </Link>
    );
};

const styles = {
    cardStyle: {
        width: 240,
        cursor: 'pointer',
    },
    imageStyle: {
        height: 240,
        objectFit: 'contain'
    }
};