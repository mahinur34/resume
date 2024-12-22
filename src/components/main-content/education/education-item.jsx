import React from 'react'

export const EducationItem = (props) => {

    const {title, date, desc, isTopItem}=props;

  return (
    <div className={`${isTopItem && "top-item"} resume-item`}>
    <h2>{title}</h2>
    <span>{date}</span>
    <p>{desc}</p>
</div>
  )
}
