import React from "react"

class Map extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "world.js";
        script.type = "text/babel"
        this.div.appendChild(script);
    }

    render() {
        return (
            <div ref={el => (this.div = el)}>
            </div>
        );
    }
}

export default Map;