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
        } else if (state !== null){
            setSelectedZipCodes(state);
        }
        // if(state){
        //     setSelectedZipCodes(state);
        // }
        
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
    return (
        <div className="rest-main">
            <div className="rest-container">
            <div className="p-4"><Link className="rm-link-style" to="">餐廳</Link>＞<Link className="rm-link-style" to="/restaurant/search">搜尋</Link></div>
                <br />
                <aside className="p-4">
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <span className="text-center p-2">地區分類</span>
                                {/* <div> */}
                                <span className="p-1">基隆市</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 200 && item.ZipCode <= 207){return(
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
                                }})} */}
                                <span className="p-1">台北市</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 100 && item.ZipCode <= 116){return(
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
                                }})} */}
                                <span className="p-1">新北市<i class="bi bi-caret-down"></i></span>
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
                                <span className="p-1">桃園縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 320 && item.ZipCode <= 338){return(
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
                                }})} */}
                                <span className="p-1">新竹市</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode == 300){return(
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
                                }})} */}
                                <span className="p-1">新竹縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 302 && item.ZipCode <= 315){return(
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
                                }})} */}
                                <span className="p-1">苗栗縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 350 && item.ZipCode <= 369){return(
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
                                }})} */}
                                <span className="p-1">台中市</span>
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
                                <span className="p-1">彰化縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 500 && item.ZipCode <= 530){return(
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
                                }})} */}
                                <span className="p-1">南投縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 540 && item.ZipCode <= 558){return(
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
                                }})} */}
                                <span className="p-1">雲林縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 630 && item.ZipCode <= 655){return(
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
                                }})} */}
                                <span className="p-1">嘉義市</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode == 600){return(
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
                                }})} */}
                                <span className="p-1">嘉義縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 602 && item.ZipCode <= 625){return(
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
                                }})} */}
                                <span className="p-1">台南市</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 700 && item.ZipCode <= 745){return(
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
                                }})} */}
                                <span className="p-1">高雄市</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 800 && item.ZipCode <= 852){return(
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
                                }})} */}
                                <span className="p-1">屏東縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 900 && item.ZipCode <= 947){return(
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
                                }})} */}
                                <span className="p-1">台東縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 950 && item.ZipCode <= 966){return(
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
                                }})} */}
                                <span className="p-1">花蓮縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 970 && item.ZipCode <= 983){return(
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
                                }})} */}
                                <span className="p-1">宜蘭縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 260 && item.ZipCode <= 272){return(
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
                                }})} */}
                                <span className="p-1">澎湖縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 880 && item.ZipCode <= 885){return(
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
                                }})} */}
                                <span className="p-1">金門縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 890 && item.ZipCode <= 896){return(
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
                                }})} */}
                                <span className="p-1">連江縣</span>
                                {/* {zipcode.map(item => {
                                    if (item.ZipCode>= 209 && item.ZipCode <= 212){return(
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
                                }})} */}
                                {/* </div> */}
                                <span className="text-center p-2">餐廳類型</span>
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
                    </nav>
                </aside>
                <div className="row">
                    {selectedZipCodes.length === 0 && selectedTypeID.length === 0 ? (
                        attraction.map((item) => {
                            if (item.Name) {
                                return (
                                    <div className="col-xl-4 col-sm-6 p-3" key={item.ID}>
                                        <Link to="/restaurant/inner" style={{ 'text-decoration': 'none' }} state={item.ID}>
                                            <div className="card rest-card ">
                                                <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                                <div className="rest-container p-3">
                                                    <h5><b>{item.Name}</b></h5>
                                                    <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                    <p>{item.Address.substring(0, 6)}</p>
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
                            return (
                                <div className="col-xl-4 col-sm-6 p-3">
                                    <a href="" style={{ 'text-decoration': 'none' }}>
                                        <div className="card rest-card ">
                                            <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                            <div className="rest-container p-3">
                                                <h5><b>{item.Name}</b></h5>
                                                <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                <p>{item.Address.substring(0, 6)}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }else if
                            (selectedZipCodes.length === 0 && selectedTypeID.includes(item.TypeID)) {
                            return (
                                <div className="col-xl-4 col-sm-6 p-3">
                                    <a href="" style={{ 'text-decoration': 'none' }}>
                                        <div className="card rest-card ">
                                            <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                            <div className="rest-container p-3">
                                                <h5><b>{item.Name}</b></h5>
                                                <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                <p>{item.Address.substring(0, 6)}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }else if
                            (selectedZipCodes.includes(item.ZipCode) &&  selectedTypeID.length === 0) {
                            return (
                                <div className="col-xl-4 col-sm-6 p-3">
                                    <a href="" style={{ 'text-decoration': 'none' }}>
                                        <div className="card rest-card ">
                                            <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                            <div className="rest-container p-3">
                                                <h5><b>{item.Name}</b></h5>
                                                <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                <p>{item.Address.substring(0, 6)}</p>
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
    )
}