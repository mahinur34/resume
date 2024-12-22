import React from 'react'
import { SectionHeader } from '../../common/section-header'
import { ButtonResumeDownload } from "../../common/button-resume-download";
import { Intro } from './intro';
import { Skilss } from './skills';

export const About = () => {
  return (
    <section id="about" className="about">
        <SectionHeader title="About Me" >
            <ButtonResumeDownload/>
        </SectionHeader>

        <Intro/>
        <Skilss/>
    </section>
  )
}
