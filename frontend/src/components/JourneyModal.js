import React, { useRef} from "react";
import CalendarView from "./CalenderView";
import CalendarEditView from "./CalendarEditView";

const JourneyModel = ({
  handleCloseModal,
  calenderRef,
  calendarEditRef,
  journeyDetail,
  setJourneyDetail,
}) => {
  const modalHeaderStyle = {
    height: "130px",
    backgroundImage: "url(../images/street.jpg)",
    backgroundSize: "cover",
  };

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(107, 179, 227, 0.2) 0%, rgba(178, 226, 232, 0.8) 50%, rgba(107, 179, 227, 0.2) 100%)",
    display: 'none',
  };

  const imageContainerStyle = {
    width: "100%",
    height: "200px",
  };

  const journeyContainerStyle = {
    width: "100%",
    minHeight: "500px",
    background:
      "linear-gradient(135deg, rgba(235,244,245,0.5) 57%, rgba(181,198,224,0.5) 100%)",
  };

  const editViewRef = useRef(null);
  const regularViewRef = useRef(null);

  const handleEditView = () => {
    if (editViewRef.current && regularViewRef.current) {
      regularViewRef.current.style.display = "none";
      editViewRef.current.style.display = "block";
      calendarEditRef.current.getApi().render();
    }
  };

  const handleRegView = () => {
    if (editViewRef.current && regularViewRef.current) {
      regularViewRef.current.style.display = "block";
      editViewRef.current.style.display = "none";
      calenderRef.current.getApi().render();
    }
  };


  // const [editEvents, setEditEvents] = useState([]);

  // useMemo(() => {
  //   setEditEvents(journeyDetail.events);
  //   console.log("editEvents: ",editEvents);
  // }, [journeyDetail])


  // const handleSaveChange = () => {
  //   setJourneyDetail({
  //     ...journeyDetail,
  //     events: editEvents,
  //   })
  // }

  return (
    <div
      className="modal fade"
      id="journeyModal"
      tabIndex="-1"
      aria-labelledby="journeyModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-lg-down">
        <div className="modal-content">
          <div className="modal-header" style={modalHeaderStyle}>
            <button
              type="button"
              className="btn-close btn-close-white align-self-start"
              onClick={handleCloseModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div id="journeyRegView" className="" ref={regularViewRef}>
              <div id="contentHeader" className="d-flex align-items-center">
                <h1>{journeyDetail.journey_name}</h1>
                <div
                  className="h5 ms-auto active-text"
                  onClick={handleEditView}
                >
                  <i className="bi bi-pencil-square"></i>
                  <span className="ms-2">編輯</span>
                </div>
              </div>
              <div
                id="journeyContainer"
                className="p-3 rounded shadow"
                style={journeyContainerStyle}
              >
                <CalendarView
                  calenderRef={calenderRef}
                  journeyDetail={journeyDetail}
                />
              </div>
              <div
                id="mapContainer"
                style={mapContainerStyle}
                className="mt-3 rounded shadow"
              ></div>

              <div className="h2 mt-3">備註</div>
              <div id="text-content" className="mt-3">
                {journeyDetail.description}
              </div>
              <div className="h2 mt-3">相片</div>
              <div
                id="imageContainer"
                className="mt-3 image-overflow rounded shadow"
                style={imageContainerStyle}
              >
                <img src="../images/street.jpg" alt="" className="h-100" />
              </div>
            </div>

            <form
              id="journeyEditView"
              style={{ display: "none" }}
              ref={editViewRef}
            >
              <div className="mb-3">
                <label htmlFor="#editJourneyTitle" className="form-label">
                  行程名稱
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editJourneyTitle"
                  defaultValue={journeyDetail.journey_name}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">行程表</label>
                <div
                  id="editJourneyContainer"
                  className="p-3 rounded shadow"
                  style={journeyContainerStyle}
                >
                  <CalendarEditView calendarEditRef={calendarEditRef} journeyDetail={journeyDetail} setJourneyDetail={setJourneyDetail}/>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="publicRadio" className="form-label">
                  公開設定
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="privacyRadio"
                    value="0"
                    id="publicRadio"
                  />
                  <label className="form-check-label" htmlFor="publicRadio">
                    公開
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="privacyRadio"
                    value="1"
                    id="privateRadio"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="privateRadio">
                    不公開
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="#editJourneyDescription" className="form-label">
                  備註
                </label>
                <textarea
                  className="form-control"
                  id="editJourneyDescription"
                  rows="3"
                  defaultValue={journeyDetail.description}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              返回
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRegView}
            >
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyModel;
