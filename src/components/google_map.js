import React, { Component} from 'react';

class GoogleMap extends Component{

    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom:12,
            centre: {
                lag: this.props.lat,
                lng: this.props.lon
            }


        });
        console.log("lat:",this.props.lat);
        console.log("lon:",this.props.lon);
    }

    render(){
        // this.refs.map gives a reference to THIS object
        return <div ref="map"/>;
    }
}

export default GoogleMap;