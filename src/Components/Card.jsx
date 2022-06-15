import { Card, Button } from '@mui/material'
import { Box } from '@mui/system'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {React, useState} from 'react'

export function MyCard ({product}) {
  const [heart, setHeart] = useState(false)
  const heartActive = () =>{
 (heart)? setHeart(false): setHeart(true)
  }
  return (
    <Card  className='product'>
      
      <img className="img" src={product.img} alt="" />
      <span className='title'>{product.title}</span>
      <Box className='blockPrices'>
        {
          (product.priceLast ==='' )
          ? ``
          : <span className='blockPriceLast'>{product.priceLast} ₴</span>
        }
        <span>{product.price} ₴</span>
        <Box>
        {
          (heart)
          ?<FavoriteBorderIcon onClick={heartActive} className='heartCard'/>
          : <FavoriteIcon  onClick={heartActive}  className='heartCard'/>
        }
      </Box>
      </Box>
      

      <Button  variant="contained" className='button'>Buy </Button>
    </Card>
  )
} 
