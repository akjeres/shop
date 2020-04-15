import React, { useState } from "react";
import {Button, Card as CardComponent} from 'antd';
import { Link } from "react-router-dom";

const { Meta } = CardComponent;

export const Card = (props) => {
    const { el, increase, decrease } = props;

    return (
        <Link to="/cart">
            <CardComponent
                hoverable
                style={ styles.cardStyle }
                cover={
                    <img alt={ el.name } src={ el.image }
                         style={ styles.imageStyle }/>
                }
                actions={[
                    <Button onClick={ decrease }>-</Button>,
                    <Button type="link" disabled style={{
                        cursor: 'default'
                    }}>{ el.quantity }</Button>,
                    <Button onClick={ increase }>+</Button>,
                ]}
            >

                    <Meta
                        title={ el.name }
                        description={ `Price: ${el.price}` }
                    />
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