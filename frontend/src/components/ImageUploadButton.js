import React, { useRef } from 'react';

const ImageUploadButton = ({ onImageSelect }) => {
  const inputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleImageSelect}
      />
      <button onClick={() => inputRef.current.click()}>選擇圖片</button>
    </div>
  );
};

export default ImageUploadButton;
