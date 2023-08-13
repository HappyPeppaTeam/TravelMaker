import '../css/Forumstyles.css';
import '../css/Discussion.css';
import ArticleList from '../components/ArticleList';
import DiscussionBoard from '../components/DiscussionBoardList';
import React from 'react';
import axios from 'axios';

import { useLocation } from 'react-router-dom';


export default function Discussion() {
    let { state } = useLocation();
    const { useState, useEffect } = React;
    const [data, setData] = useState([]);
   
    useEffect(() => {
        (async() => {
            await axios.get(`http://localhost/TravelMaker/Backend/public/api/getArticle/${state}`)
    
                .then(response => {
                    setData(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        })();
    }, [])
    console.log(state);
    console.log(data);
    // const test = [
    //     {
    //         "Discussion_board_area": 1,
    //         "board_text_id": 1,
    //         "Text_title": "台北101一日遊",
    //         "Text": "我非常幸運地有機會參加了一個令人期待已久的台北101一日遊。台北101是台灣最著名的地標之一，是一座摩天大樓，也是台北市最高的建築物。這個一日遊帶給我無比的興奮和感動，讓我深刻體驗了台北市的現代與古老之美。\r\n\r\n一大早，我們一行人來到台北101。一看到這座矗立在城市中心的巨型建築，我們就被它的壯麗氣勢所震撼。這座樓高508公尺，外觀獨特，結合了現代建築和傳統元素，代表著台灣人民的智慧和創意。\r\n\r\n我們先參觀了台北101的觀景台，這是一個絕佳的位置，可以俯瞰整個台北市的美景。在這裡，我們可以360度欣賞台北的城市風光，包括高樓大廈、綠意盎然的公園和蜿蜒的河流。尤其是在晴朗的天氣，遠處的群山更是一覽無遺，景色壯麗。\r\n\r\n下一站，我們參觀了台北101的購物中心。這裡有許多高級品牌的專賣店，還有各式各樣的特色商品，是購物愛好者的天堂。除了購物，這裡還有各種美食餐廳，可以品嚐到來自世界各地的美味佳餚。我們在這裡用午餐，品嚐了當地的特色小吃，如牛肉麵、蒸餃、滷肉飯等，每一道菜都讓我驚艷不已。\r\n\r\n中午過後，我們參觀了台北101的展覽中心，這裡展示了台灣的歷史和文化。我們學到了很多台灣的傳統工藝和藝術，了解了台灣人民的生活和價值觀。這些展品讓我深刻感受到台灣的豐富文化遺產，也讓我更加欣賞這個美麗的島嶼。\r\n\r\n傍晚時分，我們來到了台北101附近的象山公園。這裡是觀賞台北101夜景的最佳地點之一。我們爬上了象山，登上了高處的觀景台，一望無際的夜景令人嘆為觀止。台北101夜晚的燈光璀璨，如同一顆明亮的明星，閃耀著城市的夜空。這真是一個讓人流連忘返的美麗景象。\r\n\r\n最後，我們來到了台北101附近的信義區，這裡是台北市最繁華的商業區之一。這裡有許多高級購物中心、時尚的餐廳和咖啡館，還有充滿藝術氛圍的街道。我們在這裡漫步，欣賞著大都會的繁華和現代的氛圍，感受著台北這座城市的脈動。\r\n\r\n在台北101一日遊的最後，我們回到了出發地點，回顧了這個令人難忘的一天。這次旅行讓我深刻體驗了台北這座城市的現代化和文化底蘊，讓我更加愛上這個美麗的城市。\r\n\r\n結語：\r\n台北101一日遊是一個難忘的旅行體驗，讓我深刻感受到台灣的現代化和傳統文化之美。這個一日遊讓我了解了台北這座城市的繁華和多樣性，也讓我更加欣賞台灣這個美麗的島嶼。我帶著滿滿的感激和美好回憶，結束了這次難忘的台北101一日遊。",
    //         "Posting_time": "2023-08-03 14:49:19",
    //         "full_name": "jade",
    //         "user_name": "test01",
    //         "image_path": "images/qvaCNxVVSs8MhmoVT4bsVO2UUDSDoCJz65vzySti.png"
    //     },
    //     {
    //         "Discussion_board_area": 1,
    //         "board_text_id": 2,
    //         "Text_title": "123台北101一日遊",
    //         "Text": "我非常幸運地有機會參加了一個令人期待已久的台北101一日遊。台北101是台灣最著名的地標之一，是一座摩天大樓，也是台北市最高的建築物。這個一日遊帶給我無比的興奮和感動，讓我深刻體驗了台北市的現代與古老之美。\r\n\r\n一大早，我們一行人來到台北101。一看到這座矗立在城市中心的巨型建築，我們就被它的壯麗氣勢所震撼。這座樓高508公尺，外觀獨特，結合了現代建築和傳統元素，代表著台灣人民的智慧和創意。\r\n\r\n我們先參觀了台北101的觀景台，這是一個絕佳的位置，可以俯瞰整個台北市的美景。在這裡，我們可以360度欣賞台北的城市風光，包括高樓大廈、綠意盎然的公園和蜿蜒的河流。尤其是在晴朗的天氣，遠處的群山更是一覽無遺，景色壯麗。\r\n\r\n下一站，我們參觀了台北101的購物中心。這裡有許多高級品牌的專賣店，還有各式各樣的特色商品，是購物愛好者的天堂。除了購物，這裡還有各種美食餐廳，可以品嚐到來自世界各地的美味佳餚。我們在這裡用午餐，品嚐了當地的特色小吃，如牛肉麵、蒸餃、滷肉飯等，每一道菜都讓我驚艷不已。\r\n\r\n中午過後，我們參觀了台北101的展覽中心，這裡展示了台灣的歷史和文化。我們學到了很多台灣的傳統工藝和藝術，了解了台灣人民的生活和價值觀。這些展品讓我深刻感受到台灣的豐富文化遺產，也讓我更加欣賞這個美麗的島嶼。\r\n\r\n傍晚時分，我們來到了台北101附近的象山公園。這裡是觀賞台北101夜景的最佳地點之一。我們爬上了象山，登上了高處的觀景台，一望無際的夜景令人嘆為觀止。台北101夜晚的燈光璀璨，如同一顆明亮的明星，閃耀著城市的夜空。這真是一個讓人流連忘返的美麗景象。\r\n\r\n最後，我們來到了台北101附近的信義區，這裡是台北市最繁華的商業區之一。這裡有許多高級購物中心、時尚的餐廳和咖啡館，還有充滿藝術氛圍的街道。我們在這裡漫步，欣賞著大都會的繁華和現代的氛圍，感受著台北這座城市的脈動。\r\n\r\n在台北101一日遊的最後，我們回到了出發地點，回顧了這個令人難忘的一天。這次旅行讓我深刻體驗了台北這座城市的現代化和文化底蘊，讓我更加愛上這個美麗的城市。\r\n\r\n結語：\r\n台北101一日遊是一個難忘的旅行體驗，讓我深刻感受到台灣的現代化和傳統文化之美。這個一日遊讓我了解了台北這座城市的繁華和多樣性，也讓我更加欣賞台灣這個美麗的島嶼。我帶著滿滿的感激和美好回憶，結束了這次難忘的台北101一日遊。",
    //         "Posting_time": "2023-08-03 14:49:19",
    //         "full_name": "jade",
    //         "user_name": "test01",
    //         "image_path": "images/qvaCNxVVSs8MhmoVT4bsVO2UUDSDoCJz65vzySti.png"
    //     },
    // ]

    return (
        <div className="main">
            {/* <!-- 導覽列 --> */}
            <DiscussionBoard></DiscussionBoard>
            <div className="container">
                {/* <!-- 功能列 --> */}
                <div className="d-flex discussion-item">
                    <button className="btn btn-primary">最新</button>
                    <button className="btn btn-primary">精選</button>
                    <button className="btn btn-primary ms-auto">
                        <a href="">我要發文</a>
                    </button>
                </div>
                {/* <!-- 上分頁 --> */}
                <div className="page">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* <!-- 討論串 --> */}
                <div className="row flex mx-0">
                    <div className="tage col-12 col-lg-2 mx-0 my-0 bg-blue-2">
                        <div className="row">
                            <h2>標籤</h2>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="親子"
                                />
                                <label className="form-check-label" htmlFor="親子"> 親子 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="露營"

                                />
                                <label className="form-check-label" htmlFor="露營"> 露營 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="登山"

                                />
                                <label className="form-check-label" htmlFor="登山"> 登山 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="老街"

                                />
                                <label className="form-check-label" htmlFor="老街"> 老街 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="溫泉"

                                />
                                <label className="form-check-label" htmlFor="溫泉"> 溫泉 </label>
                            </div>
                        </div>
                    </div>

                    <div className="discussion-page col-12 col-md col-lg mx-0 my-0 bg-blue-3">
                        <div className="row">
                            <div className="discussion-page-title"><h1>最新討埨串</h1></div>
                            <ArticleList Article={data}></ArticleList>
                        </div>
                    </div>
                </div>
                {/* <!-- 下分頁 --> */}
                <div className="page">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    )
}