import { Link } from 'react-router-dom';
import '../css/attractions.css';
import '../css/bootstrap.css';
export default function Attraction_innerpage() {

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
            <div className="backgroundmountain" style={{ 'backgroundImage': 'url()' }}>
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
                        <h3 style={{ 'color': 'black' }}><b>種類</b></h3>
                        <Link to="/attractions/Attractionmore">夜市</Link>
                        <Link to="/attractions/Attractionmore">觀光工廠</Link>
                        <Link to="/attractions/Attractionmore">港口</Link>
                        <Link to="/attractions/Attractionmore">市集</Link>
                        <Link to="/attractions/Attractionmore">購物</Link>
                        <Link to="/attractions/Attractionmore">人文景點</Link>
                        <Link to="/attractions/Attractionmore">自然景觀</Link>
                        <h3 style={{ 'color': 'black' }}><b>地區</b></h3>
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
                    <div className="container">
                        <h4>
                            <b><Link to="/attractions" className="bottom-line">景點</Link></b>
                            <b>→</b>
                            <b><Link to="/attractions/Attractionmore" className="bottom-line">南投</Link></b>
                            <b>→</b>
                            <b><Link to="/attractions/Attractionmore" className="bottom-line">魚池鄉</Link></b>
                            <b>→</b>
                            <b className="bottom-line">日月潭</b>
                        </h4>
                        <div id="attractionpicture" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"
                            style={{ 'backgroundColor': 'black' }}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#attractionpicture" data-bs-slide-to="0" className="active" aria-current="true"
                                    aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#attractionpicture" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#attractionpicture" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='carousel-piture' src="#" />
                                </div>
                                <div className="carousel-item">
                                    <img className='carousel-piture' src="#" />
                                </div>
                                <div className="carousel-item">
                                    <img className='carousel-piture' src="#" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#attractionpicture" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#attractionpicture" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div style={{ 'display': 'flex' }}>
                            <h1>
                                <b>
                                    日月潭 Zintun ★ ★ ★ ☆ ☆
                                </b>
                            </h1>
                            <i className="bi bi-heart-fill heart fs-2" onClick={(e) => {
                                e.target.classList.toggle('active');
                            }} style={{ 'marginLeft': 'auto', 'paddingTop': '5px' }}></i>
                            {/* <svg id="colorChangeSVG" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16" style={{ 'marginLeft': 'auto', 'paddingTop': '5px' }} onClick={(e) => {
                                    e.target.classList.toggle('active');
                                }}>
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"
                                    className="fill-area" />
                            </svg> */}
                            {/* <script src="your_script.js"></script> */}
                            <h2 style={{ 'paddingTop': '7px' }}>我的最愛</h2>
                        </div>
                        <h5>
                            日月潭（邵語：Zintun或Zintun a
                            Wazaqan），是一個位在臺灣南投縣魚池鄉日月村的半天然淡水湖泊兼水力發電用水庫；該潭是臺灣本島面積第二大的湖泊（僅次於曾文水庫）及第一大半天然湖泊兼發電用水庫。該潭平均水面海拔約736公尺，常態面積約7.93平方公里（滿水位時約8.4平方公里），最高水深達27公尺。其蘊含自然生態豐富，但其中有非常多是外來種生物。

                            該潭是台灣平埔族的邵族，所生活的主要地區之一，屬於邵族傳統領域；生活在該潭四周的族人稱其為「水社海」。由於過去當地附近平埔族稱居住於山裡的高山族，為「沙連」，當地又是山區最大的積水盆地，日月潭及其周圍地區因而得名「水沙連」。此外，尚有「水社大湖」、「龍湖」、「珠潭」、「雙潭」等名稱。其今名為日潭與月潭之合稱，該二名分別來自對其兩大組成部份水色及輪廓的描繪。同時，該潭景色自古以來經常受人讚賞，並自日本統治時期以來多次被有關當局列入臺灣八景。

                            2000年1月，交通部觀光局設立日月潭國家風景區，其範圍除原有日月潭特定區外，北面擴大至魚池鄉，東至水社大山，西至集集大山，南至水里蛇窯。

                            2016年3月，該潭與日本靜岡縣濱名湖締結為姐妹湖。.
                        </h5>
                        <hr className='inner-pagger-border'></hr>
                        <div className='row'>
                            <div className='col-6' >
                                <h3><b>資訊</b></h3>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <h5>地址:555203南投縣魚池鄉中山路599號</h5>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <h5>電話:886-49-2855668</h5>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <p style={{ 'float': 'left' }}>官網:</p>
                                <Link to="" style={{ 'textDecoration': 'none' }}><h5>日月潭國家風景區</h5></Link>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <h5>開放時間:</h5>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週一</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週二</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週三</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週四</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週五</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週六</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週日</p>
                                    <p>8:00-21:00</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ 'marginLeft': '10%' }}>
                                    <h3><b>交通資訊</b></h3>
                                    <hr style={{ 'border': '1px', 'solid': 'black', 'width': '100%' }}></hr>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29192.41292360597!2d120.89785279050786!3d23.852300830442857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d5e076ee0005%3A0xec17a6fd5312a528!2z5pel5pyI5r2t!5e0!3m2!1szh-TW!2stw!4v1690119779818!5m2!1szh-TW!2stw"
                                        width="500" height="250" style={{ 'border': '0' }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div style={{ 'marginLeft': '10%', 'paddingTop': '1%' }}>
                                    <h6>
                                        從臺北南下
                                        路線A：

                                        （國道3號）→霧峰系統交流道（國道6號）→愛蘭交流道下（接省道台14線往埔里）→埔里（接省道台21 線）→魚池→日月潭

                                        路線B：

                                        （國道1號）→彰化系統（國道3號）南下→霧峰系統交流道（國道6號）→愛蘭交流道下（接省道台14線往埔里）→埔里（接省道台21線）→魚池→日月潭

                                        路線C：

                                        國道3號→草屯交流道下（接省道台14線）往埔里→埔里（接省道台21線）→魚池→日月潭
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <hr className="inner-pagger-border"></hr>
                        <div style={{ 'clear': 'both' }}>
                            <fieldset className="rm-fieldset attraction-message">
                                <img className="img-fluid-message" src="#" />
                                <div style={{ 'paddingTop': '10px' }}>
                                    <p style={{ 'float': 'left' }}>魯夫</p>
                                    <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                    <p>★ ★ ★ ☆ ☆</p>
                                </div>
                                <div>
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
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
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
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
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
                                </div>
                            </fieldset>
                        </div>
                        {/* <button id="openReviewModal"
                            style={{ 'borderRadius': '12px', 'marginBottom': '5px', 'padding': '10px 25px', 'float': 'left' }}>寫評論
                        </button>
                        <div className="review-modal">
                            <h3>評論和評分</h3>
                            <div className="rating">
                                <span><i className="fas fa-star" data-rating="5"></i></span>
                                <span><i className="fas fa-star" data-rating="4"></i></span>
                                <span><i className="fas fa-star" data-rating="3"></i></span>
                                <span><i className="fas fa-star" data-rating="2"></i></span>
                                <span><i className="fas fa-star" data-rating="1"></i></span>
                            </div>
                            <textarea id="comment" name="comment" rows="4" cols="50" placeholder="請輸入評論"></textarea>
                            <input type="file" id="image" name="image" accept="image/*" style={{ 'paddingTop': '5px' }} />
                            <button id="submitReview">提交</button>
                            <button id="cancelReview">取消</button>
                        </div>*/}
                        <button className="btn btn-primary" style={{ width: '200px' }} data-bs-toggle="modal"
                            data-bs-target="#rest-comment">寫下評論</button>

                        <div data-bs-backdrop="static" id="rest-comment" className="modal" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">留下評論:</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <textarea id="rest-leave-comment" name="rest-leave-comment" rows="4"
                                            cols="50"></textarea>
                                        <br />
                                        <input type='file'></input>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="submit" value="提交" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/Attraction_innerpage/Attraction_forun" style={{ 'float': 'right' }} className="bottom-line" target="_blank">more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}