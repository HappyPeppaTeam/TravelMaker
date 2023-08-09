import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withAuthorization from '../hook/withAuthorization';

// 使用狀態來管理會員資料列表


const Admin = () => {
    const [members, setMembers] = useState([]);
    const [newStatus, setNewStatus] = useState({});
    

    const handleStatusChange = (userId, newStatusValue) => {
        const newStatusInt = parseInt(newStatusValue, 10);
        setNewStatus(prevStatuses => ({
            ...prevStatuses,
            [userId]: newStatusInt,
        }));
    };

    

    const handleSaveStatusChanges = async userId => {
        try {
            const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/updateUserStatus', {
                userId: userId,
                newStatus: newStatus[userId],
            });

            // Handle success
        } catch (error) {
            // Handle error
        }
    };

    // 假設初始的會員資料列表
    const getUsersDataFromApi = async () => {
        try {
            const initialMembers = await axios.get('http://localhost/TravelMaker/Backend/public/api/getAllProfileData', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMembers(initialMembers.data);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // Handle rate limiting by waiting and then retrying
                await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
                getUsersDataFromApi(); // Retry the request
            } else {
                console.error('Error fetching data:', error);
            }
        }
    };
    const mapUserGender = statusGender => {
        switch (statusGender) {
            case "1":
                return '男';
            case "2":
                return '女';
            case "3":
                return '其他';
            default:
                return '';
        }
    };
    useEffect(() => {
        getUsersDataFromApi();
        document.title = 'TravelMaker Admin'
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">會員資料管理</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>帳號</th>
                        <th>姓名</th>
                        <th>暱稱</th>
                        <th>會員狀態</th>
                        <th>email</th>
                        <th>性別</th>
                        <th>生日</th>
                        <th>註冊時間</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr key={member.user_id}>
                            <td>{member.user_id}</td>
                            <td>{member.user_name}</td>
                            <td>{member.full_name}</td>
                            <td>{member.nick_name}</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <select
                                        className="p-1"
                                        value={newStatus[member.user_id] || member.user_status}
                                        onChange={e => handleStatusChange(member.user_id, e.target.value)}
                                    >
                                        <option value={1}>普通</option>
                                        <option value={2}>版主</option>
                                        <option value={3}>禁用</option>
                                    </select>
                                    <button
                                        className="btn btn-primary p-1 ms-2"
                                        onClick={() => handleSaveStatusChanges(member.user_id)}
                                    >
                                        更換狀態
    </button>
                                </div>
                            </td>

                            <td>{member.email}</td>
                            <td>{mapUserGender(member.gender)}</td>
                            <td>{member.birthday}</td>
                            <td>{member.register_time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default withAuthorization(['admin'])(Admin);
