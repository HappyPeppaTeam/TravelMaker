import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function useImage() {
    const inputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesData, setImagesData] = useState([]);

    console.log(imagesData);
    // 上傳圖片
    const handleUpload = (e) => {
        const images = [...e.target.files].map((file) => {
            return {
                name: file.name,
                url: URL.createObjectURL(file),
            }
        });

        const imagesData = e.target.files;
        setImagesData([...imagesData]);
        setImages(images);
    }

    // 移除單一圖片
    const handleRemove = (e, imgIndex) => {
        e.preventDefault();
        setImages(images.filter((img, index) => {
            if (index === imgIndex) {
                URL.revokeObjectURL(img.url);
            }
            return index !== imgIndex;
        }))
        setImagesData(imagesData.filter((item, index) => {
            return index !== imgIndex;
        }))
    }

    // 移除全部圖片
    const handleRemoveAll = (e) => {
        e.preventDefault();
        images.forEach((img) => {
            URL.revokeObjectURL(img.url);
        });
        setImages([]);
        setImagesData([]);
    }

    useEffect(() => {
        if (images.length === 0 && inputRef.current) {
            inputRef.current.value = "";
        }
    }, [images])

    return {
        images,
        imagesData,
        handleUpload,
        handleRemove,
        handleRemoveAll,
        inputRef,
    }
}

function ArticleEditor() {
    const [Board, setBoard] = useState('請選擇');
    const [Location, setLocation] = useState('請選擇');
    const [Topic, setTopic] = useState('請選擇');
    const [Title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { images, imagesData, handleUpload, handleRemove, handleRemoveAll, inputRef } = useImage();
    const [exceedLimit, setExceedLimit] = useState(false);
    const userId = Cookies.get('userId');

    const handleBoardChange = (event) => {
        const selectBoard = event.target.value;
        setBoard(selectBoard);
        if (selectBoard === '1') {
            setLocation('1');
        } else if (selectBoard === '2') {
            setLocation('2');
        } else if (selectBoard === '3') {
            setLocation('3');
        }
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        const inputValue = event.target.value;
        setContent(inputValue);

        // 當超過1000個字符時，將字數標記為紅色
        if (inputValue.length > 2000) {
            alert('已超過2000字限制！');
            setExceedLimit(true);
        } else {
            setExceedLimit(false);
        }
    };

    const handleSubmit = async (event) => {
        const ArticleData = new FormData();
        ArticleData.append('postingUserId', userId)
        ArticleData.append('DiscussionId', Board)
        ArticleData.append('cityId', Location)
        ArticleData.append('type', Topic)
        ArticleData.append('textTitle', Title)
        ArticleData.append('text', content)
        imagesData.forEach((image, index) => {
            ArticleData.append(`image[${index}]`, image);
        });
        const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/createBoardText', ArticleData);
        if (response.data) {
            console.log("post成功！")
        } else {
            console.log("post Miss!")
        }
        event.preventDefault();
    };

    return (
        <div>
            <form className='row'>
                <h1>文章發布</h1>
                <div className="col-md select-board">
                    <label htmlFor="board" className="form-label">選擇討論版</label>
                    <select id="board" className="form-select" value={Board} onChange={handleBoardChange}>
                        <option disabled>請選擇</option>
                        <option value="1">北部討論版</option>
                        <option value="2">中部討論版</option>
                        <option value="3">南部討論版</option>
                        <option value="4">花東離島討論版</option>
                    </select>
                </div>
                <div className="col-md select-location">
                    <label htmlFor="location" className="form-label">選擇地點</label>
                    <select id="location" className="form-select" value={Location} onChange={handleLocationChange}>
                        <option disabled>請選擇</option>
                        {Board === '1' && (<>
                            <option value="1">臺北市</option>
                            <option value="2">新北市</option>
                            <option value="3">宜蘭縣</option>
                            <option value="4">基隆市</option>
                            <option value="5">桃園市</option>
                            <option value="6">新竹市</option>
                            <option value="7">新竹縣</option>
                        </>)}
                        {Board === '2' && (<>
                            <option value="8">臺中市</option>
                            <option value="9">苗栗縣</option>
                            <option value="10">彰化縣</option>
                            <option value="11">南投縣</option>
                            <option value="12">雲林縣</option>
                        </>)}
                        {Board === '3' && (<>
                            <option value="13">嘉義市</option>
                            <option value="14">嘉義縣</option>
                            <option value="15">臺南市</option>
                            <option value="16">高雄市</option>
                            <option value="17">屏東縣</option>
                        </>)}
                        {Board === '4' && (<>
                            <option value="18">花蓮縣</option>
                            <option value="19">臺東縣</option>
                            <option value="20">澎湖縣</option>
                            <option value="21">金門縣</option>
                            <option value="22">連江縣</option>
                        </>)}

                    </select>
                </div>
                <div className="col-md select-topic">
                    <label htmlFor="topic" className="form-label">選擇主題</label>
                    <select id="topic" className="form-select" value={Topic} onChange={handleTopicChange}>
                        <option disabled>請選擇</option>
                        <option value="1">親子</option>
                        <option value="2">露營</option>
                        <option value="3">登山</option>
                        <option value="4">老街</option>
                        <option value="5">溫泉</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Title" className="addtitle">
                        <h3>文章名稱</h3>
                        <input id="Title" className="addtitle_title" placeholder="請輸入文章名稱" onChange={handleTitleChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="content" className={`addtext_text ${exceedLimit ? 'exceed-limit' : ''}`}>
                        <h3>文章內容</h3>
                        <textarea id="content" className="addtext_text" placeholder="請輸入文字" onChange={handleContentChange} />
                        <div className="addtext">
                            字數：{content.length} / 2000
                        </div>
                    </label>
                </div>
                <label htmlFor="file-input">
                    <p className='fs-4 mb-2'>選擇相片</p>
                    <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        className="d-none ab"
                        multiple
                        onChange={handleUpload}
                        ref={inputRef}
                    />
                    <span className='btn btn-outline-primary me-2'>上傳圖片</span>
                    <span className='btn btn-outline-danger' onClick={(e) => handleRemoveAll(e)}>移除全部圖片</span>
                </label>
                <div className='row row-cols-2 row-cols-lg-3 mt-3 g-3'>
                    {images.map((image, index) => {
                        return (
                            <div className='col' key={index}>
                                <img className='selectedImg w-100' src={image.url} />
                                <div className='imgInfo'>
                                    <div className='fileName w-100 d-flex justify-content-between align-items-center'>
                                        <p className='m-0 py-2 text-center'>{image.name}</p>
                                        <button className='btn remove' onClick={(e) => handleRemove(e, index)}><i className="bi bi-x-circle fs-4"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='post_article'>
                    <button className='btn btn-danger' type="submit">取消發文</button>
                    <button className='btn btn-primary' type="button" onClick={handleSubmit} disabled={exceedLimit}>我要發文</button>
                </div>
            </form>

        </div>
    );
};

export default ArticleEditor;
