import React from "react";
import { PageHeader, Button } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <PageHeader
            ghost={ false }
            onBack={() => window.history.back() }
            title="Shop Awesome"
            backIcon={ <HomeOutlined key="home-icon" /> }
            className="site-page-header"
            extra={
                [
                    <Link to="/cart" key="cart-btn">
                        <Button
                            type="primary"
                            shape="circle"
                        >
                            <ShoppingCartOutlined key="cart-icon" />
                        </Button>
                    </Link>,
                ]
            }
        >
        </PageHeader>
    );
};