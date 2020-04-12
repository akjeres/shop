import React from "react";
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
    const renderCards = (element) => {
        return (
            <Col span={4} key={element.id}>
                <Card el={ element }/>
            </Col>
        );
    };

    return (
        <>
            <Row justify="space-around">
                { dataCart.map(el => renderCards(el)) }
            </Row>
            <Row justify="center">
                <Col span={4}>
                    <Paragraph style={ style.totatStyle } >
                        <DollarCircleOutlined />
                        &nbsp;Total:&nbsp;
                        <span>0</span>
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