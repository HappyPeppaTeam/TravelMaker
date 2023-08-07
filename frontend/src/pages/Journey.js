import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import axios from 'axios';
import '../css/journey.css';
import JourneyThumbnail from '../components/JourneyThumbnail';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';
import JourneyModel from '../components/JourneyModal';


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

//  get Journeys data
    const [journeys, setJourneys] = useState([]);
    useEffect(() => {
        const testUrl = 'http://localhost/TravelMaker/Backend/public/api/getJourney?user_id=1';
        axios.get(testUrl)
        .then((response) => {
            if (response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.data;
        })
        .then((data) => {
            setJourneys(data);
            // console.log(data);
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        })
    }, [])



    const [clickJourneyId, setClickJourneyId] = useState(1);
    const [journeyEvent, setJourneyEvent] = useState([]);

    useEffect(() => {
        const testUrl = `http://localhost/TravelMaker/Backend/public/api/getEvents?journey_id=${clickJourneyId}`;
        axios.get(testUrl)
        .then((response) => {
            if (response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.data;
        })
        .then((data) => {
            setJourneyEvent(data);
            console.log(data);
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        })
    }, [clickJourneyId])




    const journeyModalRef = useRef(null);
    const calenderRef = useRef(null);
    const calendarEditRef = useRef(null);

    useEffect(() => {
        journeyModalRef.current = new Modal('#journeyModal');
        journeyModalRef.current._element.addEventListener('shown.bs.modal', function () {
            calenderRef.current.getApi().render();
            // calendarEditRef.current.getApi().render();
        })
        // console.log(calendarEditRef);
    }, []);

    const handleOpenModal = () => {
        journeyModalRef.current.show();
    }

    const handleCloseModal = () => {
        journeyModalRef.current.hide();
    }

    // const [journeyDetail, setJourneyDetail] = useState(
    //     {
    //         id: 1,
    //         title: 'Trip to Taipei',
    //         description: 'plan to stay from 5/23 to 5/25',
    //         editTime: '2023/4/5 13:00',
    //         start: '2023-05-23',
    //         end: '2023-05-23',

    //         journeyEvents: [
    //             {
    //                 id: 1,
    //                 name: 'breakfast',
    //                 description: 'McDonald',
    //                 start: '2023/5/23 8:00',
    //                 end: '2023/5/23 9:00',
    //             },
    //             {
    //                 id: 2,
    //                 name: 'lunch',
    //                 description: 'McDonald',
    //                 start: '2023/5/23 12:00',
    //                 end: '2023/5/23 13:00',
    //             },
    //         ],

    //         images: [
    //             {
    //                 image_id: 1,
    //                 data: '../images/street.jpg',
    //             },
    //             {
    //                 image_id: 2,
    //                 data: '../images/street.jpg',
    //             },
    //         ]
    //     }
    // )
    const [journeyDetail, setJourneyDetail] = useState({
        events:[]
    });

    return (
        <div className="container-lg shadow p-0 mb-3 bg-white" id="bodyContainer">
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
                                {journeys.map(
                                    (journey) => {
                                        return (<JourneyThumbnail key={journey.journey_id} handleOpenModal={handleOpenModal} journey={journey} setJourneyDetail={setJourneyDetail} setClickJourneyId={setClickJourneyId} journeyEvent={journeyEvent} journeyDetail={journeyDetail}/>)
                                    }
                                )}
                                {/* {journeys.map(
                                    (journey) => (<JourneyThumbnail key={journey.id} handleOpenModal={handleOpenModal} journey={journey} setJourneyDetail={setJourneyDetail} />)
                                )
                                } */}
                                <AddNewJourney />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BotSidebar />
            <JourneyModel handleCloseModal={handleCloseModal} calenderRef={calenderRef} calendarEditRef={calendarEditRef} setJourneyEvent={setJourneyEvent} setJourneyDetail={setJourneyDetail} journeyDetail={journeyDetail}/>
        </div>
    );
}

export default Journey;