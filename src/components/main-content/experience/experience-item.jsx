import React from 'react'

export const ExperienceItem = (props) => {

    const {company, title, date, desc, isTopItem}=props;

  return (
    <div className={`${isTopItem && "top-item"} resume-item`}>
    <h2>{company}</h2>
    <span>{title} {date}</span>
    <p>{desc}</p>
</div>
  )
}
