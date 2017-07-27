# React animation

### Component
```jsx
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

    render(){
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

     return(
        <div>
          <ul>
            <ReactCSSTransitionGroup {...transitionOptions}>
            {this.renderElements()}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      );
    }
```

### Style.css
```css
li {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* starting state of animation */
.fade-enter {
  right: 100px;
  opacity: 0;
  /* alternative
  transform: rotateX(90deg) rotateZ(90deg);
  */
}

/* end state of animation */
.fade-enter-active {
  right: 0px;
  transition: .5s ease-in all;
  opacity: 1;
  /*
  transform: rotateX(0deg) rotateZ(0deg);
  */
}

.fade-leave {
  right: 0px;
}

.fade-leave-active {
  right: -100px;
  transition: .5s ease-out all;
}