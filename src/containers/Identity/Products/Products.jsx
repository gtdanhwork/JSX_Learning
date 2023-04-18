import React from 'react';
import data from '../../../data';
import { Button, Card, List, ConfigProvider } from 'antd';

const Products = () => {
  const products = data.products;

  return (
    <div className="products" style={{width: '85%', margin: '0 2rem'}}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: '#6A983C',
              colorPrimaryBorder: '#46760A',
              colorPrimaryHover: 'none',
              colorPrimaryActive: '#4c6e2b',
            },
          },
        }}
      >
        <List
          grid={{column: 5 }}
          dataSource={products}
          bordered
          style={{ backgroundColor: '#EBEBEB' }}
          renderItem={(item) => (
            <div className="ant-list-items">
              <List.Item style={{padding:'0 1rem'}}>
                <Card>
                  <span
                    style={{
                      background: '#F4F8EC',
                      padding: '0 1rem',
                      color: '#6A983C',
                      borderRadius: '2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    - 36 %
                  </span>
                  <br />
                  <img src="product.png" alt="product" />
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <div
                    className="priceBtn"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <p>${item.price}</p>
                    <Button type="primary">Buy Now</Button>
                  </div>
                </Card>
              </List.Item>
            </div>
          )}
        />
      </ConfigProvider>
    </div>
  );
};

export default Products;
