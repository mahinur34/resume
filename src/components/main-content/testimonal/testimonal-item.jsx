import React from 'react'

export const TestimonalItem = (props) => {

const {image, name, message} =props;

  return (
    <div className="item" style={{marginBottom :"20px"}}>
    <div className="row">
        <div className="col-md-2 col-sm-2 hidden-xs">
            <div className="thumb">
                <img src={`/images/${image}`}
                alt="testimonial-customer"/>
            </div>
        </div>
        <div className="text col-md-10 col-sm-10 col-xs-12">
            <div>{message}</div>
            <span className="author">- {name} -</span>
        </div>
    </div>
</div>

  )
}
