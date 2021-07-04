import { Avatar } from '@material-ui/core'
import React from 'react'
import './WidgetLg.css'

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={`widgetBtn ${type}`} >{type}</ button>
    }

    return (
        <div className='WidgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="wigitLgTr">
                    <th className="widgitLgTh">Customer</th>
                    <th className="widgitLgTh">Date</th>
                    <th className="widgitLgTh">Amount</th>
                    <th className="widgitLgTh">Status</th>
                </tr>
                <tr className="wigitLgTr">
                    <td className="widgetLgUser">
                        <Avatar />
                        <span className="widgetLgName">Armin</span>
                    </td>
                    <td className="widgitLgDate">2 June 2021</td>
                    <td className="widgitLgAmount">$122.08</td>
                    <td className="widgitLgStatus"><Button type='Approved' /></td>
                </tr>
                <tr className="wigitLgTr">
                    <td className="widgetLgUser">
                        <Avatar/>
                        <span className="widgetLgName">Armin</span>
                    </td>
                    <td className="widgitLgDate">2 June 2021</td>
                    <td className="widgitLgAmount">$122.08</td>
                    <td className="widgitLgStatus"><Button type='Declined' /></td>
                </tr>
                <tr className="wigitLgTr">
                    <td className="widgetLgUser">
                        <Avatar />
                        <span className="widgetLgName">Armin</span>
                    </td>
                    <td className="widgitLgDate">2 June 2021</td>
                    <td className="widgitLgAmount">$122.08</td>
                    <td className="widgitLgStatus"><Button type='Pending' /></td>
                </tr>
            </table>
        </div>
    )
}
