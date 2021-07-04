import React from 'react'
import './FeatureInfo.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function FeatureInfo() {
    return (
        <div className='feature'>
            <div className="featureItem">
                <span className="featureTitle">Revanue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,458</span>
                    <span className="featureMoneyRate">
                        $-14,623
                        <ArrowDownwardIcon className='featureIcon negative' />
                    </span>
                </div>
                <span className="featureSub">Compared tp last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$5,48</span>
                    <span className="featureMoneyRate">
                        $-1,3
                        <ArrowDownwardIcon className='featureIcon negative' />
                    </span>
                </div>
                <span className="featureSub">Compared tp last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,86</span>
                    <span className="featureMoneyRate">
                        $+2,3
                        <ArrowUpwardIcon className='featureIcon' />
                    </span>
                </div>
                <span className="featureSub">Compared tp last month</span>
            </div>
        </div>
    )
}
