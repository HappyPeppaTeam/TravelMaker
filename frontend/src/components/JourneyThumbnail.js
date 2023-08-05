import React from 'react';

import '../css/journeyThumbnail.css'

const thumbNailStyle = {
    backgroundImage: 'url(../images/street.jpg)',
    backgroundSize: 'cover',
    height: '200px',
    width: '100%',
}




function JourneyThumbnail({handleOpenModal, journey, setJourneyDetail}) {


    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center dropdown" 
            onClick={() => {
                setJourneyDetail({...journey});
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

