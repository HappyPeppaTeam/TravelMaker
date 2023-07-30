import React from 'react';
import '../css/scheduleStyles.css'

const thumbNailStyle = {
    backgroundImage: 'url(../images/street.jpg)',
    backgroundSize: 'cover',
    height: '200px',
    width: '100%',
}




function JourneyThumbnail() {
    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center">
            <div className="rounded shadow"
                style={thumbNailStyle}>
                <div className="overlay rounded d-flex justify-content-center align-items-center">
                    <div>金瓜石之旅</div>
                </div>
            </div>
        </div>
    );
}

export default JourneyThumbnail;

