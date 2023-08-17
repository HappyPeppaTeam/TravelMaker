import '../css/sidebar.css';
// import '../css/album.css';
import Sidebar from '../components/Sidebar';
import ImageUploadButton from '../components/ImageUploadButton';
import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import withAuthorization from '../hook/withAuthorization';
import { memberValidateField, registerFormValidate, calculatePasswordStrength, getPasswordStrengthLabel } from '../components/MemberValidation'


const { useEffect, useState } = React;
const MemberCenter = () => {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [nickName, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [originalPassword, setOriginalPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        originalPassword: '',
        newPassword: '',
        fullName: '',
        nickName: '',
        birthday: '',
        gender: '',
    });
    const [passwordStrength, setPasswordStrength] = useState(0);
    useEffect(() => {
        getProfile();
    }, []);

    const handleBlur = (event) => {
        const { id, value } = event.target;
        const errorMessage = memberValidateField(id, value, originalPassword)
        setErrors({
            ...errors,
            [id]: errorMessage,
        });
        if (id === 'originalPassword') {
            console.log('strength'+originalPassword);
            const strength = calculatePasswordStrength(originalPassword);
            setPasswordStrength(strength);
        }
    };

    const handleOriginalPasswordChange = (event) => {
        setOriginalPassword(event.target.value);
        setShowConfirmPassword(true);
        const strength = calculatePasswordStrength(originalPassword);
        setPasswordStrength(strength);
    };

    // 處理新密碼變更事件
    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleClearPassword = () => {
        setOriginalPassword('');
    };
    const handleImageSelect = async (file) => {
        // 在這裡處理所選的圖片，您可以上傳圖片到伺服器或進行其他操作。
        setSelectedImage(URL.createObjectURL(file));
        console.log('所選圖片：', file);
        const formData = new FormData();
        formData.append('image', file);
        formData.append('token', Cookies.get('token'));

        try {
            const response = await fetch('http://localhost/TravelMaker/Backend/public/api/updateProfileImage', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log('上傳結果：', data);
        } catch (error) {
            console.error('上傳失敗：', error);
        }
    };

    const getProfile = async () => {
        let data = {}
        data['token'] = Cookies.get('token')
        try {
            const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/profile', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            if (!response.status === 200) {
                throw new Error('Network response was not ok');
            }
            console.log('Response from backend:', response.data[0]);
            setUsername(response.data[0].user_name)
            setOriginalPassword(response.data[0].password)
            setFullName(response.data[0].full_name)
            setNickName(response.data[0].nick_name)
            setEmail(response.data[0].email)
            setBirthday(response.data[0].birthday)
            setGender(response.data[0].gender)
            //檢查user有無頭像，如無使用預設
            if (response.data[0].head_photo !== "/storage/") {
                setSelectedImage("http://localhost/TravelMaker/Backend/public" + response.data[0].head_photo)
            } else {
                setSelectedImage("https://bootdey.com/img/Content/avatar/avatar7.png")
            }
            console.log(response.data[0].head_photo);
        } catch (error) {
            // Handle error, if any
            console.error(error);
        }
    }

    const updateProfileData = async () => {
        const userData = new FormData();
        userData.append('nick_name', nickName);
        userData.append('email', email);
        userData.append('birthday', birthday);
        userData.append('gender', gender);
        userData.append('token', Cookies.get('token'));
        const userDataValidate = new FormData();
        if (showConfirmPassword) {
            userData.append("password", originalPassword);
            userDataValidate.append("password", originalPassword);
            userDataValidate.append("confirmPassword", newPassword);
            userDataValidate.append("from", 'userDataValidate');
        }
        if (registerFormValidate(userData)&&registerFormValidate(userDataValidate)) {
            try {

                const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/updateProfile', userData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                if (!response.status === 200) {
                    throw new Error('Network response was not ok');
                }
                const data = response.data.message;
                // Handle the response from the backend, if needed
                console.log('Response from backend:', data);
                setRegisterError(<span style={{ color: 'green' }}>修改成功</span>);
            } catch (error) {
                // Handle error, if any
                console.error(error);
            }
        } else {
            setRegisterError('請檢查資料是否輸入正確');
        }
    }

    return (
        <>
            <div className="container-fluid shadow p-0 bg-white" id="body-container">
                <div className="d-flex flex-nowrap row" id="content-container">
                    {/* side bar */}
                    <Sidebar></Sidebar>
                    {/* main content */}
                    <div className="flex-fill" id="content">
                        <section className="bg-light">
                            <div className="container">
                                <h1 className="row">會員基本資料</h1>
                                <div className="row">
                                    <div className="col-lg-12 mb-4 mb-sm-5">
                                        <div className="card card-style1 border-0">
                                            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                                <div className="row align-items-center">
                                                    <div className="d-lg-inline-block  justify-content-between align-items-center p-4 rounded">
                                                        <div className="mr-3 mb-3">
                                                            {selectedImage && <img src={selectedImage} alt="所選圖片" style={{ width: '200px', height: '300px', objectFit: "contain" }} />}
                                                            <ImageUploadButton onImageSelect={handleImageSelect} />
                                                        </div>
                                                        <div>
                                                            <h3 className="bg-secondary h2 text-white mb-0">會員姓名：{fullName}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4 mb-lg-0">

                                                        {/* Add member details here */}


                                                    </div>
                                                    <ul className="list-unstyled mb-1-9">
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">會員暱稱：</span>
                                                                <input type="text" className="form-control"
                                                                    id="nickName"
                                                                    value={nickName}
                                                                    onChange={(e) => setNickName(e.target.value)}
                                                                    onBlur={handleBlur} />
                                                            </div>
                                                        </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">會員帳號</span>
                                                                <input type="text" className="form-control" id="username" disabled value={username} />
                                                            </div>
                                                        </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">論壇身份</span>
                                                                <input type="text" className="form-control" id="username" disabled value="普通" />
                                                            </div>
                                                        </li>

                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">會員密碼</span>
                                                                <input type="password" className="form-control"
                                                                    id="originalPassword"
                                                                    value={originalPassword}
                                                                    onChange={handleOriginalPasswordChange}
                                                                    onBlur={handleBlur}
                                                                    onClick={handleClearPassword}
                                                                     />
                                                                <div className="mx-3">密碼強度：{getPasswordStrengthLabel(passwordStrength)}</div>

                                                            </div>
                                                            <div className="error-message text-danger">{errors.originalPassword}</div>
                                                        </li>
                                                        {showConfirmPassword && (
                                                            <li className="mb-2 mb-xl-3 display-28">
                                                                <div className="input-group mb-3">
                                                                    <span className="input-group-text" id="basic-addon1">確認新密碼</span>
                                                                    <input type="password" className="form-control"
                                                                        id="newPassword"
                                                                        value={newPassword}
                                                                        onChange={handleNewPasswordChange}
                                                                        onBlur={handleBlur} />
                                                                </div>
                                                                <div className="error-message text-danger">{errors.newPassword}</div>
                                                            </li>
                                                        )}
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">電子郵件</span>
                                                                <input type="text" className="form-control"
                                                                    id="email"
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    onBlur={handleBlur} />
                                                            </div>
                                                            <div className="error-message text-danger">{errors.email}</div>
                                                        </li>

                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">生日</span>
                                                                <input type="date" className="form-control"
                                                                    id="birthday"
                                                                    placeholder="birthday" aria-label="birthday" aria-describedby="basic-addon1"
                                                                    value={birthday}
                                                                    onChange={(e) => setBirthday(e.target.value)}
                                                                    onBlur={handleBlur} />
                                                            </div>
                                                            <div className="error-message text-danger">{errors.birthday}</div>
                                                        </li>
                                                        <li className="display-28">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">性別</span>
                                                                <select className="form-select" name="gender" id="gender"
                                                                    aria-label="Default select example"
                                                                    value={gender}
                                                                    onChange={(e) => setGender(e.target.value)}
                                                                    onBlur={handleBlur}>
                                                                    <option value="">選取性別</option>
                                                                    <option value="1">男</option>
                                                                    <option value="2">女</option>
                                                                    <option value="3">其他</option>
                                                                </select>
                                                            </div>
                                                            <div className="error-message text-danger">{errors.gender}</div>
                                                        </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <button className="btn btn-danger" onClick={updateProfileData}>修改資料</button>
                                                            <div className="error-message text-danger">{registerError}</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-progress progress progress-medium" style={{ height: '4px' }}>
                                        <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '60%' }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withAuthorization(['user'])(MemberCenter);;