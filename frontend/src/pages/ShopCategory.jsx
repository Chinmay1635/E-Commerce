import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import  Item  from '../Components/Item/Item'

export const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category '>
        <img src={props.banner} alt="" />
        <div className='w-screen flex p-10 justify-center flex-wrap gap-5'>
          {all_product.map((item, index)=>{
            if(item.category === props.category){
              return (
                <Item key={index} img={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
              )
            }
          })}
        </div>
    </div>
  )
}
