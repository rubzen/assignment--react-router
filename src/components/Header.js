import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h2>{this.props.headerTitle || ''}</h2>
      </header>

    )
  }
}

export default Header
