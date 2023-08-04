import React, {useRef, useEffect, useState} from 'react';

import '../css/journeyThumbnail.css'

const thumbNailStyle = {
    backgroundImage: 'url(../images/street.jpg)',
    backgroundSize: 'cover',
    height: '200px',
    width: '100%',
}




function JourneyThumbnail({handleOpenModal, journey, setJourneyDetail, journeyDetail}) {




    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center dropdown" 
            onClick={() => {
                console.log(journey);
                setJourneyDetail({...journey});
                console.log(journeyDetail);
                handleOpenModal();
            }}>
            <div className="rounded shadow"
                style={thumbNailStyle}> 
                <div className="overlay rounded d-flex justify-content-center align-items-center">
    
                    <div className='fs-5 fw-semibold'>{journey.title}</div>
                </div>
            </div>
        </div>
    );
}

export default JourneyThumbnail;

