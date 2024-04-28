import React, { useEffect } from 'react'
import { Card, Typography } from '@mui/material'
import './animation.css'


const CardLocation = ({ img, title, w }) => {


    return (
        <>
        <div >
            <Card sx={{ borderRadius: 3, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: 'auto' }} >

                <img src={img} width={w} alt="" />
                <div style={{ padding: 2, margin: 2, display: 'flex', justifyContent: 'center' }} >
                    <Typography variant='h6' color={'#00000'} fontWeight={'800'}>{title}</Typography>
                </div>
                <div style={{ padding: 10, margin: 5, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='p' color={'#00000'} fontWeight={'400'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspe................................... </Typography>

                </div>

            </Card>
        </div></>
    )
}

export default CardLocation
