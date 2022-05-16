import React from 'react';
import "./Navbar.css";
import { Link} from "react-router-dom";
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
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import Alert from '@mui/material/Alert';
import Serch from '../Search/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import Sidebar from "../Sidebar/Sidebar"
import Badge from '@mui/material/Badge';
import logo from "./logo.png"
import ProfilePopover from '../ProfilePopover/ProfilePopover';
import NotifyPopover from  '../NotifyPopover/NotifyPopover';
import { useUserAuth } from '../../context/UserAuthContext'


const Navbar = () => {
const {user} = useUserAuth()
  const [setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
    <AppBar>
      <Container maxWidth="false" className="bar">
        <Toolbar disableGutters>
        <Link to="/" style={{color:"white",fontWeight:"bold", textDecoration:"none"}}> <Typography 
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          > 
       <img src={logo}  style={{height:"30px", width:"30px" }} alt='logo'/>&nbsp;devhouse 
          </Typography> 
        </Link> 


          {/* hambuger icon */}
       
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 8, display: { xs: 'flex', md: 'none'  } }}
          >
          <img src={logo}  style={{height:"30px", width:"30px" }} alt='logo'/>&nbsp;devhouse
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
          
        {/* <Button sx={{ my: 2, color: 'white', display: 'block' }}> Explore</Button>
        <Button sx={{ my: 2, color: 'white', display: 'block' }}> Official Blog</Button> */}
          </Box>
 
        
        

          {/* Search Component */}
          <Box  sx={{ flexGrow: 2.5, display: { xs: 'none', md: 'flex' } }} style={{paddingRight:"12px"}}>
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
                {user ?  <Avatar alt="Remy Sharp" src={user.photoURL} /> : <Avatar alt="Remy Sharp" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" /> }
            
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
      
       </React.Fragment>
  );
};
export default Navbar;
