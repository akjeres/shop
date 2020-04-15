import React, {useState} from "react";
import { Row, Col, Typography } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Card } from "./Blocks";
const { Paragraph } = Typography;

const dataCart = [
    {
        id: 11,
        name: "шарик",
        image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
        price: 100,
        quantity: 1,
    },
    {
        id: 12,
        name: "футболка",
        image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
        price: 120,
        quantity: 2,
    },
    {
        id: 14,
        name: "шарик 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
        price: 102,
        quantity: 4,
    }
];

export const Cart = ({ el }) => {
    const [totalCart, changeTotal] = useState(dataCart);
    const increaseValue = (el) => {
        changeTotal(totalCart.map(item => {
            if (el.id !== item.id) return item;

            const result = Object.assign({}, item);
            result.quantity = 1 + item.quantity;
            return result;
        }));
    };
    const decreaseValue = (el) => {
        changeTotal(totalCart.map(item => {
            if (el.id !== item.id) return item;

            const result = Object.assign({}, item);
            result.quantity = item.quantity - 1;
            return result;
        }));
    };
    const renderCards = (element) => {
        const result = (element.quantity) ? (
            <Col span={4} key={element.id}>
                <Card
                    el={ element }
                    increase={ () => increaseValue(element) }
                    decrease={ () => decreaseValue(element) }
                />
            </Col>
        ) : null;
        return result;
    };

    const getTotalValue = (array) => {
        let value = 0;
        array.forEach((item) => {
            const { price, quantity } = item;
            value += (price * quantity);
        });
        return value;
    };

    return (
        <>
            <Row justify="space-around">
                { totalCart.map(el => renderCards(el)) }
            </Row>
            <Row justify="center">
                <Col span={4}>
                    <Paragraph style={ style.totatStyle } >
                        <DollarCircleOutlined />
                        &nbsp;Total:&nbsp;
                        <span>{ getTotalValue(totalCart) }</span>
                    </Paragraph>
                </Col>
            </Row>
        </>
    );
};

const style = {
    totatStyle: {
        margin: '16px auto'
    }
};