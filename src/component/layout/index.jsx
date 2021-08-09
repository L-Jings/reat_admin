import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <div id="wrapper">
        test layout
        {/* <TopNav />
        <SideNav /> */}
        {this.props.children}
      </div>
    );
  }
}
