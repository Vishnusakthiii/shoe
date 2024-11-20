import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { height, margin, width } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./Shoe.css"

const pages = ['Home', 'Our Product', 'Features', 'About Us', 'Feedback'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Shoe() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div className='container-fluid text-center' >
      <AppBar style={{ padding: '10px', backgroundColor: 'white',width:'100%' }} position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src='https://themesdesign.in/tailwick/html-dark/assets/images/logo-dark.png' width={130} sx={{ start:'0',display: { xs: 'none', md: 'flex' } }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 30,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu

                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center', fontWeight: '500' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 5 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '10' } }}>
              {pages.map((page) => (
                <Button
                  key={page}

                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'GrayText', display: 'block', fontWeight: '900' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <button className='btn btn-success' id='signin'>
                    Sign In
                  </button>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className='view'>

      <div className='container-lg block' >
        <div className='text-center row mt-5'>  
          <div className=' text-center col-sm-12 col-md-6 col-lg-6 mt-5'>
            <h1 style={{ fontSize: '50px' }}>Exclusive Collections <br /> 2024</h1>
            <br />
            <p style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>In 2024, metallics will be taking over the sneaker world. I <br /> love this trend because there are so many different ways to <br /> wear it. You can wear sequined sneakers,  white sneakers  <br />with metallic accents, or all-over silver.</p>
            <button id='shop'>Shop Now <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-6' style={{ marginTop: '80px' }}>
            <img src="https://themesdesign.in/tailwick/html-dark/assets/images/product-home.png" alt="" style={{height:'auto',width:'80%'}} />
          </div>
        </div>
        <div>
          <h1 style={{ marginTop: '150px' }}>
            Our Latest Product
          </h1>
          <div className='col-12 row'>

            <div className='col-sm-6 col-md-6 col-lg-3' style={{ marginTop: '80px' }}>    <Card sx={{ maxWidth: 360 }}>
              <CardMedia 
               sx={{ height:300, width: 300 }}
               image="https://themesdesign.in/tailwick/html-dark/assets/images/img-16.png " 
                title="green iguana" 
               
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Green Sneakers Skate  </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  $299.99 </Typography>
                <button className='btn btn-primary mt-3' style={{ fontSize: '13px'}}>Add to Cart</button>

              </CardContent>

            </Card>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-3' style={{ marginTop: '80px' }}>    <Card sx={{ maxWidth: 360 }}>
              <CardMedia
                sx={{ height: 300, width: 300 }}
                image="https://themesdesign.in/tailwick/html-dark/assets/images/img-17.png "
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Nike Running Shoes     </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  $129.49 </Typography>
              </CardContent>
              <button className='btn btn-primary' style={{ fontSize: '13px',marginBottom:'27px' }}>Add to Cart</button>

            </Card>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-3' style={{ marginTop: '80px' }}>    <Card sx={{ maxWidth: 360 }}>
              <CardMedia
                sx={{ height: 280, width: 300 }}
                image="https://themesdesign.in/tailwick/html-dark/assets/images/img-18.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Nike Air Max Sneakers Shoe       </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  $149.99 </Typography>
              </CardContent>
              <button className='btn btn-primary' style={{ fontSize: '13px',marginBottom:'20px' }}>Add to Cart</button>

            </Card>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-3' style={{ marginTop: '80px' }}><Card sx={{ maxWidth: 360 }}>
              <CardMedia
                sx={{ height: 280, width: 300 }}
                image="https://themesdesign.in/tailwick/html-dark/assets/images/img-19.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dunk Sneakers Skate shoe    </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  $174.65 </Typography>
              </CardContent>
              <button className='btn btn-primary' style={{ fontSize: '13px',marginBottom:'20px' }}>Add to Cart</button>
            </Card>
            </div>
          </div>
        </div>
        <div className='col-12 row '>
          <div className='text-start col-sm-12 col-md-6 col-lg-6' id='text'>
            <h1>
              Explore our flagship <br />product and discover its <br /> unique features</h1>
            <br /> <p style={{ fontSize: '18px' }}>Whatever your running gait, a good pair of running shoes <br />will provide flexibility, durability, and support.</p>
            <br /><h6>* Matches Your Foot Shape & Type</h6>
            <h6>* Easy to Wear </h6>
            <h6>* Heels That You Can Wear</h6>
            <h6>* Good Quality & Condition </h6>
            <h6>* Segments of Solid Rubber  </h6>
            <a href="">Shopping Now</a>
          </div >
          <div className='col-sm-12 col-md-6 col-lg-6' >

            <img src="https://themesdesign.in/tailwick/html-dark/assets/images/cta.png" alt="" style={{ height: '40%',width:'auto',marginTop:'250px'}} />
          </div>
        </div>
        <div className='col-12 row d-flex flex-wrap' style={{ marginTop: '180px' }}>
          <div className='text-center col-sm-12 col-md-6 col-lg-6'><img src="https://themesdesign.in/tailwick/html-dark/assets/images/about.jpg" alt="" style={{ height: '60%',width:'auto'}} /></div>
          <div className='text-start col-sm-12 col-md-6 col-lg-6' >
            <p style={{ color: 'purple' }}>About Us</p>
            <h1>We Provide high Quality <br />shoes</h1>
            <p style={{ fontSize: 'larger', textAlign: 'start', marginLeft: '10px', marginTop: '15px' }}>Look for a shoe with solid construction that will give your <br />feet the support they need. Next, look for quality materials <br /> that will make your feet comfortable and keep them healthy. <br /> <br />

              Low-quality shoes may skimp on stitching, or use low quality <br />glue that's prone to coming apart. A higher-quality shoe will <br /> use advanced construction to ensure that the shoe holds up <br /> over time, and also eliminate any spots.</p>
            <button id='shop'>Explore Now  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>

          </div>
        </div>
        <div style={{ marginTop: '150px' }}><h1>What Our Customer Says</h1>

          <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className='row'>
                  <div className='col'>
                    <div class="card" >
                      <img src="https://themesdesign.in/tailwick/html-dark/assets/images/avatar-4.png" class="card-img-top" alt="..." style={{ height: '80px', width: '80px', borderRadius: '50%', marginLeft: '160px' }} />
                      <div class="card-body">
                        <h5 class="card-title">Anthony Hobbs</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div class="card" >
                      <img src="https://themesdesign.in/tailwick/html-dark/assets/images/avatar-7.png" class="card-img-top" alt="..." style={{ height: '80px', width: '80px', borderRadius: '50%', marginLeft: '160px' }} />
                      <div class="card-body">
                        <h5 class="card-title">angela ulligan</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div class="card" >
                      <img src="https://themesdesign.in/tailwick/html-dark/assets/images/avatar-9.png" class="card-img-top" alt="..." style={{ height: '80px', width: '80px', borderRadius: '50%', marginLeft: '160px' }} />
                      <div class="card-body">
                        <h5 class="card-title">Naruto</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className='row'>
                  <div className='col'>
                    <div class="card" >
                      <img src="https://themesdesign.in/tailwick/html-dark/assets/images/avatar-4.png" class="card-img-top" alt="..." style={{ height: '80px', width: '80px', borderRadius: '50%', marginLeft: '160px' }} />
                      <div class="card-body">
                        <h5 class="card-title">Baruto</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div class="card">
                      <img src="https://themesdesign.in/tailwick/html-dark/assets/images/avatar-7.png" class="card-img-top" alt="..." style={{ height: '80px', width: '80px', borderRadius: '50%', marginLeft: '160px' }} />
                      <div class="card-body">
                        <h5 class="card-title">Ninja </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div class="card" >
                      <img src="https://themesdesign.in/tailwick/html-dark/assets/images/avatar-9.png" class="card-img-top" alt="..." style={{ height: '80px', width: '80px', borderRadius: '50%', marginLeft: '160px' }} />
                      <div class="card-body">
                        <h5 class="card-title">Bheem</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        <div className='text-center col-12 row d-flex '>
          <div className='col-sm-6 col-md-6 col-lg-5 mt-5'><h1>Sign Up For Update & Newsletter</h1>
            <p>Tell us which describes you, and we'll get in touch with next steps.</p></div>
          <div className='text-start col-sm-6  mx-0 mt-5'> <input type="email" name="" id="" placeholder='vishnusakthiii273@gmail.com' style={{ height: '39px', width: '260px', borderRadius: '20px' }} />
            <button className='text-center  mx-5 mt-5' id='shop'>Subscribe Now  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>
          </div>
        </div>
        <div className='col-12 row ' style={{ textAlign: 'start' }}>
          <div className='text-center col-sm-6 col-md-6 col-lg-3  mt-5 '><img src="https://themesdesign.in/tailwick/html-dark/assets/images/logo-dark.png" alt="" style={{ height: '20px' }} />
            <br />


            Premium Multipurpose Admin & Dashboard Template You can  build any type of web application like eCommerce, CRM, CMS,  Project management apps, Admin Panels, etc using Tailwick</div>
          <div className='text-center col-sm-6 col-md-6 col-lg-3  mt-5'>
            <p>Dashboards <br />
              Analytics <br />
              CRM <br />
              Ecommerce <br />
              Email <br />
              HR <br />
              Social Media</p> <br />
          </div>
          <div className='text-center col-sm-6 col-md-6 col-lg-3  mt-5'>About Us
            News <br />
            Service <br />
            Our Policy <br />
            Support 24/7 <br />
            FAQ's</div>
          <div className='text-center col-sm-6 col-md-6 col-lg-3  mt-5'>
            Get Help <br />
            About Us <br />
            Contact Us<br />
            Payment Policy<br />
            Return Policy<br />
          </div>

        </div>
        <div style={{marginTop:'50px'}}>
          <p>2024 © Tailwick. Design & Develop by Themesdesign</p>
        </div>
      </div>
      </div>

    </div>
  );
}
export default Shoe;

// npm install -D tailwindcss
// npx tailwindcss init