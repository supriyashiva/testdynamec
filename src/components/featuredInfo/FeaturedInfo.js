import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import React, { useEffect, useState } from 'react'


export default function FeaturedInfo({ details }) {

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Running Hours</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{details.runningHours}</span>
                    <span className="featuredMoneyRate">
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredCenterItem">
                <span className="featuredTitle">Water Pumped</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{details.waterPumped}</span>
                    <span className="featuredMoneyRate">
                        <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Energy Generated</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{details.energyGenerated}</span>
                    <span className="featuredMoneyRate">
                        <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredCenterItem">
                <span className="featuredTitle">Device State</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">On :
                    </span>
                    <span className="featuredMoneyRate">
                        5
                    </span>
                    <span className="featuredMoney">Off :
                    </span>
                    <span className="featuredMoneyRate">
                        2
                    </span>
                </div>
            </div>
        </div>
    );
}