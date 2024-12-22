import React from 'react'
import { SectionHeader } from '../../common/section-header'
import dataEducation from "../../../data/education.json";
import {EducationItem} from "./education-item";


export const Education = () => {
  return (

   <section id="education" className="resume">


    <SectionHeader title="Experience"/>


    <div className="row">

   {dataEducation.map((item, index)=> (
                <div className="col-md-12 col-sm-12 col-xs-12" key={item.id}>

                  <EducationItem  {...item} isYopItem={index===0}/> {/* tüm dataları göndermiş olduk */}
                </div>
   ))}
    </div>

</section>
  )
}
