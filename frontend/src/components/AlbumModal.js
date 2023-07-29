import Slider from '../components/Slick';
import { useEffect } from 'react';


function AlbumModal({ closeAlbumModal, albumData }) {
    const data = [
        {
          url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        },
        {
          url:"https://images.unsplash.com/photo-1689644917165-77ac0b422fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          url:"https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        },
        {
          url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        },
        {
          url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        },
        {
          url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        },
        {
          url:"https://images.unsplash.com/photo-1689350098247-5e02f4106cad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
      ];

    const settings = {
        
        customPaging: (i) => {
            return (
              <a>
                <img className='w-100 h-100' src={data[i].url}/>
              </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    useEffect(() => {
      console.log(albumData);
    },[albumData])
    const renderContent = data.map((item,index) => (
        <div className='wrap' key={index}>
            <img src={item.url}></img>
        </div>
    ));

    return (
        <>
            <div className="modal fade" id="albumModal" tabIndex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-2" id="exampleModalLabel">{albumData.album_name}</h1>
                            <button type="button" className="btn-close" aria-label="Close" onClick={closeAlbumModal}></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-end'>
                                <button type="button" className="btn btn-outline-secondary">編輯</button>
                            </div>
                            <Slider settings={settings} renderContent={renderContent}></Slider>
                            <h2 className='fs-4 mb-3'>分類 : <span className="badge rounded-pill bg-warning text-dark">{albumData.tag}</span></h2>
                            <h2 className='fs-4'>備註 :</h2>
                            <p>{albumData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlbumModal;