import '../css/sidebar.css';

export default function Album() {
    return (
        <>
        <div className="container-fluid shadow p-0 bg-white" id="body-container">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0" id="content-container">
                <div className="col-auto col-md-3 col-xl-2 d-none d-sm-block p-0">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-blue-1 align-items-center" id="sidebar-container"
                        style={{height: "100%", minHeight: "calc(100vh - 70px)"}}>
        
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link"
                                    aria-current="page">
                                    <i className="bi bi-person-vcard-fill"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        基本資料
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link">
                                    <i className="bi bi-envelope-fill"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的信箱
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link">
                                    <i className="bi bi-calendar-week"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的行程
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link">
                                    <i className="bi bi-image"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的相簿
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#my-collection-submenu"
                                    className="nav-link text-white d-flex align-items-center sidebar-link" data-bs-toggle="collapse"
                                    role="button">
                                    <i className="bi bi-star-fill"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的收藏
                                    </span>
                                </a>
        
                                <div className="collapse text-white" id="my-collection-submenu">
                                    <ul style={{listStyleType: "none", padding: 0}} className="d-flex align-items-center flex-column">
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
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex-fill px-0 justify-content-center" id="content" style={{height: "100%", minHeight: "calc(100vh - 70px)"}}>
                    <div className='wrap m-5'>
                        <h1>建立相簿</h1>

                        <form action="" id="newJourneyForm1" class="tab">

                            <div className="mb-3">
                                <label htmlFor="albumName" className="form-label">相簿名稱</label>
                                <input type="text" className="form-control" id="albumName"
                                    aria-describedby="albumName" placeholder="ex. 金瓜石兩日遊" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="albumSort" className="form-label">分類</label>
                                <input type="text" className="form-control" id="albumSort"
                                    aria-describedby="albumSort" placeholder="ex. 台北" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="note" className="form-label">備註</label>
                                <textarea class="form-control" id="note" rows="5"></textarea>
                            </div>

                            <label htmlFor="file-input">
                            <input
                                type="file"
                                id="file-input"
                                accept="image/*"
                            />
                            <span className='btn btn-outline-primary'>Upload One Image</span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
        </>
    )
}