import Link from 'next/link';
import React from 'react'
import drinkImg from './drink.jpg'
import Image from 'next/image';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
    
    try {
        const res = await fetch(`${url}${id}`)
        if(!res.ok){
            throw new Error(`failed to fetch drinks: status ${res.status}`)
        }
        return res.json()
        
    } catch (error) {
        console.error(error)
    }
}

const SingleDrink = async ({params}) => {
    const data = await getSingleDrink(params.id)
    const title = data?.drinks[0]?.strDrink;  //if data exist then get drinks[0], if it exist the get strDrink
    const imgSrc = data?.drinks[0]?.strDrinkThumb;
    
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        alt={title}
        className="w-48 h-48 rounded"
        priority
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}

export default SingleDrink