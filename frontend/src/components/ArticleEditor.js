// import React, { useState } from 'react';
// import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import axios from 'axios'; // 导入Axios

// const ArticleEditor = () => {
//     const [editorData, setEditorData] = useState('<p>Hello from CKEditor 5!</p>');

//     const handleEditorReady = (editor) => {
//         console.log('Editor is ready to use!', editor);
//     };

//     const handleEditorChange = (event, editor) => {
//         const data = editor.getData();
//         console.log({ event, editor, data });
//         setEditorData(data);
//     };

//     const handleEditorBlur = (event, editor) => {
//         console.log('Blur.', editor);
//     };

//     const handleEditorFocus = (event, editor) => {
//         console.log('Focus.', editor);
//     };

//     const handleImageUpload = async (editor) => {
//         const input = document.createElement('input');
//         input.type = 'file';
//         input.accept = 'image/*';
//         input.click();

//         input.addEventListener('change', async () => {
//             const file = input.files[0];
            
//             if (file) {
//                 const formData = new FormData();
//                 formData.append('image', file);

//                 try {
//                     const response = await axios.post('/http://localhost/TravelMaker/Backend/public/api/postimgurl', formData); // 替换为你的图片上传URL
//                     const imageUrl = response.data.imageUrl; // 根据你的服务器返回结构获取图片URL
                    
//                     editor.model.change(writer => {
//                         const imageElement = writer.createElement('image', {
//                             src: imageUrl
//                         });

//                         editor.model.insertContent(imageElement, editor.model.document.selection);
//                     });
//                 } catch (error) {
//                     console.error('Image upload error:', error);
//                 }
//             }
//         });
//     };

//     return (
//         <div className="ArticleEditor">
//             <h2>Using CKEditor 5 from online builder in React</h2>
//             <CKEditor
//                 editor={Editor}
//                 data={editorData}
//                 onReady={handleEditorReady}
//                 onChange={handleEditorChange}
//                 onBlur={handleEditorBlur}
//                 onFocus={handleEditorFocus}
//             />
//         </div>
//     );
// };

// export default ArticleEditor;
