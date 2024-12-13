import React from 'react'
import newCollections from '../Assets/Frontend_Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collection flex w-screen lg:p-32 flex-col items-center gap-2 lg:gap-5'>
        <h2 className='text-2xl lg:text-4xl'>NEW COLLECTIONS</h2>
        <hr className='w-[25%] lg:w-[10%] border-none bg-black h-1 rounded-full' />
        <div className="collection flex w-full gap-5 justify-center flex-wrap">
        {newCollections.map((item, index)=>{ 
            return(
                <Item key={index} img={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />    
            )
        })}
        </div>
    </div>
  )
}

export default NewCollections