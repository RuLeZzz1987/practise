import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import T from 'prop-types';

const TodoList = ({todos, handleDoneChange, handlePriorityChange, handleRemove}) => (
    todos.length > 0 && <ul>
        {todos.map(todo =>
            <li key={todo.id}>
                <TodoItem
                    todo={todo}
                    handleDoneChange={() => handleDoneChange(todo.id)}
                    handleRemove={() => handleRemove(todo.id)}
                    handlePriorityChange={handlePriorityChange}
                />
            </li>
        )}
    </ul>
);

TodoList.propTypes = {
    todos: T.arrayOf(T.shape({
        id: T.string.isRequired
    })).isRequired,
    handleDoneChange: T.func.isRequired,
    handlePriorityChange: T.func.isRequired,
    handleRemove: T.func.isRequired
};

export default TodoList;