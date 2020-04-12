import React from "react";
import { Layout, Row, Col } from 'antd';
import { HeaderComponent } from 'Pages/ProductList/Blocks';

const { Footer, Content } = Layout;

export const Cart = () => {

    return (
        <Layout style={styles.layoutStyle}>
            <HeaderComponent />
            <Content>
                cart
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

const styles = {
    layoutStyle: {
        minHeight: '100vh',
    }
};