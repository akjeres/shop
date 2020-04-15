import React from "react";
import { PageHeader, Button } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";

export const HeaderComponent = () => {
    const history = useHistory();
    return (
        <PageHeader
            ghost={ false }
            onBack={() => {
                history.push("/");
            }}
            title="Shop Awesome"
            backIcon={ <HomeOutlined key="home-icon" /> }
            className="site-page-header"
            extra={
                [
                    <Button
                        type="primary"
                        shape="circle"
                        onClick={() => {
                            history.push("/cart");
                        }}
                    >
                        <ShoppingCartOutlined key="cart-icon" />
                    </Button>,
                ]
            }
        >
        </PageHeader>
    );
};