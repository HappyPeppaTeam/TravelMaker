import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';



const DiscussionBoard = () => {
  let { state } = useLocation();
  
  const [data, setData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const dropdownRefs = {
    北部討論版: useRef(null),
    中部討論版: useRef(null),
    南部討論版: useRef(null),
    花東離島討論版: useRef(null),
  };

  const handleDropdownToggle = (region) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [region]: !prevState[region],
    }));
  };

  // const handleDropdownItemClick = (event, value) => {
  //   event.stopPropagation();
  //   axios.get(`http://localhost/TravelMaker/Backend/public/Linkpi/getArticle/${value}`)

  //     .then(response => {
  //       setData(response.data.data);
  //       navigate(`/forum/discussion/ ${value}`);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   axios.get(`http://localhost/TravelMaker/Backend/public/api/getArticle/1`)
      
  //     .then(response => {
  //       setData(response.data.data);
  //       // navigate(`/forum/discussion/ ${value}`);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // },[])


  const handleDocumentClick = (event) => {
    for (const region in dropdownRefs) {
      if (dropdownRefs[region].current && !dropdownRefs[region].current.contains(event.target)) {
        setIsDropdownOpen(prevState => ({
          ...prevState,
          [region]: false,
        }));
      }
    }
  };

  // 點擊dropdown之後再點擊旁邊區域會把dropdown收回
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  
  return (
    <div className="discussion-board bg-blue-3 my-0 row gy-1">
      <div className="sub-discussion-board-home col-6 col-md">
        <button className="btn btn-secondary" type="button" id="defaultDropdown">
          <Link to="/forum">首頁</Link>
        </button>
      </div>
      <div className="sub-discussion-board col-6 col-md" ref={dropdownRefs['北部討論版']}>
        <button
          className={`btn btn-secondary dropdown-toggle${isDropdownOpen['北部討論版'] ? ' show' : ''}`}
          type="button"
          id="defaultDropdown"
          onClick={() => handleDropdownToggle('北部討論版')}
          aria-expanded={isDropdownOpen['北部討論版']}
        >
          北部討論版
        </button>

        <ul className={`dropdown-menu${isDropdownOpen['北部討論版'] ? ' show' : ''}`} aria-labelledby="defaultDropdown">
          <li><Link className="dropdown-item" to="/forum/discussion/1" state={1}>臺北市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/2" state={2}>新北市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/3" state={3}>宜蘭縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/4" state={4}>基隆市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/5" state={5}>桃園市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/6" state={6}>新竹市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/7" state={7}>新竹縣</Link></li>
        </ul>
      </div>
      <div className="sub-discussion-board col-6 col-md" ref={dropdownRefs['中部討論版']}>
        <button
          className={`btn btn-secondary dropdown-toggle${isDropdownOpen['中部討論版'] ? ' show' : ''}`}
          type="button"
          id="defaultDropdown"
          onClick={() => handleDropdownToggle('中部討論版')}
          aria-expanded={isDropdownOpen['中部討論版']}
        >
          中部討論版
        </button>
        <ul className={`dropdown-menu${isDropdownOpen['中部討論版'] ? ' show' : ''}`} aria-labelledby="defaultDropdown">
          <li><Link className="dropdown-item" to="/forum/discussion/8" state={8}>臺中市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/9" state={9}>苗栗縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/10" state={10}>彰化縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/11" state={11}>南投縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/12" state={12}>雲林縣</Link></li>
        </ul>
      </div>
      <div className="sub-discussion-board col-6 col-md" ref={dropdownRefs['南部討論版']}>
        <button
          className={`btn btn-secondary dropdown-toggle${isDropdownOpen['南部討論版'] ? ' show' : ''}`}
          type="button"
          id="defaultDropdown"
          onClick={() => handleDropdownToggle('南部討論版')}
          aria-expanded={isDropdownOpen['南部討論版']}
        >
          南部討論版
        </button>
        <ul className={`dropdown-menu${isDropdownOpen['南部討論版'] ? ' show' : ''}`} aria-labelledby="defaultDropdown">
          <li><Link className="dropdown-item" to="/forum/discussion/13" state={13}>嘉義市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/14" state={14}>嘉義縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/15" state={15}>臺南市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/16" state={16}>高雄市</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/17" state={17}>屏東縣</Link></li>
        </ul>
      </div>
      <div className="sub-discussion-board col-6 col-md" ref={dropdownRefs['花東離島討論版']}>
        <button
          className={`btn btn-secondary dropdown-toggle${isDropdownOpen['花東離島討論版'] ? ' show' : ''}`}
          type="button"
          id="defaultDropdown"
          onClick={() => handleDropdownToggle('花東離島討論版')}
          aria-expanded={isDropdownOpen['花東離島討論版']}
        >
          花東離島討論版
        </button>
        <ul className={`dropdown-menu${isDropdownOpen['花東離島討論版'] ? ' show' : ''}`} aria-labelledby="defaultDropdown">
          <li><Link className="dropdown-item" to="/forum/discussion/18" state={18}>花蓮縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/19" state={19}>臺東縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/20" state={20}>澎湖縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/21" state={21}>金門縣</Link></li>
          <li><Link className="dropdown-item" to="/forum/discussion/22" state={22}>連江縣</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default DiscussionBoard;