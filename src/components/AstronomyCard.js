import React from 'react';
import classes from './AstronomyCard.module.css'

const AstronomyCard = (props) => {

    const { title, url, hdurl, explanation, date, copyright } = props.data;

    return (
        <div className={classes.astronomyCard}>
            <h3 className={classes.title}>{title}</h3>
            <a href={hdurl} className={classes.imgWrapper}>
                <img src={url}  alt={title}/>
            </a>
            <p>{explanation}</p>
            <span>{date}, {copyright}</span>
        </div>
    )
}



export default AstronomyCard;