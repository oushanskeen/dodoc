import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {archiveTask, pinTask} from "../../../lib/redux";

export const PureTaskList = ({ loading, tasks, onPin, onArchive }) => {
  const events = { onPin, onArchive };

  return loading ? (
    <div>loading</div>
  ) : tasks.length === 0 ? (
    <div>empty</div>
  ) : (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPin: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
};

PureTaskList.defaultProps = {
  loading: false
};

export default connect(
  ({tasks}) => ({
    tasks: tasks.filter(t => t.state === "TASK_INBOX")
  }),
  dispatch => ({
    onArchive: id => dispatch(archiveTask(id)),
    onPin: id => dispatch(pinTask(id)),
  })
)(PureTaskList);
