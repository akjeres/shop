import React, { useState } from "react";
import { Card as CardComponent } from 'antd';
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { TextBold } from "./styles";

const { Meta } = CardComponent;

export const Card = (props) => {
    const { el } = props;
    const [isFlipped, changeFlipped] = useState(false);
    const onChangeFlipped = () => {
        console.log('isFlipped: ', isFlipped);
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
                <Link to="/details">
                    <Meta title={ el.name } />
                </Link>
                <TextBold>Hello</TextBold>
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
                <Link to="/details">
                    <Meta title="Back Side" />
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