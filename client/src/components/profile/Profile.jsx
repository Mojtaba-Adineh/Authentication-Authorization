import React from 'react';
import "./profile.scss";

const Profile = () => {
    return (
        <div className='profile'>
            <p>you are logged in as <span> {JSON.parse(localStorage.getItem("email"))}</span></p>
        </div>
    );
};

export default Profile;