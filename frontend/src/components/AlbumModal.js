import axios from 'axios';
import Slider from '../components/Slick';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

function AlbumModal({ closeAlbumModal, albumData }) {
  const settings = {
    customPaging: (i) => {
      return (
        <a>
          <img
            className="w-100 h-100"
            src={`http://localhost/TravelMaker/Backend/public/storage/${albumData.photos[i].image_url}`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderContent = albumData.photos
    ? albumData.photos.map((album) => (
        <div className="wrap" key={album.image_id}>
          <img
            src={`http://localhost/TravelMaker/Backend/public/storage/${album.image_url}`}
            alt={album.image_name}
          />
        </div>
      ))
    : null;

  const deleteAlbum = async (e) => {
    const albumId = e.target.dataset.id;
    const token = Cookies.get('token');
    Swal.fire({
      title: `是否要刪除相簿「${albumData.album_name}」?`,
      text: '確認刪除後將無法進行復原!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#298f60',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center-center',
          icon: 'success',
          title: `已成功刪除相簿「${albumData.album_name}」!`,
          showConfirmButton: false,
          timer: 2000,
        });
        await axios.delete(
          `http://localhost/TravelMaker/Backend/public/api/albums/${token}/${albumId}`
        );
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  return (
    <>
      <div className="modal fade" id="albumModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-2" id="exampleModalLabel">
                {albumData.album_name}
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeAlbumModal}
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-end">
                <Link
                  to="/album/edit"
                  className="btn btn-outline-secondary"
                  state={albumData}
                  onClick={closeAlbumModal}
                >
                  編輯
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-danger ms-2"
                  data-id={albumData.album_id}
                  onClick={deleteAlbum}
                >
                  刪除相簿
                </button>
              </div>
              <Slider
                settings={settings}
                renderContent={renderContent}
              ></Slider>
              <h2 className="fs-4 mb-3">
                分類 :{' '}
                <span className="badge rounded-pill bg-warning text-dark">
                  {albumData.tag}
                </span>
              </h2>
              <h2 className="fs-4">備註 :</h2>
              <p>{albumData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumModal;
