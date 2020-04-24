import React, { Component } from 'react';

class TypeItem extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: false
    }
  }
  
  onClick = () => {
    this.setState({showDescription: !this.state.showDescription});
  }
    
  render() {
    const { type } = this.props
    const showHide = {
      'display': this.state.showDescription ? 'block' : 'none'
    };
    return (
      <div className="type-box container">
        <div className="col-sm-4 type-items">
          <button className="btn btn-secondary" onClick={this.onClick}>{type.name}</button>
        </div>
        <div className="col-sm-8 type-description" style={showHide}>
          {type.description}
        </div>
      </div>
    );
  }
}

export default TypeItem;