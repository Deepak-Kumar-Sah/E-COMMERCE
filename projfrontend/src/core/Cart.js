import React,{useState,useEffect} from 'react'
import "../styles.css";
import {API} from "../backend";
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';
const Cart=()=>{
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
        useEffect(()=>{
            setProducts(loadCart())
        },[reload])
      
const loadAllProducts = ()=>{
    return(
        <div>
            <h2>This Section is for loading products</h2>
            {products.map((product,index)=>{
                return <Card 
                key={index} 
                product={product} 
                removeFromCart={true}
                addtoCart={false}
                setReload={setReload}
                reload={reload}
                />
            })}
        </div>
    )
};
const loadCheckout = ()=>{
    return(
        <div>
            <h2>This Section for Checkout</h2>
        </div>
    )
}
    return(
        <Base title="Cart Page">
            <div className='row'>
                <div className='col-6'>{loadAllProducts()}</div>
                <div className='col-6'>{loadCheckout()}</div>
            </div>
        </Base>
    )
}
export default Cart;