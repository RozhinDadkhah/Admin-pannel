import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topbarLeft'>
                    <span className='logo'>Admin Panel</span>
                </div>
                <div className='topbarRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNoneIcon />
                        <span className='topiconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <LanguageIcon />
                        <span className='topiconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <SettingsIcon />
                        <span className='topiconBag'>2</span>
                    </div>
                    <Avatar className='avatar'/>
                </div>
            </div>
        </div>
    )
}
