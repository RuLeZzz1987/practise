import React, { Component } from 'react';
import T from 'prop-types';
import PrioritySelect from '../PrioritySelect/PrioritySelect';

class TodoEditor extends Component {
  static propTypes = {
    saveTodo: T.func.isRequired,
  };

  state = {
    name: '',
    priority: 'low',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveTodo({ ...this.state });
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      priority: 'low',
    });
  }

  changePriority = value => {
    this.setState({
      priority: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            What to do:
            <input name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <PrioritySelect priority={this.state.priority} label={'Priority: '} onChange={this.changePriority} />
        </div>
        <button type="submit">Create Todo</button>
      </form>
    );
  }
}

export default TodoEditor;
