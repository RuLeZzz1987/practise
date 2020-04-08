import React from 'react';
import T from 'prop-types';
import PrioritySelect from '../PrioritySelect/PrioritySelect';

const TodoItem = ({ todo, handleDoneChange, handlePriorityChange, handleRemove }) => (
  <div>
    <p>{todo.name}</p>
    <div>
      <PrioritySelect
        priority={todo.priority}
        label="Priority: "
        onChange={value => handlePriorityChange(todo.id, value)}
      />
    </div>
    <div>
      <label>
        Mark as done:
        <input type="checkbox" checked={todo.done} onChange={handleDoneChange} />
      </label>
    </div>
    <div>
      <button type="button" onClick={handleRemove}>
        Remove Todo
      </button>
    </div>
  </div>
);

TodoItem.propTypes = {
  todo: T.exact({
    id: T.string.isRequired,
    name: T.string.isRequired,
    priority: T.string.isRequired,
    done: T.bool.isRequired,
  }).isRequired,
  handleDoneChange: T.func.isRequired,
  handlePriorityChange: T.func.isRequired,
  handleRemove: T.func.isRequired,
};

export default TodoItem;
