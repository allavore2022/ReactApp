import React from 'react';
import './Products.css';
import Items from '../../products.json';

function Products() {
    return (
        <div class="container">
            <h1>Products</h1>
            <div class="row justify-content-center">
                {
                    Items.map( item => {
                        return(
                            <div className="card col-3 m-3">
                                <img class="card-img-top" src= { item.picture } alt= { item.name } />
                                <div class="card-body">
                                    <h5 class="card-title">{ item.name }</h5>
                                    <p class="card-text">{ item.description }</p>
                                    <div class="row">
                                        <p class="card-text"> ${ item.price }.00</p>
                                        <button type="button" class="btn btn-light">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
