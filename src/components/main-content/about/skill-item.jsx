import React from "react";


export const SkillItem = (props) => {

    const {title, score} = props;


    return (
        <div className="col-md-6 col-sm-6 col-xs-12 item">
            <div className="skill-info clearfix">
                <h3 className="pull-left">{title}</h3>
                <span className="pull-right">{score}</span>
            </div>
            <div className="progress" style={{ borderRadius: "10px" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `{score}%`}}
                ></div>
            </div>
        </div>
    );
};