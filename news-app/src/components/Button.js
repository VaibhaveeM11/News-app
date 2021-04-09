import React from 'react';
import { connect } from 'react-redux';
import getNews from '../action/index';

let Button = () => {
  return (
    <div>
        <button onClick={getNews}> Click to view news </button>
    </div>
  );
}
const mapDispatchToProps = {
    getNews:getNews
}
Button = connect(null,mapDispatchToProps)(Button);

export default Button;
