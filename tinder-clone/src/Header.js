import React from 'react'
import './Header.css'

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className = "header">

        <IconButton>
            <PersonIcon fontSize="large" className = "header__icon"></PersonIcon>
        </IconButton>

          <img
            className = "header__logo"
            src = "https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
            alt = "logo"
          />
        <IconButton>
          <ForumIcon fontSize="large" className = "header__icon"> </ForumIcon>
        </IconButton>

    </div>
  )
}

export default Header