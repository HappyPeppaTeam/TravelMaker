import React, {useRef, useEffect} from 'react';
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


const MoreDropDown = () => {

    return (
        <div className="dropdown-menu" id="moreDropdown">
            <a className="dropdown-item"><i
                className="bi bi-arrow-up-right-square"></i><span className="ps-1">開啟</span></a>
            <a className="dropdown-item" href="#"><i className="bi bi-pencil-square"></i><span className="ps-1">編輯</span></a>
            <a className="dropdown-item" href="#"><i className="bi bi-pencil"></i><span className="ps-1">重新命名</span></a>
            <a className="dropdown-item" href="#"><i className="bi bi-image"></i><span className="ps-1">更改封面圖片</span></a>
            <a className="dropdown-item" href="#"><i className="bi bi-trash3"></i><span className="ps-1">刪除</span></a>
        </div>
    )
}


function JourneyThumbnail({handleOpenModal}) {

    const moreDropdown = useRef(null);
    const page = useRef(null);
    
    useEffect(() => {
        moreDropdown.current = document.getElementById('moreDropdown');
        // page.current = document;
        handleCloseDropdown();
    }, [])

    const handleDropdown = (event) => {
        event.preventDefault();
        event.stopPropagation();
        moreDropdown.current.style.top = event.clientY + 'px';
        moreDropdown.current.style.left = event.clientX + 'px';
        moreDropdown.current.classList.add('show');
    }

    const handleCloseDropdown = () => {
        document.addEventListener('click', function (event) {
            if (!moreDropdown.current.contains(event.target)) {
                // Hide the dropdown menu if a click occurs outside of it
                moreDropdown.current.classList.remove('show');
            }
        });
    }

    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center" onClick={handleOpenModal}>
            <div className="rounded shadow"
                style={thumbNailStyle}>
                <div className="overlay rounded d-flex justify-content-center align-items-center position-relative">
     
                    <div className="more-detail position-absolute top-0 end-0 p-1 m-3 rounded" style={moreDetailStyle} onClick={handleDropdown}
                        >
                        <i
                            className="bi bi-three-dots text-secondary fs-5 position-absolute top-50 start-50 translate-middle"></i>
                    </div>
                   
                    <div>金瓜石之旅</div>
                </div>
                <MoreDropDown />
            </div>
        </div>
    );
}

export default JourneyThumbnail;

