import React from 'react';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';

const MyJourney = () => {


    const containerStyle = {
        minHeight: 'calc(100vh - 96px)',
    }
    return (
        <>
            <div className='container-fluid p-0 d-flex'>
                <Sidebar />
                <div className='container rounded my-3' style={containerStyle}>
                    <h1>我的行程</h1>
                    <hr></hr>

                </div>
            </div>
            <BotSidebar />
        </>
    )
}

export default MyJourney;