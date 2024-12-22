import React from 'react'
import dataSkills from "../../../data/skills.json";
import { SkillItem } from './skill-item';
import "./skills.css";

export const Skilss = () => {
  return (
    <div className="skills">
        <div className="row">
            {dataSkills.map( (item)=>
             (<SkillItem 
                key={item.id}
                title ={item.title}
                score={item.score}
                />

            ))}
            </div>
    </div>
  );
};
