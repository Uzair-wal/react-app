import React from 'react';

export const TodoForm = (props) => (
    <form>
      <input type="text" onChange={props.handleInputChange} value={props.currentTodo} />
    </form>
);


TodoForm.propTypes = {
  currentTodo: React.PropTypes.string,
  handleInputChange: React.PropTypes.func.isRequired
};