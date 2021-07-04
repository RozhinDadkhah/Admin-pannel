import React from 'react'
import './Home.css'
import FeatureInfo from '../../featureInfo/FeatureInfo'
import { userData } from '../../../data'
import Chart from '../../chart/Chart'
import WidgetSm from '../../WidgetSm/WidgetSm'
import WidgetLg from '../../WidgetLg/WidgetLg'

export default function Home() {
    return (
        <div className='home'>
            <FeatureInfo />
            <Chart data={userData} title='User Analyrics' grid dataKey="Active User" />
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg />
            </div>
        </div>
    )
}
