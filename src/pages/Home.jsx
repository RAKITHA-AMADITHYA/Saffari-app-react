import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import jeep from '../assets/jeep.png'
const Home = () => {
  return (
    <div>
      {/* <!-- ==========  Section 1 Starts ========== --> */}
      <section style={{backgroundColor:'#EFEFEF'}} >
        <Grid container>
          <Grid item xs={12} md={6} p={5}>
            <Typography variant='h2'>Journey By <span style={{ color: '#FF4D00' }}>Military Jeep </span>  <br />Adventure on wheels . </Typography>
            <Typography mt={2} variant='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sed risus pretium quam
              vulputate dignissim suspendisse in est ante.</Typography>


            <Button  sx={{mt:2,color:'#00000'}} variant='contained'>Contact us</Button>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2}>
            <img src={jeep} alt="" />
          </Grid>

        </Grid>
      </section>
      {/* <!-- ==========  Section  1 Ends  ========== --> */}

    </div>
  )
}

export default Home
