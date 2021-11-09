import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Friend.css';



class Friend extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { friend, chat } = this.props;
        return (
        <div onClick={() => chat(friend)} className="Friend">
            <span>
                {friend.name}
            </span>
        </div>
        )
    }
  }

  // TODO: SR Extend this and use proper types.
  Friend.propTypes = {
    name: PropTypes.string
  };

  export default Friend;