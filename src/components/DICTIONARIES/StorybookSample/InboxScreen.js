import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PureTaskList from "./TaskList";

export const PureInboxScreen = ({error}) => {
  return (
    error ? (
      <div>Something went wrong</div>
    ):(
      <>
        <div>Taskbox</div>
        <PureTaskList />
      </>
    )
  );
};

PureInboxScreen.propTypes = {
  error: PropTypes.string,
};
PureInboxScreen.defaulProps = {
  error: null
};

export default connect(({error}) => ({error}))(PureInboxScreen)
