import React from 'react'
import {About} from "./about/about";
import "./main-content.css";
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { Testimonals } from './testimonal/testimonals';
import { Contact } from './contact/contact';

export const MainContent = () => {
  return (
    <div className="main-content pull-right">
      <About/>
      <Experience/>
      <Education/>
      <Testimonals/>
      <Contact/>
    </div>
  )
}
