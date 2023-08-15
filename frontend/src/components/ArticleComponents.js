import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const ArticleComponents = () => {
  const [articleData, setArticleData] = useState(null);
  console.log(articleData);
  let { state } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost/TravelMaker/Backend/public/api/getBoardText/${state}`)
      .then((response) => {
        const data = response.data;
        setArticleData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {articleData ? (
        <>
          <div className="Article-information-main-header">
            <h1>{articleData.text_title}</h1>
            <div className="Article-information-main-header-item">
              <span>{articleData.Posting_time}</span>
            </div>
          </div>
          <hr />
          <div className="Article-information-main-body">
            <div>{articleData.text}</div>
            <div className="row row-cols-1 row-cols-lg-2">
              {articleData.images.map((image_path, index) => {
                return (
                  <div className="col" key={index}><img className="w-100" src={`http://localhost/TravelMaker/Backend/public/storage/${image_path}`} style={{ height: '300px', objectFit: 'cover'}}></img></div>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ArticleComponents;
