import React, { Component } from 'react';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid bg-blue-1 shadow fixed-bottom d-flex d-sm-none align-items-center" style={{height: "50px"}}>
                <div className="w-100">
                    <ul className="d-flex rm-ul-style justify-content-around" style={{listStyleType: "none"}} id="sidebarBottom">
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-person-vcard-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-calendar-week"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-image"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-star-fill"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;