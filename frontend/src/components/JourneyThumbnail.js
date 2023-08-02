import React, {useRef, useEffect} from 'react';
import { Dropdown } from 'bootstrap';
import '../css/journeyThumbnail.css'

const thumbNailStyle = {
    backgroundImage: 'url(../images/street.jpg)',
    backgroundSize: 'cover',
    height: '200px',
    width: '100%',
}




function JourneyThumbnail({handleOpenModal}) {

    // const moreDetailStyle = {
    //     height: '2rem',
    //     width: '2rem',
    // }

    




    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center dropdown" onClick={handleOpenModal}>
            <div className="rounded shadow"
                style={thumbNailStyle}>
                <div className="overlay rounded d-flex justify-content-center align-items-center">
     
                    {/* <div className="more-detail position-absolute top-0 end-0 p-1 m-3 rounded" style={moreDetailStyle}  
                        >
                        <i
                            className="bi bi-three-dots text-secondary fs-5 position-absolute top-50 start-50 translate-middle"></i>
                            
                    </div> */}
                    
                    <div className='fs-5 fw-semibold'>金瓜石之旅</div>
                </div>
                {/* <MoreDropDown/> */}
            </div>
        </div>
    );
}

export default JourneyThumbnail;

