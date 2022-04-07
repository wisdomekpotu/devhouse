import * as React from 'react';
import "./Navbar.css";
import AppBar from '@mui/material/AppBar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
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
import Alert from '@mui/material/Alert';
import Serch from '../Search/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Sidebar from "../Sidebar/Sidebar"
import Badge from '@mui/material/Badge';


// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
// import { color } from '@mui/system';
import ProfilePopover from '../ProfilePopover/ProfilePopover';
import NotifyPopover from  '../NotifyPopover/NotifyPopover';

const pages = ['Articles', 'Communities', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <React.Fragment>
    <AppBar>
      <Alert style={{backgroundColor:"#10B981", color:"white" 
      , fontSize:"14px" }}> 
      <marquee behavior="scroll" direction="left"  width="1400"> 
      ✨Welcome to the Official Launch of DevHouse HQ⚡🎉 <span style={{color:"#8896A3"}}>|</span> ✨Welcome to the Official Launch of DevHouse HQ⚡🎉 <span style={{color:"#8896A3"}}>|</span>  ✨Welcome to the Official Launch of DevHouse HQ⚡🎉 <span style={{color:"#8896A3"}}>|</span>
      ✨Welcome to the Official Launch of DevHouse HQ⚡🎉 <span style={{color:"#8896A3"}}>|</span> 
      ✨Welcome to the Official Launch of DevHouse HQ⚡🎉 <span style={{color:"#8896A3"}}>|</span> 
      ✨Welcome to the Official Launch of DevHouse HQ⚡🎉 <span style={{color:"#8896A3"}}>|</span> 
      ✨Welcome to the Official Launch of DevHouse HQ⚡🎉 <span style={{color:"#8896A3"}}>|</span>  
       </marquee>
      
      </Alert>
      <Container maxWidth="false" className="bar">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO 
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
            {/* <Sidebar/> */}
            
      
           
         
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
 
        
        

 
          <Box  sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} style={{paddingRight:"12px"}}>
         <Serch />
         </Box>
 
         <Box sx={{ flexGrow: 0 }} style={{paddingRight:"12px"}}>
            <Tooltip title="mood">
              <IconButton  sx={{ p: 0 }}>
               < WbSunnyIcon  style={{color:"aqua"}}/>
              </IconButton>
            </Tooltip>
            {/* <Menu
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
      



          <Box sx={{ flexGrow: 0,display: { xs: 'none', md: 'flex' } }} style={{paddingRight:"14px"}}>
            <Tooltip title="Notifications">
            <Badge badgeContent={4} color="secondary">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               < NotificationsNoneOutlinedIcon  style={{color:"aqua"}}/>
              </IconButton>
              </Badge>
          
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
           
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
             
            >
               {
                <MenuItem >
                  <Typography textAlign="center">{<NotifyPopover/>}</Typography>
                </MenuItem>
              }
            </Menu>
          </Box>




          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" />
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
              {
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{<ProfilePopover/>}</Typography>
                </MenuItem>
              }
            </Menu>
          </Box>
            


         
        </Toolbar>
      </Container>
   
    </AppBar>
       <br />
       <br />
       <br />
       <br />
       <br />
       </React.Fragment>
  );
};
export default Navbar;
