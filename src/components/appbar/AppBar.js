import React from 'react'

import {
  IoEllipsisVertical,
  IoMailOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

import {AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup} from './styles'
import {IconButton} from '../../ui/buttons'

function AppBar(props) {
  return (
    <AppBarStyles>
      <AppBarItems>
        <AppBarItem>Branding</AppBarItem>
        <AppBarItemGroup>
          <IconButton>
            <IoMailOutline size="1.5rem" />
          </IconButton>
          <IconButton>
            <IoNotificationsOutline size="1.5rem" />
          </IconButton>
          <IconButton>
            <img
              src="https://avatars.dicebear.com/api/initials/Ty.svg?b=%23ff9500&r=50"
              height="52"
              alt=""
            />
          </IconButton>
          <IconButton>
            <IoEllipsisVertical size="1.25rem" color="#999" />
          </IconButton>
        </AppBarItemGroup>
      </AppBarItems>
    </AppBarStyles>
  );
}

export default AppBar