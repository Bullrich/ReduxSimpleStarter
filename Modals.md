# Modal

[Lesson](https://www.udemy.com/react-redux/learn/v4/t/lecture/5691856?start=0)

 ### components/modal.js
 ```js
 import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from '../index';
import {Provider} from 'react-redux';

class Modal extends Component {
  
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }
  
  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
  }
  
  componentWillUdate() {
    this._render();
  }
  
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }
  
  render(){
    return <noscript/>;
  }
}

export default Modal;
```
 
```css
body .modal {
  position: fixed;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  display: block;
}
```
 
## How to call it
```js
  <Modal>
    <h3>Header!!</h3>
    <p>This is a text</p>
  </Modal>
```