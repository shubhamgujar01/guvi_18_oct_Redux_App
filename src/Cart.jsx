import React, { useState } from 'react';
import { products } from './Products';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Cart = () => {

    const ind = useSelector((state) => state.Index.value)

    const [quant, setQuant] = useState(1)
    const [price, setPrice] = useState(products[ind].price)

    function addHandler() {
        setQuant(quant + 1)
        setPrice((products[ind].price * quant)+products[ind].price )
    }

    function removeHandler(){
        setQuant(quant-1)
        if(price>=products[ind].price){
            setPrice((products[ind].price*quant)-products[ind].price)
        }
        
    }


    console.log(ind)

    return (
        <Container>
            <Row style={{ marginTop: '30px' }}>
                <Col lg={4} md={4} xs={12}><img src={products[ind].thumbnail} style={{ width: '300px', height: '200px' }} alt="Product Thumbnail" /></Col>
                <Col lg={4} md={4} xs={12}>
                    <div className='container'>
                        <h3>{products[ind].title}</h3>
                        <h6>{products[ind].description}</h6>

                    </div>
                </Col>
                <Col lg={4} md={4} xs={12}>
                    <div className='container' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <i class="fa-solid fa-minus" style={{ marginRight: '10px' }} onClick={removeHandler}></i>
                        <h6 style={{ marginRight: '10px', border: '3px solid red', textAlign: 'center', padding: '5px' }}>{quant}</h6>
                        <i className="fa-solid fa-plus" style={{ marginRight: '10px' }} onClick={addHandler}></i>
                        <h4>${price}</h4>
                    </div>
                </Col>
                <Row>
                    <Col><hr style={{ position: 'relative', top: '30px' }}></hr></Col>
                </Row>
            </Row>
            <Row style={{ position: 'relative', top: '30px' }}>
                <Col lg={4} md={4} xs={12}>
                    <h6>Subtotal</h6>
                </Col>
                <Col lg={8} md={8} xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <h6>${price}</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
