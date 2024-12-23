import React from 'react'
import "./section-header.css"

export const SectionHeader = (props) => {
  return (
    <div className="section-header">
				<h2>{props.title}</h2>
				{props.children}
			</div>
  )
}
