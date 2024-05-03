'use client'
import React, { useState } from 'react'
import { Card, IconButton, Input, InputAdornment, TextField } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaCartPlus } from 'react-icons/fa';

const Product = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <Card sx={{ maxWidth: 345 }} raised={true}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/assests/images/banner-1.png"
                title='Hot Deals'

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions className='w-full justify-between'>
                <Button size="small" color='primary' className='w-1/3' variant='contained'>Buy Now</Button>
                <div className='w-1/3'>
                    <Input
                        id="outlined-textarea"
                        type='text'
                        size='small'
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        inputProps={{
                            min: 1,
                            style: { textAlign: 'center' },
                        }}
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="Increase item"
                                    onClick={handleIncrease}
                                    color='info'
                                >
                                    <CiSquarePlus />
                                </IconButton>
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end" >
                                <IconButton
                                    aria-label="Decrease item"
                                    onClick={handleDecrease}
                                    color='error'
                                >
                                    <CiSquareMinus />
                                </IconButton>
                            </InputAdornment>
                        }

                    />
                </div>
                <Button size="small" color='error' variant='contained' className='py-2 w-1/4' ><FaCartPlus /></Button>
            </CardActions>
        </Card >
    )
}

export default Product