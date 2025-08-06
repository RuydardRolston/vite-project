import React from 'react';
//import Logo from '../Assets/logo.svg';
import {Bscart2} from "react-icons/bs";
import { HiOutlineBars3, HioutlinebBars3 } from "react-icons/hi2";
import { Box,Drawer,Listitem,ListitemButton,ListItemIcon,ListItemText} from "@mui/material";
import  HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import  HiShoppingCartRoundedIcon  from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  constmenuOptions= [
    {text: "Home",
     icon: <HomeIcon/> 
    },
    {text: "About",
     icon: <InfoIcon/>
    },
    {text: "Testimonials",
      icon: <CommentRoundedIcon/>
    },
    {text: "Home",
      icon: <HomeIcon/>
    },
    {text: "Cart",
      icon: <HiShoppingCartRoundedIcon/>,
    },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>
        
      </div>
        <div className='nav-links-container'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
          <a href="">
            <Bscart2 className='navbar-cart-icon'/>  
          </a>
          <button className="primary-button">Bookings Now</button>
          <HiOutlineBars3 />
        </div>
      </nav>
  );
};

export default Navbar