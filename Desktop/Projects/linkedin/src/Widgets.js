import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets' >
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>

            </div>
            {newsArticle("PAPA React is back", "Top News - 9999 readers")}
            {newsArticle("CoronaVirus Nigeria Update", "Top News - 334 readers")}
            {newsArticle("Gatsby is gaining more ground", "Today News - 737 readers")}
            {newsArticle("Car Racing", "Recent News - 943 readers")}
            {newsArticle("Mortal Combact coming soon", "Top News - 279 readers")}
        </div>
    )
}

export default Widgets 
