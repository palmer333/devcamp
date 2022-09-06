import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from 'antd';
import { addToCart } from "../components/productReducer";


function ProductList() {

    const data_products = useSelector((state) => [state.product]);

    const dispatch = useDispatch()

    
    return (
      <div style={{height : "100%" ,display : "flex",flexDirection: "row" , flexFlow: "row wrap",}}>
        {
          data_products[0].map(x=> (
            <Card
              hoverable
              style={{
                width: 240,
                margin : "20px auto",
              }}
              cover={<img alt="example" src={x.img} style={{borderTopRadius: '6px' }}/>} >


              <h3>{x.name}</h3>
              <h4>Price: {x.sellPrice}</h4>
              <h4>Quantity: {x.quantity}</h4>
              <Button type="primary" onClick={() => dispatch(addToCart(x.id))}>Add to Cart</Button>

            </Card>
          ))       
        }
    </div>    
  )
}

export default ProductList;