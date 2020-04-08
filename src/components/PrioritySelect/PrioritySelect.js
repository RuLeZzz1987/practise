import React from 'react';
import Priorities from '../../utils/Priorities';
import T from 'prop-types';

const PrioritySelect = ({ label, priority, onChange }) => (
  <label>
    {label}:
    <select value={priority} onChange={e => onChange(e.target.value)}>
      <option value={Priorities.LOW}>Low</option>
      <option value={Priorities.NORMAL}>normal</option>
      <option value={Priorities.HIGH}>high</option>
    </select>
  </label>
);

PrioritySelect.propTypes = {
  label: T.string.isRequired,
  priority: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default PrioritySelect;
