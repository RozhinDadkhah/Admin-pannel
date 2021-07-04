import { Avatar } from '@material-ui/core'
import React from 'react'
import './User.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import TodayIcon from '@material-ui/icons/Today';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddBtn">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="useShowTop">
                        <Avatar className='userShowImg' />
                        <div className="userShowTitle">
                            <span className="userShowUserName">Rozhin</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowbottom">
                        <span className="userShowTitle">Acount Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">rozhinda</span>
                        </div>
                        <div className="userShowInfo">
                            <TodayIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">7/3/1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">rozhin@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input type="text" placeholder='rozhinda' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>FullName</label>
                                <input type="text" placeholder='rozhin dadkhah' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='rozhin@gmail.com' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <Avatar className='userUpdateImg' />
                                <label htmlFor='file'><PublishIcon className='userUpdateIcon' /></label>
                                <input type="file" id='file' style={{ display: 'none' }} />
                            </div>
                            <button className='userUpdateBtn'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
