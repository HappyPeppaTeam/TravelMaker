export default function Home() {
    return (
        <>
        <div className="filter d-flex justify-content-evenly mt-4 mx-auto">
          <a href="#">餐廳</a>
          <a href="#">景點</a>
          <a href="#">討論區</a>
          <a href="#">自助旅遊排程</a>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide header mt-4 mb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src="https://images.unsplash.com/photo-1682695795557-17447f921f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="travelGuide mb-5">
          <h2 className="fw-bold">精選旅遊攻略</h2>
          <p className="mb-0">沒有想法嗎? 快來看看旅遊達人們怎麼玩 !</p>
          <div className="row row-cols-2 g-3 mt-4">
            <div className="col">
              <a href="#" className="cardLink"
                ><div className="card">
                  <div className="row g-0">
                    <div className="col-lg-4">
                      <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        className="img-fluid round h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body p-0">
                        <h4 className="card-title fw-bold mx-4 mb-4 mt-3">
                          好吃好喝又好玩!南投星空露營場
                        </h4>
                        <p className="card-text mx-4 mb-3">
                          <small className="text-muted"
                            ><span className="travelSort me-2">野餐</span
                            ><span className="travelSort">親子同樂</span></small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div></a
              >
            </div>
            <div className="col">
              <a href="#" className="cardLink"
                ><div className="card">
                  <div className="row g-0">
                    <div className="col-lg-4">
                      <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        className="img-fluid round h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body p-0">
                        <h4 className="card-title fw-bold mx-4 mb-4 mt-3">
                          好吃好喝又好玩!南投星空露營場
                        </h4>
                        <p className="card-text mx-4 mb-3">
                          <small className="text-muted"
                            ><span className="travelSort me-2">野餐</span
                            ><span className="travelSort">親子同樂</span></small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div></a
              >
            </div>
            <div className="col">
              <a href="#" className="cardLink"
                ><div className="card">
                  <div className="row g-0">
                    <div className="col-lg-4">
                      <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        className="img-fluid round h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body p-0">
                        <h4 className="card-title fw-bold mx-4 mb-4 mt-3">
                          好吃好喝又好玩!南投星空露營場
                        </h4>
                        <p className="card-text mx-4 mb-3">
                          <small className="text-muted"
                            ><span className="travelSort me-2">野餐</span
                            ><span className="travelSort">親子同樂</span></small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div></a
              >
            </div>
            <div className="col">
              <a href="#" className="cardLink"
                ><div className="card">
                  <div className="row g-0">
                    <div className="col-lg-4">
                      <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        className="img-fluid round h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body p-0">
                        <h4 className="card-title fw-bold mx-4 mb-4 mt-3">
                          好吃好喝又好玩!南投星空露營場
                        </h4>
                        <p className="card-text mx-4 mb-3">
                          <small className="text-muted"
                            ><span className="travelSort me-2">野餐</span
                            ><span className="travelSort">親子同樂</span></small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div></a
              >
            </div>
          </div>
        </div>

        <div className="popularRestaurant mb-5">
          <h2 className="fw-bold">熱門餐廳</h2>
          <p className="mb-0">沒有想法嗎? 快來看看旅遊達人們怎麼玩 !</p>
          <div className="row row-cols-2 mt-4">
            <div className="col">
              <a href="#"
                ><div className="restaurantImg">
                  <img
                    className="w-100"
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt=""
                  />
                  <div className="mask w-100 h-100"></div>
                  <h4 className="restaurantType">平價小吃</h4>
                </div></a
              >
            </div>
            <div className="col">
              <a href="#"
                ><div className="restaurantImg">
                  <img
                    className="w-100"
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt=""
                  />
                  <div className="mask w-100 h-100"></div>
                  <h4 className="restaurantType">平價小吃</h4>
                </div></a
              >
            </div>
          </div>
        </div>

        <div className="popularSpot">
          <h2 className="fw-bold">熱門景點</h2>
          <p className="mb-0">沒有想法嗎? 快來看看旅遊達人們怎麼玩 !</p>
        </div>
        </>
    )
}