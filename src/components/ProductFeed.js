import React from 'react'
import Product from './Product'



function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0,4).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }
            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt=""/>
            <div className="md:col-span-2">
            {products.slice(4,5).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }
            </div>
            <div className="md:col-span-1">
            {products.slice(5,6).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }

            </div>
            <div className="md:col-span-1">
            {products.slice(6,7).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }

            </div>
            <div className="md:col-span-1">
            {products.slice(7,8).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }

            </div>
            <div className="md:col-span-1">
            {products.slice(8,9).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }

            </div>
            <div className="md:col-span-2">
            {products.slice(9,10).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }

            </div>
            
            
            {products.slice(10,products.length).map(({id,title,price,description,category,image})=>(
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
            }
            
        </div>
    )
}

export default ProductFeed
