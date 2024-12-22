import React from 'react'
import { SectionHeader } from '../../common/section-header'
import dataTestimonals from "../../../data/testimonals.json";
import { TestimonalItem } from './testimonal-item';
import "./testimonals.css";

export const Testimonals = () => {
  return (
    <section id="testimonials" className="testimonials">
        <SectionHeader title="Testimonals" />  {/* alt kısmı bunu yazınca sildik, yani yerine yazdık. */}
			
    {/* <div className="section-header">
        <h2>Testimonials</h2>
    </div> */}

    
    <div className="testimonial-carousel">

        {dataTestimonals.map((item)=>(
            <TestimonalItem key={item.id} {...item} />

        ))}
    
    </div>
</section>
  )
}
