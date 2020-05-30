import React from "react";
import { Switch, Route } from "react-router-dom";
import Slider from '../Slider';

class SlideOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childPosition: Slider.CENTER,
      curChild: props.children,
      curUniqId: props.uniqId,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;

    if (prevUniqId !== uniqId) {
      let pos
      if (uniqId === '/') {
        if (prevUniqId === '/about') pos = Slider.TO_LEFT
        else if (prevUniqId === '/projects') pos = Slider.TO_UP
        else if (prevUniqId === '/contact') pos = Slider.TO_RIGHT
        else if (prevUniqId === '/cv') pos = Slider.TO_DOWN
      }
      if (uniqId === '/about') pos = Slider.TO_RIGHT
      if (uniqId === '/projects') pos = Slider.TO_DOWN
      if (uniqId === '/contact') pos = Slider.TO_LEFT
      if (uniqId === '/cv') pos = Slider.TO_UP
      this.setState({
        childPosition: pos,
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: () => this.swapChildren(prevProps)
      });
    }
  }

  swapChildren = (prevProps, prevState) => {
    const uniqId = this.props.uniqKey || this.props.children.type;
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    let position
    if (uniqId === '/contact') position = Slider.FROM_RIGHT
    if (uniqId === '/about') position = Slider.FROM_LEFT
    if (uniqId === '/projects') position = Slider.FROM_UP
    if (uniqId === '/cv') position = Slider.FROM_DOWN
    if (uniqId === '/') {
      if (prevUniqId === '/about') position = Slider.FROM_RIGHT
      else if (prevUniqId === '/projects') position = Slider.FROM_DOWN
      else if (prevUniqId === '/contact') position = Slider.FROM_LEFT
      else if (prevUniqId === '/cv') position = Slider.FROM_UP
    }

    this.setState({
      childPosition: position,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    });  
  };

  render() {
    return (
      <Slider
        position={this.state.childPosition}
        animationCallback={this.state.animationCallback}
      >
        {this.state.prevChild || this.state.curChild}
      </Slider>
    );
  }
}

const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  updateStep,
  children
}) => (
  <Route
    render={({ location }) => (
      <AnimatorComponent uniqKey={location.pathname} updateStep={updateStep}>
        <CustomSwitch location={location}>{children}</CustomSwitch>
      </AnimatorComponent>
    )}
  />
);

const SwitchWithSlide = animateSwitch(Switch, SlideOut);

export default SwitchWithSlide;
