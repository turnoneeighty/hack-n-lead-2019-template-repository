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

const CarbonFootprint = ({ number }) => {
    return (
        <div className="ui grid">
            <div className="eight wide column">
                {
                    renderColourCircle(number)
                }
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