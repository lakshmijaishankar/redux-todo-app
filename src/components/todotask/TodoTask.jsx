import React, { PureComponent } from 'react';
import Input from '../inputbox/Input';
import { connect } from 'react-redux';
import { MdOutlinePostAdd } from "react-icons/md";
import { addNewtodoAction } from '../../redux/actions/addTodoActions';
import '../../styles/modules/inputcheckbox.module.scss';
import { markHasAllChecked } from '../../redux/actions/markHasAllChecked';

class TodoTask extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            todoTask: "",
            // checked: false,
            todoId: 0,
            markedHasChecked: false,
        }
        this.handleTodoInputField = this.handleTodoInputField.bind(this);
        this.createNewTodo = this.createNewTodo.bind(this)
    }

    handleTodoInputField(e) {
        let { value } = e.target;
        const regex = /[^a-zA-Z0-9\s@$]{1,5}/g
        if (regex.test(value)) {
            console.log(value)
            value = value.replace(regex, "")
        }
        /* let temp = new RegExp("[^a-z]", "g")
        console.log(temp)
        console.log(temp.test("#")) */
        this.setState({ todoTask: value })
    }

    createNewTodo(e) {
        const { addNewTobo } = this.props
        e.preventDefault();
        if (this.state.todoTask !== "") {
            this.setState(pre => ({ todoId: pre.todoId + 1 }), () => { addNewTobo(this.state); this.setState({ ...this.state, todoTask: "" }) })
        }
    }

    makeAllTodoAsChecked = () => {
        const { markAllChecked } = this.props
        markAllChecked()
    }
    render() {
        const { todoTask, popup } = this.state;
        const { isChanged } = this.props
        return (
            <section className="todo-task-container">
                <form
                    noValidate
                    className={`todo-task flex ${isChanged ? 'bg-[#ffffff]' : 'bg-theme-very-dark-desaturated-blue'} py-1 px-3 items-center gap-x-2 rounded-md relative`}
                    onSubmit={this.createNewTodo}>
                    <div className={`todo-task-checkbox-wrapper flex border-[1.5px] ${isChanged ? 'border[#f9f9fa]' : 'border-[#2d2f44]'} rounded-full overflow-hidden cursor-pointer`}>
                        <Input
                            type={"checkbox"}
                            className={'todo-task-checkbox'}
                            onChange={this.makeAllTodoAsChecked}
                        />
                    </div>
                    <Input
                        type={"text"}
                        className={`todo-task-inputbox grow outline-0 bg-transparent h-[2.5rem] p-[0.1rem] ${isChanged ? 'carrt-[#25273c] text-[#25273c]' : 'caret-white text-[#9ca3af]'} placeholder:text-[1rem] text-[1.1rem] pr-7`}
                        placeholder={"Create a new todo"}
                        onChange={this.handleTodoInputField}
                        value={todoTask}
                    />
                    <MdOutlinePostAdd className={`absolute right-5 text-[1.5rem] ${isChanged ? 'text-[#2d2f44]' : 'text-[white]'} bottom-[15px] cursor-pointer`} onClick={this.createNewTodo} />
                </form>
            </section>
        )
    }

}

const mapStateToProps = state => {
    return {
        isChanged: state.themeReducer.isChanged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTobo: todoData => { dispatch(addNewtodoAction(todoData)) },
        markAllChecked: () => { dispatch(markHasAllChecked()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoTask);