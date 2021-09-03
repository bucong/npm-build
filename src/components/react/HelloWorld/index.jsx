import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.less";

import {hello} from '../../../utils/index'

function HelloWorld(props) {

  return (
    <div className="hello">
      <h3 className="title">{props.msg}</h3>
      <button onClick={hello}>hello</button>
    </div>
  );
}
HelloWorld.propTypes = {
  msg: PropTypes.string
};
HelloWorld.defaultProps = {
  msg:'hello world'
};
export default HelloWorld;
