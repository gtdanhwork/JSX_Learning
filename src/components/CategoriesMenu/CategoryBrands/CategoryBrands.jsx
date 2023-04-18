/* eslint-disable no-unused-vars */
import { Checkbox } from 'antd';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const brand = ['MacBook', 'Asus', 'HP', 'Lenovo', 'Acer', 'Dell', 'LG', 'MSI'];

function CategoryBrands(props) {
  return (
    <div className="categoryBrands" style={{ marginTop: '2rem' }}>
      <h3>Brand</h3>
      <Formik
        initialValues={{
          checked: [],
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form
          className="form"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {brand.map((e) => {
            return (
              <div
                key={e}
                style={{
                  display: 'flex',
                  width: '50%',
                  flexDirection: 'row',
                  margin: '10px 0',
                }}
              >
                <Checkbox type="checkbox" name="checked" value={e} />
                <span
                  style={{
                    display: 'flex',
                    paddingLeft: '1rem',
                    alignItems: 'center',
                  }}
                >
                  {e}
                </span>
              </div>
            );
          })}
        </Form>
      </Formik>
    </div>
  );
}

export default CategoryBrands;
