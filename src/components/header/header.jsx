import React from 'react'
import { MobileMenu } from './mobile-menu';
import { Avatar } from './avatar';
import "./header.css";
import {Name} from "./name";
import { SocialIcons } from './social-icons';
import { NavigationBar } from './navigation-bar';
import { Copyright } from './copyright';



export const Header = () => {
  return (
    <header className="header pull-left">
        <MobileMenu/>
        <Avatar/>
        <Name/>
        <SocialIcons/>
        <NavigationBar/>
        <Copyright/>
    </header>
  )
};
