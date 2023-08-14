import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../css/MyJourney.css';


const AddNewJourney = () => {

    const plusIconStyle = {
        fontSize: '2rem',
        color: '#2F4E63',
    }

    const addNewThumbnailStyle = {
        width: '100%',
        height: '200px',
        backgroundColor: 'gray',
    }

    return (
        <Link to="/journey/newjourney"
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center">
            <div style={addNewThumbnailStyle}
                className="d-flex align-items-center justify-content-center rounded shadow add-new-journey"
                id="addNewBox">
                <i className="bi bi-plus-lg" style={plusIconStyle}></i>
            </div>
        </Link>
    )
}


function JourneyThumbnail({ journey, setShow, setClickJourney }) {

    const thumbNailStyle = {
        backgroundImage: 'url(../images/street.jpg)',
        backgroundSize: 'cover',
        height: '200px',
        width: '100%',
    }

    const handleThumbnailClick = (e) => {
        e.preventDefault();
        setShow(2);
        setClickJourney(journey.journey_id);
    }

    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center dropdown"
        >
            <div className="rounded shadow"
                style={thumbNailStyle} onClick={handleThumbnailClick}>
                <div className="overlay rounded d-flex justify-content-center align-items-center">
                    <div className='fs-5 fw-semibold'>{journey.journey_name}</div>
                </div>
            </div>
        </div>
    );
}



const JourneyDetail = ({setShow}) => {

    const handleReturn = (e) => {
        e.preventDefault();
        setShow(1);
    }

    return (
        <div id="JourneyBrowse" className='rounded shadow p-3 bg-light'>
            <div id="browseCalendarContainer" className="w-100 mb-3" >
                <h2>行程表</h2>
                <div id="browserCalendar">

                </div>
            </div>
            <div id="browseTextContainer" className="w-100 mb-3" >
                <h2>備註</h2>
                <p>sadkjf;lasdjf</p>
            </div>
            <div id="browseImageContainer" className="w-100 mb-3">
                <h2>相片</h2>
                <div className='row g-2'>
                    {/* {formData.images.map((image, index) => (
                        <div className='col-3' >
                            <div style={{
                                backgroundImage: `url(${image.url})`,
                                backgroundSize: 'cover',
                                height: '200px',
                            }}></div>
                        </div>
                    ))} */}
                </div>
            </div>
            <div id='buttonContainer' className='d-flex'>
                <button className='ms-auto btn btn-primary' onClick={handleReturn}>返回</button>
            </div>
        </div>
    )
}


const MyJourney = () => {




    const containerStyle = {
        minHeight: 'calc(100vh - 96px)',
    }


    const [journeyData, setJourneyData] = useState({
        title: "",
        userId: "",
        journeyStart: "",
        journeyEnd: "",
        journeyId: "",
        description: "",
        privacy: 0,
        thumbnailId: "",
        events: [],
    });

    const [journeys, setJourneys] = useState([{
        journey_name: "123",
    }]);

    const [show, setShow] = useState(1);
    const [clickJourney, setClickJourney] = useState(0);

    useEffect(() => {
        const reqJourneysUrl = "http://localhost/TravelMaker/Backend/public/api/getJourneys";
        // const token = Cookies.get('token');
        const userId = 1;
        const reqParams = {
            user_id: userId
        }

        axios.get(reqJourneysUrl, {
            params: reqParams
        })
            .then(response => {
                setJourneys(response.data);
            })
            .catch((error) => {
                console.error('Axios error:', error);
            });
        
        setShow(1);
        setClickJourney(0);
        
    }, []);

    return (
        <>
            <div className='container-fluid p-0 d-flex'>
                <Sidebar />
                <div className='container rounded my-4' style={containerStyle}>
                    <h1>Title</h1>
                    <hr></hr>
                    {show === 1 && <div className='container'>
                        <div className='row'>
                            {journeys.map((journey, index) => (
                                <JourneyThumbnail key={index} journey={journey} setShow={setShow} setClickJourney={setClickJourney}/>
                            ))}
                            {/* <JourneyThumbnail /> */}
                            <AddNewJourney />
                        </div>
                    </div>}
                    
                    {show === 2 && <JourneyDetail setShow={setShow}/>}

                </div>
            </div>
            <BotSidebar />
        </>
    )
}

export default MyJourney;