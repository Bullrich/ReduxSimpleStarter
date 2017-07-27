# Integrating Third Party Libraries

[Lesson](https://www.udemy.com/react-redux/learn/v4/t/lecture/5691866?start=0)

### Google Maps in this example

**The script tag importing google maps should already be in the html**

##### google_map.js
```js
import React, {Component} from 'react';

export default class extends Component {
    shouldComponentUpdate() {
        // hardcoded, I don't allow the component to render itself
        return false;
    }
    
    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 8
        });
    }
    
    render() {
        return (
            <div id="map id-for-the-css" ref="map" />
        );
    }
}
```

##### app.js
```js
import React, {Component} from 'react';
import GoogleMap from './google_map';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div style={{height: '100%'}}>
              Map me!
              <GoogleMap lat={-34.397} lng={150.644}/>
            </div>
        );
    }
}
```