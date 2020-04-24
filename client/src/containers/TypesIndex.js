import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTypes } from '../actions/index';
import TypeItem from '../components/TypeItem';

class TypesIndex extends Component {
  componentDidMount = () => {
    this.props.fetchTypes()
  }

  renderTypes = () => {
    const { types } = this.props
    if (types.length !== 0) {
      return types[0].map(type => {
        return <TypeItem key={type.id} type={type} />
      })
    } else {
      return <div> ...Loading </div>
    }
  }

  render() {

    return (
      <div className="">
        <div className="container">
          <h4 className="types-heading">Job Search Activity Types</h4>
          <h6>Click on a type to learn more</h6>
        </div>
        <div>
          {this.renderTypes()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    types: state.types
  };
}

export default connect(mapStateToProps, { fetchTypes })(TypesIndex);