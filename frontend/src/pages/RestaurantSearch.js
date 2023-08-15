import React from 'react';
import '../css/restaurant.css';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
export default function RestaurantSearch() {

    const { useState, useEffect } = React;
    const [attraction, setAttraction] = useState([{}]);
    const [zipcode, setZipcode] = useState([{}]);
    let { state } = useLocation();
    console.log(state);
    const [selectedZipCodes, setSelectedZipCodes] = useState([]);
    const [selectedTypeID, setSelectedTypeID] = useState([]);

    useEffect(() => {
        console.log(state);
        if (state < 10 && state >= 1) {
            setSelectedTypeID(state);
        } else if (state !== null) {
            setSelectedZipCodes(state);
        }

        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/restaurant`);
            console.log(response);
            setAttraction(response.data);
        })();
        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/zipcode`);
            console.log(response);
            setZipcode(response.data);
        })();
    }, [])

    const handleCheckboxChange = (event) => {
        const zipCode = Number(event.target.value);
        setSelectedZipCodes(prevSelected => {
            if (prevSelected.includes(zipCode)) {
                console.log(prevSelected)
                return prevSelected.filter(item => item !== zipCode);
            } else {
                console.log(prevSelected)
                return [...prevSelected, zipCode];
            }
        });
    };
    const typeCheckboxChange = (event) => {
        const typeID = Number(event.target.value);
        setSelectedTypeID(prevSelected => {
            if (prevSelected.includes(typeID)) {
                console.log(prevSelected)
                return prevSelected.filter(item => item !== typeID);
            } else {
                console.log(prevSelected)
                return [...prevSelected, typeID];
            }
        });
    };
    console.log(selectedZipCodes)
    console.log(selectedTypeID)

    const [dropdownStates, setDropdownStates] = useState([]);

    const toggleDropdown = (index) => {
        setDropdownStates(prevStates => {
            const updatedStates = [...prevStates];
            updatedStates[index] = !updatedStates[index];
            return updatedStates;
        });
    };

    return (
        <div className="rest-main">
            <div className="px-5" style={{ 'padding-top': '25px' }}><Link className="rm-link-style" to="/restaurant">餐廳</Link>＞<Link className="rm-link-style" to="/restaurant/search">搜尋</Link></div>
            <div className="rest-container" style={{ display: 'flex' }}>
                <div style={{ flex: '0 0 20%', padding: '10px' }}>
                    <div className="list-group list-group-flush p-3" >
                        <div className='card rest-card p-3'>
                            <button
                                className={`p-2 dropdown-btn rest-dropdown-btn ${dropdownStates[22] ? '1' : ''}`}
                                onClick={() => toggleDropdown(22)}
                            >
                                地區分類
                                <i className={dropdownStates[22] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                            </button>
                            {dropdownStates[22] && (
                                <div className="dropdown-content">
                                    <ul id="collapseExample1" className="collapse show list-group list-group-flush">
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[0] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(0)}
                                            >
                                                基隆市
                                                <i className={dropdownStates[0] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {/* 我是內容 */}
                                            {dropdownStates[0] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 200 && item.ZipCode <= 207) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[1] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(1)}
                                            >
                                                台北市
                                                <i className={dropdownStates[1] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[1] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 100 && item.ZipCode <= 116) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[2] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(2)}
                                            >
                                                新北市
                                                <i className={dropdownStates[2] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[2] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 207 && item.ZipCode <= 253) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[3] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(3)}
                                            >
                                                桃園市
                                                <i className={dropdownStates[3] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[3] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 320 && item.ZipCode <= 338) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[4] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(4)}
                                            >
                                                新竹市
                                                <i className={dropdownStates[4] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[4] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode == 300) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[5] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(5)}
                                            >
                                                新竹縣
                                                <i className={dropdownStates[5] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[5] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 302 && item.ZipCode <= 315) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[6] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(6)}
                                            >
                                                苗栗縣
                                                <i className={dropdownStates[6] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[6] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 350 && item.ZipCode <= 369) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={` dropdown-btn rest-dropdown-btn ${dropdownStates[7] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(7)}
                                            >
                                                台中市
                                                <i className={dropdownStates[7] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[7] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 400 && item.ZipCode <= 439) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[8] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(8)}
                                            >
                                                彰化縣
                                                <i className={dropdownStates[8] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[8] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 500 && item.ZipCode <= 530) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[9] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(9)}
                                            >
                                                南投縣
                                                <i className={dropdownStates[9] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[9] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 540 && item.ZipCode <= 558) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[10] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(10)}
                                            >
                                                雲林縣
                                                <i className={dropdownStates[10] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[10] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 630 && item.ZipCode <= 655) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[11] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(11)}
                                            >
                                                嘉義市
                                                <i className={dropdownStates[11] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[11] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode == 600) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[12] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(12)}
                                            >
                                                嘉義縣
                                                <i className={dropdownStates[12] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[12] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 602 && item.ZipCode <= 625) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[13] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(13)}
                                            >
                                                台南市
                                                <i className={dropdownStates[13] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[13] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 700 && item.ZipCode <= 745) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[14] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(14)}
                                            >
                                                高雄市
                                                <i className={dropdownStates[14] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[14] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 800 && item.ZipCode <= 852) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[15] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(15)}
                                            >
                                                屏東縣
                                                <i className={dropdownStates[15] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[15] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 900 && item.ZipCode <= 947) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[16] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(16)}
                                            >
                                                台東縣
                                                <i className={dropdownStates[16] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[16] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 950 && item.ZipCode <= 966) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[17] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(17)}
                                            >
                                                花蓮縣
                                                <i className={dropdownStates[17] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[17] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 970 && item.ZipCode <= 983) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[18] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(18)}
                                            >
                                                宜蘭縣
                                                <i className={dropdownStates[18] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[18] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 260 && item.ZipCode <= 272) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[19] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(19)}
                                            >
                                                澎湖縣
                                                <i className={dropdownStates[19] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[19] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 880 && item.ZipCode <= 885) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[20] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(20)}
                                            >
                                                金門縣
                                                <i className={dropdownStates[20] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[20] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 890 && item.ZipCode <= 896) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                        <li className="list-group-item py-1">
                                            <button
                                                className={`dropdown-btn rest-dropdown-btn ${dropdownStates[21] ? '1' : ''}`}
                                                onClick={() => toggleDropdown(21)}
                                            >
                                                連江縣
                                                <i className={dropdownStates[21] ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                                            </button>
                                            {dropdownStates[21] && (
                                                <div className="dropdown-content">
                                                    {zipcode.map(item => {
                                                        if (item.ZipCode >= 209 && item.ZipCode <= 212) {
                                                            return (
                                                                <div>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`zipCode-${item.ZipCode}`}
                                                                        name=""
                                                                        value={item.ZipCode}
                                                                        checked={selectedZipCodes.includes(item.ZipCode)}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor={`zipCode-${item.ZipCode}`}>{item.Area}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <span className="text-center p-2">餐廳類型　</span>
                            <ul id="collapseExample1" className="collapse show list-group list-group-flush">
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-1"
                                        name=""
                                        value="1"
                                        checked={selectedTypeID.includes(1)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-1">台灣小吃</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-2"
                                        name=""
                                        value="2"
                                        checked={selectedTypeID.includes(2)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-2">美式料理</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-3"
                                        name=""
                                        value="3"
                                        checked={selectedTypeID.includes(3)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-3">日式料理</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-4"
                                        name=""
                                        value="4"
                                        checked={selectedTypeID.includes(4)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-4">中式料理</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-5"
                                        name=""
                                        value="5"
                                        checked={selectedTypeID.includes(5)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-5">泰式料理</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-6"
                                        name=""
                                        value="6"
                                        checked={selectedTypeID.includes(6)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-6">義式料理</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-7"
                                        name=""
                                        value="7"
                                        checked={selectedTypeID.includes(7)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-7">韓式料理</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-8"
                                        name=""
                                        value="8"
                                        checked={selectedTypeID.includes(8)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-8">法式料理</label>
                                </li>
                                <li className="list-group-item py-1">
                                    <input
                                        type="checkbox"
                                        id="rest-type-9"
                                        name=""
                                        value="9"
                                        checked={selectedTypeID.includes(9)}
                                        onChange={typeCheckboxChange}
                                    />
                                    <label htmlFor="rest-type-9">異國料理</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ flex: '0 0 80%', padding: '10px' }}>
                    <div className="row">
                        {selectedZipCodes.length === 0 && selectedTypeID.length === 0 ? (
                            attraction.map((item) => {
                                if (item.Name) {
                                    const matchedZipCode = zipcode.find(zip => zip.ZipCode === item.ZipCode);
                                    return (
                                        <div className="col-xl-4 col-sm-6 p-3" key={item.ID}>
                                            <Link to="/restaurant/inner" style={{ 'text-decoration': 'none' }} state={item.ID}>
                                                <div className="card rest-card ">
                                                    <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                                    <div className="rest-container p-3">
                                                        <h5><b>{item.Name}</b></h5>
                                                        <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                        {matchedZipCode && (
                                                            <p>{matchedZipCode.City} {matchedZipCode.Area}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                }
                                return null;
                            })
                        ) : (attraction.map(item => {
                            if
                                (selectedZipCodes.includes(item.ZipCode) && selectedTypeID.includes(item.TypeID)) {
                                const matchedZipCode = zipcode.find(zip => zip.ZipCode === item.ZipCode);
                                return (
                                    <div className="col-xl-4 col-sm-6 p-3">
                                        <a href="" style={{ 'text-decoration': 'none' }}>
                                            <div className="card rest-card ">
                                                <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                                <div className="rest-container p-3">
                                                    <h5><b>{item.Name}</b></h5>
                                                    <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                    {matchedZipCode && (
                                                        <p>{matchedZipCode.City} {matchedZipCode.Area}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            } else if
                                (selectedZipCodes.length === 0 && selectedTypeID.includes(item.TypeID)) {
                                const matchedZipCode = zipcode.find(zip => zip.ZipCode === item.ZipCode);
                                return (
                                    <div className="col-xl-4 col-sm-6 p-3">
                                        <a href="" style={{ 'text-decoration': 'none' }}>
                                            <div className="card rest-card ">
                                                <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                                <div className="rest-container p-3">
                                                    <h5><b>{item.Name}</b></h5>
                                                    <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                    {matchedZipCode && (
                                                        <p>{matchedZipCode.City} {matchedZipCode.Area}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            } else if
                                (selectedZipCodes.includes(item.ZipCode) && selectedTypeID.length === 0) {
                                const matchedZipCode = zipcode.find(zip => zip.ZipCode === item.ZipCode);
                                return (
                                    <div className="col-xl-4 col-sm-6 p-3">
                                        <a href="" style={{ 'text-decoration': 'none' }}>
                                            <div className="card rest-card ">
                                                <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                                <div className="rest-container p-3">
                                                    <h5><b>{item.Name}</b></h5>
                                                    <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                    {matchedZipCode && (
                                                        <p>{matchedZipCode.City} {matchedZipCode.Area}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                        }))}
                    </div>
                </div>

            </div>
        </div>
    )
}