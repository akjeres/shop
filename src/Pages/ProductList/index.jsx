import React from "react";
import { Row, Col } from 'antd';
import { Card } from './Blocks';

const data = [
    {
        id: 11,
        name: "шарик",
        image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
        price: 100,
    },
    {
        id: 12,
        name: "футболка",
        image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
        price: 120,
    },
    {
        id: 14,
        name: "шарик 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
        price: 102,
    }
];

export const ProductList = (el) => {
  const renderCards = (element) => {
      return (
          <Col span={4} key={element.id}>
              <Card el={element} />
          </Col>
      );
  };
  return (
      <Row justify="space-around">
          { data.map(card => renderCards(card)) }
      </Row>
  );
};