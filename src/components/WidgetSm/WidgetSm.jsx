import React from 'react'
import './Widget.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Avatar } from '@material-ui/core';

export default function WidgetSm() {
    return (
        <div className='WidgetSm'>
            <span className="widgetSmTitle">New join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <Avatar />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rozhin dadkhah</span>
                        <span className="widgetSmJobTitle">IT Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <Avatar />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rozhin dadkhah</span>
                        <span className="widgetSmJobTitle">IT Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li><li className="widgetSmListItem">
                    <Avatar />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rozhin dadkhah</span>
                        <span className="widgetSmJobTitle">IT Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li><li className="widgetSmListItem">
                    <Avatar />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rozhin dadkhah</span>
                        <span className="widgetSmJobTitle">IT Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
