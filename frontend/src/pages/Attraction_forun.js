import { Link } from 'react-router-dom';
import '../css/attractions.css';
import '../css/bootstrap.css';

export default function Attraction_forun() {

    function dropDown(e) {
        e.target.classList.toggle("active2");
        var dropdownContent = e.target.nextElementSibling;
        if (dropdownContent.style.display === "block") { dropdownContent.style.display = "none"; }
        else {
            dropdownContent.style.display = "block";
        }
    }




    return (
        <>
            <div className="backgroundmountain">
                <input className="search-bar" type="text" name="search" id="search" placeholder="搜尋欄" />
                <div className="container hyperlink-location" >
                    <Link to="#" className="button-hyperlink">餐廳</Link>
                    <Link to="/attractions" className="button-hyperlink">景點</Link>
                    <Link to="#" className="button-hyperlink">討論區</Link>
                    <Link to="#" className="button-hyperlink">自助旅遊排程</Link>
                </div>
            </div>
            <div style={{ 'display': 'grid' }}>
                <div className="container-fluid d-flex m-0 p-0">
                    <div className="sidenav">
                        <Link to="/attractions/Attractionattraction"><h3 style={{ 'color': 'black' }}><b>種類</b></h3></Link>
                        <Link to="/attractions/Attractionmore">夜市</Link>
                        <Link to="/attractions/Attractionmore">港口</Link>
                        <Link to="/attractions/Attractionmore">市集</Link>
                        <Link to="/attractions/Attractionmore">購物</Link>
                        <Link to="/attractions/Attractionmore">人文景點</Link>
                        <Link to="/attractions/Attractionmore">自然景觀</Link>
                        <Link to="/attractions/Attractionmore">觀光工廠</Link>
                        <Link to="/attractions/Attractioncountry"><h3 style={{ 'color': 'black' }}><b>地區</b></h3></Link>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>基隆
                        </button>
                        <div className="dropdown-container" >
                            <Link to="/attractions/Attractionmore">中正區</Link>
                            <Link to="/attractions/Attractionmore">七堵區</Link>
                            <Link to="/attractions/Attractionmore">暖暖區</Link>
                            <Link to="/attractions/Attractionmore">仁愛區</Link>
                            <Link to="/attractions/Attractionmore">中山區</Link>
                            <Link to="/attractions/Attractionmore">安樂區</Link>
                            <Link to="/attractions/Attractionmore">信義區</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>台北
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">松山區</Link>
                            <Link to="/attractions/Attractionmore">信義區</Link>
                            <Link to="/attractions/Attractionmore">大安區</Link>
                            <Link to="/attractions/Attractionmore">中山區</Link>
                            <Link to="/attractions/Attractionmore">中正區</Link>
                            <Link to="/attractions/Attractionmore">大同區</Link>
                            <Link to="/attractions/Attractionmore">萬華區</Link>
                            <Link to="/attractions/Attractionmore">文山區</Link>
                            <Link to="/attractions/Attractionmore">南港區</Link>
                            <Link to="/attractions/Attractionmore">內湖區</Link>
                            <Link to="/attractions/Attractionmore">士林區</Link>
                            <Link to="/attractions/Attractionmore">北投區</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>新北
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">板橋區</Link>
                            <Link to="/attractions/Attractionmore">三重區</Link>
                            <Link to="/attractions/Attractionmore">中和區</Link>
                            <Link to="/attractions/Attractionmore">永和區</Link>
                            <Link to="/attractions/Attractionmore">新莊區</Link>
                            <Link to="/attractions/Attractionmore">新店區</Link>
                            <Link to="/attractions/Attractionmore">樹林區</Link>
                            <Link to="/attractions/Attractionmore">鶯歌區</Link>
                            <Link to="/attractions/Attractionmore">三峽區</Link>
                            <Link to="/attractions/Attractionmore">淡水區</Link>
                            <Link to="/attractions/Attractionmore">汐止區</Link>
                            <Link to="/attractions/Attractionmore">瑞芳區</Link>
                            <Link to="/attractions/Attractionmore">土城區</Link>
                            <Link to="/attractions/Attractionmore">蘆洲區</Link>
                            <Link to="/attractions/Attractionmore">五股區</Link>
                            <Link to="/attractions/Attractionmore">泰山區</Link>
                            <Link to="/attractions/Attractionmore">林口區</Link>
                            <Link to="/attractions/Attractionmore">深坑區</Link>
                            <Link to="/attractions/Attractionmore">石碇區</Link>
                            <Link to="/attractions/Attractionmore">坪林區</Link>
                            <Link to="/attractions/Attractionmore">三芝區</Link>
                            <Link to="/attractions/Attractionmore">石門區</Link>
                            <Link to="/attractions/Attractionmore">八里區</Link>
                            <Link to="/attractions/Attractionmore">平溪區</Link>
                            <Link to="/attractions/Attractionmore">雙溪區</Link>
                            <Link to="/attractions/Attractionmore">貢寮區</Link>
                            <Link to="/attractions/Attractionmore">金山區</Link>
                            <Link to="/attractions/Attractionmore">萬里區</Link>
                            <Link to="/attractions/Attractionmore">烏來區</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>桃園
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">桃園區</Link>
                            <Link to="/attractions/Attractionmore">中壢區</Link>
                            <Link to="/attractions/Attractionmore">大溪區</Link>
                            <Link to="/attractions/Attractionmore">楊梅區</Link>
                            <Link to="/attractions/Attractionmore">蘆竹區</Link>
                            <Link to="/attractions/Attractionmore">大園區</Link>
                            <Link to="/attractions/Attractionmore">龜山區</Link>
                            <Link to="/attractions/Attractionmore">八德區</Link>
                            <Link to="/attractions/Attractionmore">龍潭區</Link>
                            <Link to="/attractions/Attractionmore">平鎮區</Link>
                            <Link to="/attractions/Attractionmore">新屋區</Link>
                            <Link to="/attractions/Attractionmore">觀音區</Link>
                            <Link to="/attractions/Attractionmore">復興區</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>新竹
                        </button>
                        <div className="dropdown-container" >
                            <Link to="/attractions/Attractionmore">東區</Link>
                            <Link to="/attractions/Attractionmore">北區</Link>
                            <Link to="/attractions/Attractionmore">香山區</Link>
                            <Link to="/attractions/Attractionmore">竹北市</Link>
                            <Link to="/attractions/Attractionmore">關西鎮</Link>
                            <Link to="/attractions/Attractionmore">新埔鎮</Link>
                            <Link to="/attractions/Attractionmore">竹東鎮</Link>
                            <Link to="/attractions/Attractionmore">湖口鄉</Link>
                            <Link to="/attractions/Attractionmore">橫山鄉</Link>
                            <Link to="/attractions/Attractionmore">新豐鄉</Link>
                            <Link to="/attractions/Attractionmore">芎林鄉</Link>
                            <Link to="/attractions/Attractionmore">寶山鄉</Link>
                            <Link to="/attractions/Attractionmore">北埔鄉</Link>
                            <Link to="/attractions/Attractionmore">峨眉鄉</Link>
                            <Link to="/attractions/Attractionmore">尖石鄉</Link>
                            <Link to="/attractions/Attractionmore">五峰鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>苗栗
                        </button>
                        <div className="dropdown-container" >
                            <Link to="/attractions/Attractionmore">苗栗市</Link>
                            <Link to="/attractions/Attractionmore">頭份市</Link>
                            <Link to="/attractions/Attractionmore">苑裡鎮</Link>
                            <Link to="/attractions/Attractionmore">通霄鎮</Link>
                            <Link to="/attractions/Attractionmore">竹南鎮</Link>
                            <Link to="/attractions/Attractionmore">後龍鎮</Link>
                            <Link to="/attractions/Attractionmore">卓蘭鎮</Link>
                            <Link to="/attractions/Attractionmore">大湖鄉</Link>
                            <Link to="/attractions/Attractionmore">公館鄉</Link>
                            <Link to="/attractions/Attractionmore">銅鑼鄉</Link>
                            <Link to="/attractions/Attractionmore">南庄鄉</Link>
                            <Link to="/attractions/Attractionmore">頭屋鄉</Link>
                            <Link to="/attractions/Attractionmore">三義鄉</Link>
                            <Link to="/attractions/Attractionmore">西湖鄉</Link>
                            <Link to="/attractions/Attractionmore">造橋鄉</Link>
                            <Link to="/attractions/Attractionmore">三灣鄉</Link>
                            <Link to="/attractions/Attractionmore">獅潭鄉</Link>
                            <Link to="/attractions/Attractionmore">泰安鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>台中
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">中區</Link>
                            <Link to="/attractions/Attractionmore">東區</Link>
                            <Link to="/attractions/Attractionmore">南區</Link>
                            <Link to="/attractions/Attractionmore">西區</Link>
                            <Link to="/attractions/Attractionmore">北區</Link>
                            <Link to="/attractions/Attractionmore">西屯區</Link>
                            <Link to="/attractions/Attractionmore">南屯區</Link>
                            <Link to="/attractions/Attractionmore">北屯區</Link>
                            <Link to="/attractions/Attractionmore">豐原區</Link>
                            <Link to="/attractions/Attractionmore">東勢區</Link>
                            <Link to="/attractions/Attractionmore">大甲區</Link>
                            <Link to="/attractions/Attractionmore">清水區</Link>
                            <Link to="/attractions/Attractionmore">沙鹿區</Link>
                            <Link to="/attractions/Attractionmore">梧棲區</Link>
                            <Link to="/attractions/Attractionmore">后里區</Link>
                            <Link to="/attractions/Attractionmore">神岡區</Link>
                            <Link to="/attractions/Attractionmore">潭子區</Link>
                            <Link to="/attractions/Attractionmore">大雅區</Link>
                            <Link to="/attractions/Attractionmore">外埔區</Link>
                            <Link to="/attractions/Attractionmore">大安區</Link>
                            <Link to="/attractions/Attractionmore">烏日區</Link>
                            <Link to="/attractions/Attractionmore">大肚區</Link>
                            <Link to="/attractions/Attractionmore">龍井區</Link>
                            <Link to="/attractions/Attractionmore">霧峰區</Link>
                            <Link to="/attractions/Attractionmore">太平區</Link>
                            <Link to="/attractions/Attractionmore">大里區</Link>
                            <Link to="/attractions/Attractionmore">和平區</Link>
                            <Link to="/attractions/Attractionmore">新社區</Link>
                            <Link to="/attractions/Attractionmore">石岡區</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>彰化
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">彰化市</Link>
                            <Link to="/attractions/Attractionmore">員林市</Link>
                            <Link to="/attractions/Attractionmore">鹿港鎮</Link>
                            <Link to="/attractions/Attractionmore">和美鎮</Link>
                            <Link to="/attractions/Attractionmore">北斗鎮</Link>
                            <Link to="/attractions/Attractionmore">溪湖鎮</Link>
                            <Link to="/attractions/Attractionmore">田中鎮</Link>
                            <Link to="/attractions/Attractionmore">二林鎮</Link>
                            <Link to="/attractions/Attractionmore">線西鄉</Link>
                            <Link to="/attractions/Attractionmore">伸港鄉</Link>
                            <Link to="/attractions/Attractionmore">福興鄉</Link>
                            <Link to="/attractions/Attractionmore">秀水鄉</Link>
                            <Link to="/attractions/Attractionmore">花壇鄉</Link>
                            <Link to="/attractions/Attractionmore">芬園鄉</Link>
                            <Link to="/attractions/Attractionmore">大村鄉</Link>
                            <Link to="/attractions/Attractionmore">埔鹽鄉</Link>
                            <Link to="/attractions/Attractionmore">埔心鄉</Link>
                            <Link to="/attractions/Attractionmore">永靖鄉</Link>
                            <Link to="/attractions/Attractionmore">社頭鄉</Link>
                            <Link to="/attractions/Attractionmore">二水鄉</Link>
                            <Link to="/attractions/Attractionmore">田尾鄉</Link>
                            <Link to="/attractions/Attractionmore">埤頭鄉</Link>
                            <Link to="/attractions/Attractionmore">芳苑鄉</Link>
                            <Link to="/attractions/Attractionmore">大城鄉</Link>
                            <Link to="/attractions/Attractionmore">竹塘鄉</Link>
                            <Link to="/attractions/Attractionmore">溪州鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>南投
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">南投市</Link>
                            <Link to="/attractions/Attractionmore">埔里鎮</Link>
                            <Link to="/attractions/Attractionmore">草屯鎮</Link>
                            <Link to="/attractions/Attractionmore">竹山鎮</Link>
                            <Link to="/attractions/Attractionmore">集集鎮</Link>
                            <Link to="/attractions/Attractionmore">名間鄉</Link>
                            <Link to="/attractions/Attractionmore">鹿谷鄉</Link>
                            <Link to="/attractions/Attractionmore">中寮鄉</Link>
                            <Link to="/attractions/Attractionmore">魚池鄉</Link>
                            <Link to="/attractions/Attractionmore">國姓鄉</Link>
                            <Link to="/attractions/Attractionmore">水里鄉</Link>
                            <Link to="/attractions/Attractionmore">信義鄉</Link>
                            <Link to="/attractions/Attractionmore">仁愛鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>雲林
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">斗六市</Link>
                            <Link to="/attractions/Attractionmore">斗南鎮</Link>
                            <Link to="/attractions/Attractionmore">虎尾鎮</Link>
                            <Link to="/attractions/Attractionmore">北港鎮</Link>
                            <Link to="/attractions/Attractionmore">土庫鎮</Link>
                            <Link to="/attractions/Attractionmore">西螺鎮</Link>
                            <Link to="/attractions/Attractionmore">古坑鄉</Link>
                            <Link to="/attractions/Attractionmore">大埤鄉</Link>
                            <Link to="/attractions/Attractionmore">林內鄉</Link>
                            <Link to="/attractions/Attractionmore">莿桐鄉</Link>
                            <Link to="/attractions/Attractionmore">二崙鄉</Link>
                            <Link to="/attractions/Attractionmore">崙背鄉</Link>
                            <Link to="/attractions/Attractionmore">麥寮鄉</Link>
                            <Link to="/attractions/Attractionmore">東勢鄉</Link>
                            <Link to="/attractions/Attractionmore">褒忠鄉</Link>
                            <Link to="/attractions/Attractionmore">臺西鄉</Link>
                            <Link to="/attractions/Attractionmore">元長鄉</Link>
                            <Link to="/attractions/Attractionmore">四湖鄉</Link>
                            <Link to="/attractions/Attractionmore">口湖鄉</Link>
                            <Link to="/attractions/Attractionmore">水林鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>嘉義
                        </button>
                        <div className="dropdown-container" >
                            <Link to="/attractions/Attractionmore">東區</Link>
                            <Link to="/attractions/Attractionmore">西區</Link>
                            <Link to="/attractions/Attractionmore">太保市</Link>
                            <Link to="/attractions/Attractionmore">朴子市</Link>
                            <Link to="/attractions/Attractionmore">布袋鎮</Link>
                            <Link to="/attractions/Attractionmore">大林鎮</Link>
                            <Link to="/attractions/Attractionmore">民雄鄉</Link>
                            <Link to="/attractions/Attractionmore">溪口鄉</Link>
                            <Link to="/attractions/Attractionmore">新港鄉</Link>
                            <Link to="/attractions/Attractionmore">六腳鄉</Link>
                            <Link to="/attractions/Attractionmore">東石鄉</Link>
                            <Link to="/attractions/Attractionmore">義竹鄉</Link>
                            <Link to="/attractions/Attractionmore">鹿草鄉</Link>
                            <Link to="/attractions/Attractionmore">水上鄉</Link>
                            <Link to="/attractions/Attractionmore">中埔鄉</Link>
                            <Link to="/attractions/Attractionmore">竹崎鄉</Link>
                            <Link to="/attractions/Attractionmore">梅山鄉</Link>
                            <Link to="/attractions/Attractionmore">番路鄉</Link>
                            <Link to="/attractions/Attractionmore">大埔鄉</Link>
                            <Link to="/attractions/Attractionmore">阿里山鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>台南
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">東區</Link>
                            <Link to="/attractions/Attractionmore">南區</Link>
                            <Link to="/attractions/Attractionmore">北區</Link>
                            <Link to="/attractions/Attractionmore">中西區</Link>
                            <Link to="/attractions/Attractionmore">新營區</Link>
                            <Link to="/attractions/Attractionmore">鹽水區</Link>
                            <Link to="/attractions/Attractionmore">白河區</Link>
                            <Link to="/attractions/Attractionmore">柳營區</Link>
                            <Link to="/attractions/Attractionmore">後壁區</Link>
                            <Link to="/attractions/Attractionmore">東山區</Link>
                            <Link to="/attractions/Attractionmore">麻豆區</Link>
                            <Link to="/attractions/Attractionmore">下營區</Link>
                            <Link to="/attractions/Attractionmore">六甲區</Link>
                            <Link to="/attractions/Attractionmore">官田區</Link>
                            <Link to="/attractions/Attractionmore">大內區</Link>
                            <Link to="/attractions/Attractionmore">佳里區</Link>
                            <Link to="/attractions/Attractionmore">學甲區</Link>
                            <Link to="/attractions/Attractionmore">西港區</Link>
                            <Link to="/attractions/Attractionmore">七股區</Link>
                            <Link to="/attractions/Attractionmore">將軍區</Link>
                            <Link to="/attractions/Attractionmore">北門區</Link>
                            <Link to="/attractions/Attractionmore">新化區</Link>
                            <Link to="/attractions/Attractionmore">善化區</Link>
                            <Link to="/attractions/Attractionmore">新市區</Link>
                            <Link to="/attractions/Attractionmore">安定區</Link>
                            <Link to="/attractions/Attractionmore">山上區</Link>
                            <Link to="/attractions/Attractionmore">玉井區</Link>
                            <Link to="/attractions/Attractionmore">楠西區</Link>
                            <Link to="/attractions/Attractionmore">南化區</Link>
                            <Link to="/attractions/Attractionmore">左鎮區</Link>
                            <Link to="/attractions/Attractionmore">仁德區</Link>
                            <Link to="/attractions/Attractionmore">歸仁區</Link>
                            <Link to="/attractions/Attractionmore">關廟區</Link>
                            <Link to="/attractions/Attractionmore">龍崎區</Link>
                            <Link to="/attractions/Attractionmore">永康區</Link>
                            <Link to="/attractions/Attractionmore">安南區</Link>
                            <Link to="/attractions/Attractionmore">安平區</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>高雄
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">鹽埕區</Link>
                            <Link to="/attractions/Attractionmore">鼓山區</Link>
                            <Link to="/attractions/Attractionmore">左營區</Link>
                            <Link to="/attractions/Attractionmore">楠梓區</Link>
                            <Link to="/attractions/Attractionmore">前金區</Link>
                            <Link to="/attractions/Attractionmore">苓雅區</Link>
                            <Link to="/attractions/Attractionmore">前鎮區</Link>
                            <Link to="/attractions/Attractionmore">旗津區</Link>
                            <Link to="/attractions/Attractionmore">小港區</Link>
                            <Link to="/attractions/Attractionmore">鳳山區</Link>
                            <Link to="/attractions/Attractionmore">林園區</Link>
                            <Link to="/attractions/Attractionmore">大寮區</Link>
                            <Link to="/attractions/Attractionmore">大樹區</Link>
                            <Link to="/attractions/Attractionmore">大社區</Link>
                            <Link to="/attractions/Attractionmore">仁武區</Link>
                            <Link to="/attractions/Attractionmore">鳥松區</Link>
                            <Link to="/attractions/Attractionmore">岡山區</Link>
                            <Link to="/attractions/Attractionmore">橋頭區</Link>
                            <Link to="/attractions/Attractionmore">燕巢區</Link>
                            <Link to="/attractions/Attractionmore">田寮區</Link>
                            <Link to="/attractions/Attractionmore">阿蓮區</Link>
                            <Link to="/attractions/Attractionmore">路竹區</Link>
                            <Link to="/attractions/Attractionmore">湖內區</Link>
                            <Link to="/attractions/Attractionmore">茄萣區</Link>
                            <Link to="/attractions/Attractionmore">永安區</Link>
                            <Link to="/attractions/Attractionmore">彌陀區</Link>
                            <Link to="/attractions/Attractionmore">梓官區</Link>
                            <Link to="/attractions/Attractionmore">旗山區</Link>
                            <Link to="/attractions/Attractionmore">美濃區</Link>
                            <Link to="/attractions/Attractionmore">六龜區</Link>
                            <Link to="/attractions/Attractionmore">甲仙區</Link>
                            <Link to="/attractions/Attractionmore">杉林區</Link>
                            <Link to="/attractions/Attractionmore">內門區</Link>
                            <Link to="/attractions/Attractionmore">茂林區</Link>
                            <Link to="/attractions/Attractionmore">桃源區</Link>
                            <Link to="/attractions/Attractionmore">三民區</Link>
                            <Link to="/attractions/Attractionmore">新興區</Link>
                            <Link to="/attractions/Attractionmore">那瑪夏區</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>屏東
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">屏東市</Link>
                            <Link to="/attractions/Attractionmore">潮州鎮</Link>
                            <Link to="/attractions/Attractionmore">東港鎮</Link>
                            <Link to="/attractions/Attractionmore">恆春鎮</Link>
                            <Link to="/attractions/Attractionmore">萬丹鄉</Link>
                            <Link to="/attractions/Attractionmore">長治鄉</Link>
                            <Link to="/attractions/Attractionmore">麟洛鄉</Link>
                            <Link to="/attractions/Attractionmore">九如鄉</Link>
                            <Link to="/attractions/Attractionmore">里港鄉</Link>
                            <Link to="/attractions/Attractionmore">鹽埔鄉</Link>
                            <Link to="/attractions/Attractionmore">高樹鄉</Link>
                            <Link to="/attractions/Attractionmore">萬巒鄉</Link>
                            <Link to="/attractions/Attractionmore">內埔鄉</Link>
                            <Link to="/attractions/Attractionmore">竹田鄉</Link>
                            <Link to="/attractions/Attractionmore">新埤鄉</Link>
                            <Link to="/attractions/Attractionmore">枋寮鄉</Link>
                            <Link to="/attractions/Attractionmore">新園鄉</Link>
                            <Link to="/attractions/Attractionmore">崁頂鄉</Link>
                            <Link to="/attractions/Attractionmore">林邊鄉</Link>
                            <Link to="/attractions/Attractionmore">南州鄉</Link>
                            <Link to="/attractions/Attractionmore">佳冬鄉</Link>
                            <Link to="/attractions/Attractionmore">琉球鄉</Link>
                            <Link to="/attractions/Attractionmore">車城鄉</Link>
                            <Link to="/attractions/Attractionmore">滿洲鄉</Link>
                            <Link to="/attractions/Attractionmore">枋山鄉</Link>
                            <Link to="/attractions/Attractionmore">霧臺鄉</Link>
                            <Link to="/attractions/Attractionmore">瑪家鄉</Link>
                            <Link to="/attractions/Attractionmore">泰武鄉</Link>
                            <Link to="/attractions/Attractionmore">來義鄉</Link>
                            <Link to="/attractions/Attractionmore">春日鄉</Link>
                            <Link to="/attractions/Attractionmore">獅子鄉</Link>
                            <Link to="/attractions/Attractionmore">牡丹鄉</Link>
                            <Link to="/attractions/Attractionmore">三地門鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>臺東
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">臺東市</Link>
                            <Link to="/attractions/Attractionmore">成功鎮</Link>
                            <Link to="/attractions/Attractionmore">關山鎮</Link>
                            <Link to="/attractions/Attractionmore">卑南鄉</Link>
                            <Link to="/attractions/Attractionmore">大武鄉</Link>
                            <Link to="/attractions/Attractionmore">東河鄉</Link>
                            <Link to="/attractions/Attractionmore">長濱鄉</Link>
                            <Link to="/attractions/Attractionmore">鹿野鄉</Link>
                            <Link to="/attractions/Attractionmore">池上鄉</Link>
                            <Link to="/attractions/Attractionmore">綠島鄉</Link>
                            <Link to="/attractions/Attractionmore">延平鄉</Link>
                            <Link to="/attractions/Attractionmore">海端鄉</Link>
                            <Link to="/attractions/Attractionmore">達仁鄉</Link>
                            <Link to="/attractions/Attractionmore">金峰鄉</Link>
                            <Link to="/attractions/Attractionmore">蘭嶼鄉</Link>
                            <Link to="/attractions/Attractionmore">太麻里鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>花蓮
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">花蓮市</Link>
                            <Link to="/attractions/Attractionmore">鳳林鎮</Link>
                            <Link to="/attractions/Attractionmore">玉里鎮</Link>
                            <Link to="/attractions/Attractionmore">新城鄉</Link>
                            <Link to="/attractions/Attractionmore">吉安鄉</Link>
                            <Link to="/attractions/Attractionmore">壽豐鄉</Link>
                            <Link to="/attractions/Attractionmore">光復鄉</Link>
                            <Link to="/attractions/Attractionmore">豐濱鄉</Link>
                            <Link to="/attractions/Attractionmore">瑞穗鄉</Link>
                            <Link to="/attractions/Attractionmore">富里鄉</Link>
                            <Link to="/attractions/Attractionmore">秀林鄉</Link>
                            <Link to="/attractions/Attractionmore">萬榮鄉</Link>
                            <Link to="/attractions/Attractionmore">卓溪鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>宜蘭
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">宜蘭市</Link>
                            <Link to="/attractions/Attractionmore">羅東鎮</Link>
                            <Link to="/attractions/Attractionmore">蘇澳鎮</Link>
                            <Link to="/attractions/Attractionmore">頭城鎮</Link>
                            <Link to="/attractions/Attractionmore">礁溪鄉</Link>
                            <Link to="/attractions/Attractionmore">壯圍鄉</Link>
                            <Link to="/attractions/Attractionmore">員山鄉</Link>
                            <Link to="/attractions/Attractionmore">冬山鄉</Link>
                            <Link to="/attractions/Attractionmore">五結鄉</Link>
                            <Link to="/attractions/Attractionmore">三星鄉</Link>
                            <Link to="/attractions/Attractionmore">大同鄉</Link>
                            <Link to="/attractions/Attractionmore">南澳鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>澎湖
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">馬公市</Link>
                            <Link to="/attractions/Attractionmore">湖西鄉</Link>
                            <Link to="/attractions/Attractionmore">白沙鄉</Link>
                            <Link to="/attractions/Attractionmore">西嶼鄉</Link>
                            <Link to="/attractions/Attractionmore">望安鄉</Link>
                            <Link to="/attractions/Attractionmore">七美鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>金門
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">金城鎮</Link>
                            <Link to="/attractions/Attractionmore">金湖鎮</Link>
                            <Link to="/attractions/Attractionmore">金沙鎮</Link>
                            <Link to="/attractions/Attractionmore">金寧鄉</Link>
                            <Link to="/attractions/Attractionmore">烈嶼鄉</Link>
                            <Link to="/attractions/Attractionmore">烏坵鄉</Link>
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>馬祖
                        </button>
                        <div className="dropdown-container">
                            <Link to="/attractions/Attractionmore">南竿鄉</Link>
                            <Link to="/attractions/Attractionmore">北竿鄉</Link>
                            <Link to="/attractions/Attractionmore">莒光鄉</Link>
                            <Link to="/attractions/Attractionmore">東引鄉</Link>
                        </div>
                    </div>
                    <div className='container'>
                        <img src="#" style={{ 'width': '100%', 'height': '500px' }} />
                        <h1 style={{ 'float': 'left' }}><b>台中火車站</b></h1>
                        <h1 style={{ 'paddingLeft': '150px' }}>★ ★ ★ ☆ ☆</h1>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
                        <div className="pagination-wrapper">
                            <div className="pagination">
                                <Link to="#">&laquo;</Link>
                                <Link to="#" className="active">1</Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <Link to="#">4</Link>
                                <Link to="#">5</Link>
                                <Link to="#">6</Link>
                                <Link to="#">7</Link>
                                <Link to="#">8</Link>
                                <Link to="#">9</Link>
                                <Link to="#">10</Link>
                                <Link to="#">&raquo;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}