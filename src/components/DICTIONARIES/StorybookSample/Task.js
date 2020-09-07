import React from "react";
import PropTypes from "prop-types";

const Task = ({task:{id, title, state}, onArchive, onPin}) => (
  <div>state:{state} . title:{title} . 
  { state !== "TASK_ARCHIVED" &&
    <span onClick={() => onPin(id)}>notPinned</span>
  }
  </div>
);
export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchive: PropTypes.func,
  onPin: PropTypes.func
};
