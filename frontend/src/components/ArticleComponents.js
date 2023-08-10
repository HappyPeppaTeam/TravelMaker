import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const ArticleComponents = () => {
  const [articleData, setArticleData] = useState(null);
  let { state } = useLocation();
  console.log(state)
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost/TravelMaker/Backend/public/api/getBoardText/${state}`)
  //     .then((response) => {
  //       const data = response.data;
  //       setArticleData(data);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div>
      {articleData ? (
        <>
          <div
            className="Article-information-main-header"
            style={{ border: "1px seagreen solid" }}
          >
            <h1>{articleData.text_title}</h1>
            <div>
              <span>{articleData.Posting_time}</span>
              <span>點閱率</span>
            </div>
          </div>
          <hr />
          <div
            className="Article-information-main-body"
            style={{ border: "1px blue solid" }}
          >
            <div>{articleData.text}</div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ArticleComponents;
