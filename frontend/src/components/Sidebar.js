import React, { useEffect, useRef } from 'react';
import { Collapse } from 'bootstrap';
import {Link} from 'react-router-dom';





const CollapseMenu = () => {


    const removeListDefault = {
        listStyleType: 'none',
    }
    

    return (
        <div className="collapse text-white" id="collectionCollapseMenu">
            <ul style={removeListDefault}
                className="d-flex align-items-center flex-column p-0">
                <li>
                    <a href="#" className="nav-link px-0">
                        <i className="bi bi-stack"></i>
                        <span className="d-none d-sm-inline ms-1">全部</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0">
                        <i className="bi bi-calendar-heart"></i>
                        <span className="d-none d-sm-inline ms-1">行程</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0">
                        <i className="bi bi-camera"></i>
                        <span className="d-none d-sm-inline ms-1">景點</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0 ">
                        <i className="bi bi-cup-straw"></i>
                        <span className="d-none d-sm-inline ms-1">餐廳</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}




function Sidebar() {


    const sideBarStyle = {
        height: '100%',
        minHeight: 'calc(100vh - 70px)',
    }

    const collectionCollapse = useRef(null);


    useEffect(() => {
        collectionCollapse.current = new Collapse('#collectionCollapseMenu', {
            toggle: false
        });

    }, [])

    const handleCollapse = () => {
        collectionCollapse.current.toggle();
    } 

    
    

    return (
        <div className="col-auto col-md-3 col-xl-2 d-none d-sm-block p-0">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-blue-1 align-items-center" id="sidebarContainer"
                style={sideBarStyle}>

                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/memberCenter" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-person-vcard-fill"></i>
                            <span className="d-none d-sm-inline px-2">
                                基本資料
                            </span>
                        </Link>
                    </li>
                    {/* <li>
                        <a href="#" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-envelope-fill"></i>
                            <span className="d-none d-sm-inline px-2">
                                我的信箱
                            </span>
                        </a>
                    </li> */}
                    <li>
                        <Link to="/journey" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-calendar-week"></i>
                            <span className="d-none d-sm-inline px-2">
                                我的行程
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/album" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-image"></i>
                            <span className="d-none d-sm-inline px-2">
                                我的相簿
                            </span>
                        </Link>
                    </li>
                     <li>
                        <a href="#my-collection-submenu"
                            className="nav-link text-white d-flex align-items-center"
                            data-bs-toggle="collapse" role="button" onClick={handleCollapse}>
                            <i className="bi bi-star-fill"></i>
                            <span className="d-none d-sm-inline px-2">
                                我的收藏
                            </span>
                        </a>

                        <CollapseMenu/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

