import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import deer from '../assets/fimg.png'
import hurulu from '../assets/hurulu1.png'
import img1 from '../assets/img1.png'
import jeep from '../assets/jeep.png'
import kaudulla from '../assets/kaudulla1.png'
import lanka from '../assets/lanka.png'
import nine from '../assets/nine1.png'
import sigiri from '../assets/sigiri1.png'
import EmailIcon from '@mui/icons-material/Email'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import LinkedCameraOutlinedIcon from '@mui/icons-material/LinkedCameraOutlined'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import CardLocation from '../components/location card/CardLocation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from '../assets/logo.png';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setIsLoaded(true);

  }, []);

  return (






    
    <div>


      
      {/* <!-- ==========  Section 1  ========== --> */}
      <section style={{ backgroundColor: '#EFEFEF' }}id="section1">
        <Grid container>
          <Grid item xs={12} md={6} p={10}>
            <Typography variant='h2' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">Journey By <span style={{ color: '#FF4D00' }}>Military Jeep </span> <br />Adventure on wheels . </Typography>
            <Typography mt={2} variant='h6' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sed risus pretium quam
              vulputate dignissim suspendisse in est ante.</Typography>


            <Button data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" sx={{ mt: 2, color: '#00000' }} variant='contained'>Contact us</Button>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} data-aos="zoom-in">
            <img src={jeep} alt="" />
          </Grid>

        </Grid>
      </section>


      {/* <!-- ========== Section 2 Start ========== --> */}
      <section id="section2">
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }} >

          <Typography variant='h3'>
            Who we are </Typography>



        </div>
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
          <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '10%' }} />
        </div>



        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}  >
          <Typography mt={2} variant='subtitle1' color={'#757575'}>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor <br /> incididunt ut labore et
            dolore magna aliqua. .</Typography>
        </div>

        <Grid container mt={2}>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} >
            <img src={img1} width={'60%'} height={'100%'} alt="" />
          </Grid>

          <Grid item xs={12} md={6} p={5} >
            <Typography variant='subtitle1' color={'#757575'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante.</Typography>
            <Typography variant='subtitle1' color={'#757575'} mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante.</Typography>
            <Typography variant='subtitle1' color={'#757575'} mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante.</Typography>

            <div style={{ width: '20%', marginTop: 10 }} >
              <hr style={{ background: '#FF4D00', height: '5px', border: 'none' }} />
            </div>
          </Grid>


        </Grid>
      </section>

      {/* <!-- ========== Section 3 Start ========== --> */}
      <section style={{ backgroundColor: '#FFBB98', height: '20Vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} id="section3">


        <Typography variant='h3' color={'#00000'}>Lorem ipsum dolor sit </Typography>




      </section>




      <Grid container p={2} spacing={2}>
        <Grid item xs={12} md={3}>
          <CardLocation img={kaudulla} title="Kaudulla national park" />

        </Grid>
        <Grid item xs={12} md={3}>
          <CardLocation img={hurulu} title="Hurulu eco park - Habarana" />

        </Grid>
        <Grid item xs={12} md={3}>
          <CardLocation img={sigiri} title="Sigiriya Rock Fotress" w="100%" />

        </Grid>

        <Grid item xs={12} md={3}>
          <CardLocation img={nine} title="Nine Arch" w="110%" />

        </Grid>

      </Grid>

      {/* <!-- ========== Section 4 Start ========== --> */}
      <section style={{ backgroundColor: '#EFEFEF' }} id="section4">


        <Grid container >


          <Grid item xs={12} md={6} p={5} >
            <div style={{ display: 'flex', justifyContent: 'start', marginTop: 10 }} >

              <Typography variant='h3'>Lorem ipsum dolor sit </Typography>



            </div>
            <div >
              <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '20%' }} />
            </div>
            <Typography variant='subtitle1' color={'#757575'} fontWeight={600} mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante. eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante.</Typography>
            <Typography variant='subtitle1' color={'#757575'} fontWeight={600} mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante. eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante.</Typography>

          </Grid>

          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2}>
            <img src={lanka} width={'60%'} height={'100%'} alt="" />
          </Grid>
        </Grid>
      </section>

      {/* <!-- ========== Section 5 Start========== --> */}
      <section id="section5">
        <div style={{ backgroundImage: `url(${deer})`, backgroundSize: 'cover', width: '100%', height: '100vh' }}>

          <Grid container mt={2}>
            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2}>
            </Grid>

            <Grid item xs={12} md={6} p={5} >
              <div style={{ display: 'flex', justifyContent: 'start', marginTop: 10 }} >

                <Typography variant='h3'>Contact Us <span style={{ color: '#FF4D00' }}>.</span> </Typography>



              </div>
              <div >
                <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '20%' }} />
              </div>
              <Typography variant='subtitle1' color={'#757575'} fontWeight={500} mt={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante. eiusmod tempor incididunt ut labore et d.</Typography>

              <div style={{ display: 'flex', marginTop: 20 }} >
                <LocalPhoneIcon sx={{ color: '#FF4D00', fontSize: '1.5rem' }} />
                <Typography ml={2} variant='h6' color={'#757575'} fontWeight={600} >076 434 5463</Typography>

              </div>
              <div style={{ display: 'flex', marginTop: 10 }} >
                <EmailIcon sx={{ color: '#FF4D00', fontSize: '1.5rem' }} />
                <Typography ml={2} variant='h6' color={'#757575'} fontWeight={600} >abcedaj123@gmail.com</Typography>

              </div>
            </Grid>


          </Grid>

        </div>
      </section>


      {/* <!-- ========== Footer Start========== --> */}

      <section>
        <div style={{}}>

          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#371a18' }}>

            <Typography variant='h6' fontWeight={600} color={'#fff'}>Lorem ipsum dolor sit amet, consectetur adipiscing eli </Typography>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#371a18', gap: 10 }}>
            <FacebookOutlinedIcon sx={{ color: '#ffff', fontSize: '1.5rem' }} />
            <LinkedCameraOutlinedIcon sx={{ color: '#ffff', fontSize: '1.5rem' }} />
            <LocalPhoneIcon sx={{ color: '#ffff', fontSize: '1.5rem' }} />
            <EmailIcon sx={{ color: '#ffff', fontSize: '1.5rem' }} />
          </div>



        </div>
      </section>


    </div>
  )
}

export default Home
