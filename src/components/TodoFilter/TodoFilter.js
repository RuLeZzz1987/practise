import React from 'react';
import T from 'prop-types';

const TodoFilter = ({filter, handleFilterChange}) => (
    <div>
        <label>
            Todo Filter:
            <input value={filter} onChange={handleFilterChange}/>
        </label>
    </div>
);

TodoFilter.propTypes = {
    filter: T.string.isRequired,
    handleFilterChange: T.func.isRequired
};

export default TodoFilter;