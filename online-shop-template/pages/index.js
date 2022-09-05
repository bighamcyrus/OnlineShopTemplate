import React from 'react'

import { client } from '../lib/client';
import {Product, FooterBanner, HeroBanner } from "../components"


const Home = () => {
  return (
    <div>
    <HeroBanner />
    <div className="products-heading">
    
    <h2>Best Selling Products </h2>
    <p> Shoes </p>
    </div>
    
    <div className="products-container">
    {['Product 1', 'Product 2'].map(
      (product) => product)}
      </div>
      
      <FooterBanner />
      
      </div>
      );


}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(query);
}
export default Home
