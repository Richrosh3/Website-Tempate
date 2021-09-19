//////////////////////////////////////////////////////////////////////
//                          CUSTOMIZATION                           //
//////////////////////////////////////////////////////////////////////
//               This file allows you to customize the              //
//                 text and images in each section                  //
//////////////////////////////////////////////////////////////////////

import React from 'react'
import './Section.css'

function Section({lightBg, topLine, lightText, lightTextDesc, headline, 
    description, topLineText, img, alt, imgStart}) 
{
    return (
        <>
           <div className = {lightBg ? 'home__section' : 'home__section darkBg'}>
               <div className="container">
                   <div className="row home__section-row"
                    style = {{display: 'flex', flexDirection: imgStart ==='start' ? 'row-reverse' : 'row'}}
                   >
                       <div className="col">
                           <div className="home__section-text-wrapper">
                               <div className={topLineText ? "top-line" : "top-line-dark"}>
                                   {topLine}
                               </div>
                               <h1 className = {lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                               </h1>
                               <p className = {lightTextDesc ? 'home__section-subtitle' : 'home__section-subtitle dark'}>
                                   {description}
                               </p>
                           </div>
                       </div>
                       <div className="col">
                           <div className="home__section-img-wrapper">
                               <img src={img} alt={alt} className="home__section-img" />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Section
