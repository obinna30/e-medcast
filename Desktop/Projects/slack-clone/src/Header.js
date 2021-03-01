import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const [user] = useAuthState(auth);
  console.log('user is', user)
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          onClick={()=>auth.signOut()}
          className="header_avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder="search" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
