import React, { useState } from "react";
import {Button, Card as CardComponent} from 'antd';
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { TextBold } from "./styles";

const { Meta } = CardComponent;

export const Card = (props) => {
    const { el } = props;
    const [isFlipped, changeFlipped] = useState(false);
    const onChangeFlipped = () => {
        changeFlipped( !isFlipped );
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={ styles.cardStyle }
                cover={
                    <img alt={ el.name } src={ el.image }
                         style={ styles.imageStyle }/>
                }
                onClick={ onChangeFlipped }
            >
                <Link to="/cart">
                    <Meta
                        title={ el.name }
                        description={ `Price: ${el.price}` }
                    />
                </Link>
            </CardComponent>
            <CardComponent
                hoverable
                style={ styles.cardStyle }
                cover={
                    <img alt={ el.name } src={ el.image }
                         style={ styles.imageStyle }/>
                }
                onClick={ onChangeFlipped }
            >
                <Link to="/cart">
                    <Meta
                        title="Back Side"
                        description={ <TextBold>Hello</TextBold> }
                    />
                </Link>
            </CardComponent>
        </ReactCardFlip>
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