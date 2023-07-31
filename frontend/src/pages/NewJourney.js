import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';

function NewJourney() {
    return ( 
        <div className="container-lg shadow p-0 mb-3 bg-white" id="bodyContainer">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0 bg-white" id="contentContainer">  
                <Sidebar/>
            </div>
            <BotSidebar/>
        </div>
    );
}

export default NewJourney;