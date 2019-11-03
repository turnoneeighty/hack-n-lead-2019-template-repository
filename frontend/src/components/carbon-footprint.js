import React from "react"
import "../../src/app.css"

function renderColourCircle(number) {
    if (number > 65) {
        return <div className="circle-red"></div>
    } else if (number < 65 && number > 35) {
        return <div className="circle-yellow"></div>
    } else {
        return <div className="circle-green"></div>
    }
}

const CarbonFootprint = ({ number, imageUrl}) => {
    return (
        <div className="item">
            <div className="item-col-left">
                <img src={imageUrl} alt="Classic Jumpsuit"/>
            </div>

            <div class="item-col-right">
                <img class="item-logo" src="img/logo-hm.png" alt="Classic Jumpsuit" />
                <span class="item-title">Casual Jumpsuit</span>
                <span class="item-recommend">
                    {
                        renderColourCircle(number)
                    }
                </span>
            </div>

            <div className="eight wide column">
                <div className="center-container" >
                    <div>

                        {number}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarbonFootprint