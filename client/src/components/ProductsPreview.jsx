import React, { useState, useEffect } from 'react';
import { ProductPreviewCard } from './ProductsPreviewCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AddProduct } from './AddProduct';

export const ProductsPreview = () => {

    const [products, setProducts] = useState([]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
        .then(responce => responce.json())
        .then(data => setProducts(data?.data))
        .catch(e => console.log(e))
    }, []);

    const onAddProduct = (product) => {
        console.log(product)
    }

    return (
        <div className="container mx-auto pb-4 w-2/3 text-black bg-slate-300" >
            <h2>Products</h2>
            <Carousel responsive={responsive} >
                {
                    products.length > 0 && products.map((product, index) => {
                        (<div className='w-full p-3'> 
                        <ProductPreviewCard key={index} product={product} onAddProduct={onAddProduct}/>
                        </div>)
                    })
                }
            </Carousel>
        </div>
    )
}