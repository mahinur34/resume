import React from 'react'
import { SectionHeader } from '../../common/section-header'
import dataExperiences from "../../../data/experience.json";
import { ExperienceItem } from './experience-item';

export const Experience = () => {
  return (

   <section id="experience" className="resume">


    <SectionHeader title="Experience"/>


    <div className="row">

   {dataExperiences.map((item, index)=> (
                <div className="col-md-12 col-sm-12 col-xs-12" key={item.id}>
                  <ExperienceItem  {...item} isYopItem={index===0}/> {/* tüm dataları göndermiş olduk */}
                </div>
   ))}
    </div>

</section>
  )
}
