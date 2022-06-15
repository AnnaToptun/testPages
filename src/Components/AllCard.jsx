import { Box } from '@mui/system'
import React from 'react'
import arrayProduct from './array'
import { MyCard } from './Card'
import '../App.css';
export function AllCard () {
  return (
    <Box className='products'>
      {
        arrayProduct.map(product => (
          <MyCard key={product.id} product={product}/>
        ))
      }
    </Box>
  )
}  