import '../css/sidebar.css';
import Sidebar from '../components/Sidebar';
import ImageUploadButton from '../components/ImageUploadButton';
import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import withAuthorization from '../hook/withAuthorization';

const { useEffect, useState } = React;
const Farvorite = () => {
    
}
export default withAuthorization(['user'])(Farvorite);;