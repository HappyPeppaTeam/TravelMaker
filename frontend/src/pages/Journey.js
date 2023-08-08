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


// const TESTURL = 'http://localhost/TravelMaker/Backend/public/api/getJourney?user_id=1';

// const fetchJourneyData = () => {
//     return axios.get(TESTURL)
//     .then((response) => {   
//         console.log(response);
//         return response;
//     })
//     .catch((error) => console.log(error))
// }




function Journey() {


    const [journeys, setJourneys] = useState([
        {
            journey_id: 1,
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


    // const [journeyData, setJourneyData] = useState({
    //     journeys: [
    //         {
    //             id: 1,
    //             title: 'Trip to Taipei',
    //             description: 'plan to stay from 5/23 to 5/25',
    //             editTime: '2023/4/5 13:00',
    //             start: '2023-05-23',
    //             end: '2023-05-23',

    //             journeyEvents: [
    //                 {
    //                     id: 1,
    //                     name: 'breakfast',
    //                     description: 'McDonald',
    //                     start: '2023/5/23 8:00',
    //                     end: '2023/5/23 9:00',
    //                 },
    //                 {
    //                     id: 2,
    //                     name: 'lunch',
    //                     description: 'McDonald',
    //                     start: '2023/5/23 12:00',
    //                     end: '2023/5/23 13:00',
    //                 },
    //             ],

    //             images: [
    //                 {
    //                     image_id: 1,
    //                     data: '../images/street.jpg',
    //                 },
    //                 {
    //                     image_id: 2,
    //                     data: '../images/street.jpg',
    //                 },
    //             ]
    //         },
    //         {
    //             id: 3,
    //             title: 'Trip to Taichung',
    //             description: 'plan to stay from 5/26 to 5/27',
    //             editTime: '2023/4/5 13:00',
    //             start: '2023-05-26',
    //             end: '2023-05-27',
    //             journeyEvents: [
    //                 {
    //                     id: 4,
    //                     name: 'breakfast',
    //                     description: 'McDonald',
    //                     start: '2023/5/26 8:00',
    //                     end: '2023/5/26 9:00',
    //                 },
    //                 {
    //                     id: 6,
    //                     name: 'lunch',
    //                     description: 'McDonald',
    //                     start: '2023/5/27 12:00',
    //                     end: '2023/5/27 13:00',
    //                 },
    //             ],

    //             images: [
    //                 {
    //                     image_id: 4,
    //                     data: '../images/street.jpg',
    //                 },
    //                 {
    //                     image_id: 5,
    //                     data: '../images/street.jpg',
    //                 },
    //             ]
    //         },
    //         {
    //             id: 4,
    //             title: 'Trip to Tainan',
    //             description: 'plan to stay from 6/1 to 6/8',
    //             editTime: '2023/4/5 13:00',
    //             start: '2023-06-01',
    //             end: '2023-06-08',
    //             journeyEvents: [
    //                 {
    //                     id: 9,
    //                     name: 'breakfast',
    //                     description: 'McDonald',
    //                     start: '2023/6/1 8:00',
    //                     end: '2023/6/1 9:00',
    //                 },
    //                 {
    //                     id: 10,
    //                     name: 'lunch',
    //                     description: 'McDonald',
    //                     start: '2023/6/1 12:00',
    //                     end: '2023/6/1 13:00',
    //                 },
    //                 {
    //                     id: 11,
    //                     name: 'dinner',
    //                     description: 'McDonald',
    //                     start: '2023/6/1 18:00',
    //                     end: '2023/6/1 19:00',
    //                 },
    //                 {
    //                     id: 9,
    //                     name: 'breakfast',
    //                     description: 'McDonald',
    //                     start: '2023/6/8 8:00',
    //                     end: '2023/6/8 9:00',
    //                 },
    //                 {
    //                     id: 10,
    //                     name: 'lunch',
    //                     description: 'McDonald',
    //                     start: '2023/6/8 12:00',
    //                     end: '2023/6/8 13:00',
    //                 },
    //                 {
    //                     id: 11,
    //                     name: 'dinner',
    //                     description: 'McDonald',
    //                     start: '2023/6/8 18:00',
    //                     end: '2023/6/8 19:00',
    //                 },
    //             ],

    //             images: [
    //                 {
    //                     image_id: 4,
    //                     data: '../images/street.jpg',
    //                 },
    //                 {
    //                     image_id: 5,
    //                     data: '../images/street.jpg',
    //                 },
    //             ]
    //         },
    //     ],
    // });

    const [journeyDetail, setJourneyDetail] = useState({
        journey_id: 1,
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
    const [clickJourneyId, setClickJourneyId] = useState('');

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
                console.log("journeyDetail response:", journeyDetail);
            })
            .catch((error) => {
                console.error('Axios error:', error);
            })

    }, [clickJourneyId])




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
            <JourneyModel handleCloseModal={handleCloseModal} calenderRef={calenderRef} calendarEditRef={calendarEditRef} journeyDetail={journeyDetail} setJourneyDetail={setJourneyDetail} />
        </div>
    );
}

export default Journey;