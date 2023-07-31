import React from 'react';
import '../css/journeyThumbnail.css'

const thumbNailStyle = {
    backgroundImage: 'url(../images/street.jpg)',
    backgroundSize: 'cover',
    height: '200px',
    width: '100%',
}

const moreDetailStyle = {
    height: '2rem',
    width: '2rem',
}


function JourneyThumbnail({onClick}) {
    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center" onClick={onClick}>
            <div className="rounded shadow"
                style={thumbNailStyle}>
                <div className="overlay rounded d-flex justify-content-center align-items-center position-relative">
                    <div className="position-absolute top-0 end-0 p-1 m-3 rounded more-detail"
                        style={moreDetailStyle}>
                        <i
                            className="bi bi-three-dots text-secondary fs-5 position-absolute top-50 start-50 translate-middle"></i>
                    </div>
                    <div>金瓜石之旅</div>
                </div>
            </div>
        </div>
    );
}

export default JourneyThumbnail;

