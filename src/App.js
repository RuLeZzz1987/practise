import React, {Component} from 'react';
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import TodoList from "./components/TodoList/TodoList";
import shortid from 'shortid';

class App extends Component {

    state = {
        todos: [],
        filter: ''
    };

    saveTodo = ({name, priority}) => {
        const todo = {
            name,
            priority,
            done: false,
            id: shortid.generate()
        };

        this.setState(state => ({
            todos: state.todos.concat(todo)
        }));
    };

    handleDoneChange = (id) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                return todo.id === id ? ({...todo, done: !todo.done}) : todo
            })
        }));
    };

    handlePriorityChange = (id, priority) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                return todo.id === id ? ({...todo, priority}) : todo
            })
        }));
    };

    handleFilterChange = (e) => {
        this.setState({
            filter: e.target.value
        })
    };

    handleRemove = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    };

    applyFilter() {
        return this.state.todos.filter(todo => todo.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }

    render() {
        const visibleTodos = this.applyFilter();

        return (
            <div>
                <TodoEditor saveTodo={this.saveTodo}/>
                <hr/>
                <TodoFilter
                    filter={this.state.filter}
                    handleFilterChange={this.handleFilterChange}
                />
                <hr/>
                <TodoList
                    todos={visibleTodos}
                    handleDoneChange={this.handleDoneChange}
                    handlePriorityChange={this.handlePriorityChange}
                    handleRemove={this.handleRemove}
                />
            </div>
        );
    }
}

export default App;
