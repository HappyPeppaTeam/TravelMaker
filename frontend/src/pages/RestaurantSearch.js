import React from 'react';
import '../css/restaurant.css';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
export default function RestaurantSearch() {

    const { useState, useEffect } = React;
    // const [test, setTest] = useState([{
    //     ID: '1001',
    //     Name: '餐廳名稱',
    //     Description: '餐廳簡介',
    //     Opentime: '營業時間'

    // },
    // {
    //     ID: '1002',
    //     Name: '餐廳名稱2',
    //     Description: '餐廳簡介',
    //     Opentime: '營業時間'

    // }]);
    const [attraction, setAttraction] = useState([{}]);
    let {state} = useLocation();
    console.log(state);
    const [selectedZipCodes, setSelectedZipCodes] = useState([]);

    useEffect(() => {
        if(state){
            setSelectedZipCodes(state);
        }
        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/restaurant`);
            console.log(response);
            setAttraction(response.data);
        })();
    }, [])

    // const zipCodes = [...new Set(attraction.map(item => item.ZipCode))];

    
    
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
    console.log(selectedZipCodes)
    return (
        <div className="">
            <div className="container">
                <br />
                {/* <div className="p-5"><a className="rm-link-style" href="">餐廳</a>＞<a className="rm-link-style" href="">台中市</a>＞西屯區</div>
                <input
                    type="checkbox"
                    id="zipCode-252"
                    name=""
                    value="252"
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="zipCode-252">三芝區</label> */}
                {/* {zipCodes.map(zipCode => (
                    <div key={zipCode}>
                        <input
                            type="checkbox"
                            id={`zipCode-${zipCode}`}
                            name=""
                            value={zipCode}
                            checked={selectedZipCodes.includes(zipCode)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`zipCode-${zipCode}`}>ZipCode: {zipCode}</label>
                    </div>
                ))} */}
                {/* {attraction.map(item => (
                    selectedZipCodes.includes(item.ZipCode) && (
                        <div key={item.ID} className="col-xl-4 col-sm-6 p-3">
                            <a href="" style={{ textDecoration: 'none' }}>
                                <div className="card">
                                    <div className="container p-3">
                                        <h5><b>{item.Name}</b></h5>
                                        <p>★ ★ ★ ★ ☆ 9527條評論</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                ))} */}

                <aside className="p-4">
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                {/* {zipCodes.map(zipCode => (
                                    <div key={zipCode}>
                                        <input
                                            type="checkbox"
                                            id={`zipCode-${zipCode}`}
                                            name=""
                                            value={zipCode}
                                            checked={selectedZipCodes.includes(zipCode)}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label htmlFor={`zipCode-${zipCode}`}>ZipCode: {zipCode}</label>
                                    </div>
                                ))} */}
                                <span className="text-center p-2">地區分類</span>
                                <span className="p-1">基隆市</span>
                                <span className="p-1">台北市</span>
                                <span className="p-1">新北市<i class="bi bi-caret-down"></i></span>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="zipCode-208"
                                        name=""
                                        value="208"
                                        onChange={handleCheckboxChange}
                                        checked={ selectedZipCodes.includes(208) ? 'checked': ''}
                                    />
                                    <label htmlFor="zipCode-208">金山區</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="zipCode-228"
                                        name=""
                                        value="228"
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor="zipCode-228">貢寮區</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="zipCode-252"
                                        name=""
                                        value="252"
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor="zipCode-252">三芝區</label>
                                </div>
                                <span className="p-1">桃園縣</span>
                                <span className="p-1">新竹市</span>
                                <span className="p-1">新竹縣</span>
                                <span className="p-1">苗栗縣</span>
                                <span className="p-1">台中市</span>
                                <span className="p-1">彰化縣</span>
                                <span className="p-1">南投縣</span>
                                <span className="p-1">雲林縣</span>
                                <span className="p-1">嘉義市</span>
                                <span className="p-1">嘉義縣</span>
                                <span className="p-1">台南市</span>
                                <span className="p-1">高雄市</span>
                                <span className="p-1">屏東縣</span>
                                <span className="p-1">台東縣</span>
                                <span className="p-1">花蓮縣</span>
                                <span className="p-1">宜蘭縣</span>
                                <span className="p-1">澎湖縣</span>
                                <span className="p-1">金門縣</span>
                                <span className="p-1">連江縣</span>
                                <ul id="collapseExample1" className="collapse show list-group list-group-flush">
                                    {/* <li className="list-group-item py-1">
                                        <div className="dropdown">
                                            <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                                Dropdown button
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Link 1</a></li>
                                                <li><a className="dropdown-item" href="#">Link 2</a></li>
                                                <li><a className="dropdown-item" href="#">Link 3</a></li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    {/* <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-area-1" name="" />
                                        <label for="rest-type-1">基隆市</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-2" name="" />
                                        <label for="rest-type-1">台北市</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-3" name="" />
                                        <label for="rest-type-1">新北市</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-1" name="" />
                                        <label for="rest-type-1">桃園市</label>
                                    </li> */}
                                </ul>
                                <span className="text-center p-2">餐廳類型</span>
                                <ul id="collapseExample1" className="collapse show list-group list-group-flush">
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-1" name="" />
                                        <label for="rest-type-1">台灣小吃</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-2" name="" />
                                        <label for="rest-type-1">美式料理</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-3" name="" />
                                        <label for="rest-type-1">日式料理</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-4" name="" />
                                        <label for="rest-type-1">中式料理</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-5" name="" />
                                        <label for="rest-type-1">泰式料理</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-6" name="" />
                                        <label for="rest-type-1">義式料理</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-7" name="" />
                                        <label for="rest-type-1">韓式料理</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-8" name="" />
                                        <label for="rest-type-1">法式料理</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-9" name="" />
                                        <label for="rest-type-1">異國料理</label>
                                    </li>
                                </ul>
                                {/* <span className="text-center p-2">地區分類</span> */}
                                {/* <ul id="collapseExample1" className="collapse show list-group list-group-flush">
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-area-1" name="" />
                                        <label for="rest-type-1">基隆市</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-2" name="" />
                                        <label for="rest-type-1">台北市</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-3" name="" />
                                        <label for="rest-type-1">新北市</label>
                                    </li>
                                    <li className="list-group-item py-1">
                                        <input type="checkbox" id="rest-type-1" name="" />
                                        <label for="rest-type-1">桃園市</label>
                                    </li>
                                </ul> */}

                            </div>
                        </div>
                    </nav>
                </aside>
                <div className="row">
                    {selectedZipCodes.length === 0 ? (
                        attraction.map((item) => {
                            if (item.Name) {
                                return (
                                    <div className="col-xl-4 col-sm-6 p-3" key={item.ID}>
                                        <Link to="/restaurant/inner" style={{ 'text-decoration': 'none' }} state={item.ID}>
                                            <div className="card">
                                                <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                                <div className="container p-3">
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
                    ) : (attraction.map(item => (
                        selectedZipCodes.includes(item.ZipCode) && (
                            <div className="col-xl-4 col-sm-6 p-3">
                                <a href="" style={{ 'text-decoration': 'none' }}>
                                    <div className="card">
                                        <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                        <div className="container p-3">
                                            <h5><b>{item.Name}</b></h5>
                                            <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                            <p>{item.Address.substring(0, 6)}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    )))}

                    {/* (attraction.map(item => (
                        selectedZipCodes.includes(item.ZipCode) && (
                            <div className="col-xl-4 col-sm-6 p-3">
                                <a href="" style={{ 'text-decoration': 'none' }}>
                                    <div className="card">
                                        <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                        <div className="container p-3">
                                            <h5><b>{item.Name}</b></h5>
                                            <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                            <p>{item.Address.substring(0, 6)}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    ))) */}
                    {/* {attraction.map(item => {
                        if () {
                            return (
                                selectedZipCodes.includes(item.ZipCode) && (
                                    <div className="col-xl-4 col-sm-6 p-3">
                                        <a href="" style={{ 'text-decoration': 'none' }}>
                                            <div className="card">
                                                <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                                <div className="container p-3">
                                                    <h5><b>{item.Name}</b></h5>
                                                    <p>營業時間:{item.OpenTime}</p>
                                                    <p>{item.Address.substring(0, 6)}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            )
                        }
                    })} */}
                    {/* {attraction.map((item) => {
                        if (item.Name) {
                            return (
                                <div className="col-xl-4 col-sm-6 p-3">
                                    <a href="" style={{ 'text-decoration': 'none' }}>
                                        <div className="card">
                                            <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                            <div className="container p-3">
                                                <h5><b>{item.Name}</b></h5>
                                                <p>★ ★ ★ ★ ☆ 9527條評論</p>
                                                <p>{item.Address.substring(0, 6)}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        } return null;
                    })} */}
                    {/* <div className="col-xl-4 col-sm-6 p-3">
                            <a href="" style={{ 'text-decoration': 'none' }}>
                                <div className="card">
                                    <img src="../images/street.jpg" alt="rest-1" />
                                    <div className="container p-3">
                                        <h5><b>森森燒肉 台中西屯店</b></h5>
                                        <p>★ ★ ★ ★ ☆ 9527條評論</p>
                                        <p>台中市 西屯區</p>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>

                </div>


            </div>


        </div>
    )
}