import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import axios from 'axios';
import '../css/journey.css';
import JourneyThumbnail from '../components/JourneyThumbnail';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';
import JourneyModel from '../components/JourneyModal';
import withAuthorization from '../hook/withAuthorization';


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




function Journey() {


    const [journeys, setJourneys] = useState([
        {
            journey_id: 0,
            journey_name: "test",
            description: "test",
            user_id: 0,
            privacy: 0,
            thumbnail_id: 0,
            edit_time: "2023-07-26 15:18:33",
            journey_start: "2023-07-25 08:00:00",
            journey_end: "2023-07-25 19:00:00"
        }
    ]);

    useEffect(() => {
        const getJourneyUrl = 'http://localhost/TravelMaker/Backend/public/api/getJourneys?user_id=1';

        axios.get(getJourneyUrl)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response;
            })
            .then((response) => {
                setJourneys(response.data);
            })
            .catch((error) => {
                console.error('Axios error:', error);
            })
    }, [])


    const [journeyDetail, setJourneyDetail] = useState({
        journey_id: 0,
        journey_name: "test",
        description: "test",
        user_id: 0,
        privacy: 0,
        thumbnail_id: 0,
        edit_time: "2023-07-26 15:18:33",
        journey_start: "2023-07-25 08:00:00",
        journey_end: "2023-07-25 19:00:00",
        events: [],

    });

    const [clickJourneyId, setClickJourneyId] = useState(0);

    useEffect(() => {
        const getEventUrl = `http://localhost/TravelMaker/Backend/public/api/getEvents?journey_id=${clickJourneyId}`;
        axios.get(getEventUrl)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response;
            })
            .then((response) => {
                const currentJourney = journeys.find(journey => journey.journey_id === clickJourneyId);
                setJourneyDetail({
                    ...currentJourney,
                    events: response.data,
                })
                // console.log("journeyDetail response:", journeyDetail);
            })
            .catch((error) => {
                console.error('Axios error:', error);
            })

    }, [clickJourneyId, journeys])




    const journeyModalRef = useRef(null);
    const calenderRef = useRef(null);
    const calendarEditRef = useRef(null);

    useEffect(() => {
        journeyModalRef.current = new Modal('#journeyModal');
        journeyModalRef.current._element.addEventListener('shown.bs.modal', function () {
            calenderRef.current.getApi().render();
            calendarEditRef.current.getApi().render();
        })
    }, []);

    const handleOpenModal = () => {
        journeyModalRef.current.show();
    }

    const handleCloseModal = () => {
        journeyModalRef.current.hide();
    }


    // const [clickInfo, setClickInfo] = useState('');
    // const [editEvents, setEditEvents] = useState([]);


    return (
        <>
            <div className="container-fluid shadow p-0  bg-white" id="bodyContainer">
                <div className="d-flex flex-nowrap row container-fluid m-0 p-0 bg-white" id="contentContainer">
                    <Sidebar />

                    {/* <!-- main content --> */}
                    <div className="flex-fill px-0 justify-content-center" id="content">
                        <div className="m-5">
                            <div className="d-flex align-items-end" id='headLinkContainer'>
                                <Link to="/journey" className="h1 rm-link-style">我的行程</Link>
                                <Link to="/journey/newjourney" className="h5 ms-auto active-text add-new-journey" style={{ textDecoration: 'none' }}><i className="bi bi-plus-lg"></i><span className="ms-1">建立行程</span>
                                </Link>
                            </div>
                            <hr />
                            <div className="container-fluid">
                                <div className="row">
                                    {journeys.map((journey) => {
                                        return (<JourneyThumbnail key={journey.journey_id} handleOpenModal={handleOpenModal} journey={journey} setClickJourneyId={setClickJourneyId} />)
                                    })}
                                    <AddNewJourney />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BotSidebar />
                <JourneyModel handleCloseModal={handleCloseModal} calenderRef={calenderRef} calendarEditRef={calendarEditRef} journeyDetail={journeyDetail} setJourneyDetail={setJourneyDetail} clickJourneyId={clickJourneyId} />
    
            </div>
        </>
    );
}

export default withAuthorization(['user'])(Journey);