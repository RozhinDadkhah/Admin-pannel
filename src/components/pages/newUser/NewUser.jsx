import React from 'react'
import './NewUser.css'


export default function NewUser() {
    return (
        <div className='newuser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>User Name</label>
                    <input type="text" placeholder='rozhin' />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='rozhin dadkhah' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='rozhin@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='Male' />
                        <label for='male'>Male</label>
                        <input type="radio" name='gender' id='female' value='Female' />
                        <label for='female'>Female</label>
                        <input type="radio" name='gender' id='other' value='Other' />
                        <label for='other'>Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Avtive</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className='newUserBtn'>Create</button>
            </form>
        </div>
    )
}
