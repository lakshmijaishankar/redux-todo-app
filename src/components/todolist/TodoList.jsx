import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Input from '../inputbox/Input';
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { removeTodoAction } from '../../redux/actions/removeTodoAction';
import { strikeTodoAction } from '../../redux/actions/strikeTodoAction';
import { editTodoTitle } from '../../redux/actions/editTodoAction';
import './TodoList.scss'

class TodoList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            todoId: undefined,
            editTodoById: undefined,
        }
        this.titleRef = React.createRef()
        this.removeTodoTask = this.removeTodoTask.bind(this);
        this.strikeTodoHasChecked = this.strikeTodoHasChecked.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.todoData)
    }

    removeTodoTask(todoId) {
        const { removeTodo } = this.props;
        const { dispatch } = this.props;
        console.log(dispatch)
        removeTodo(todoId)
    }

    strikeTodoHasChecked(id) {
        const { strikeTodo } = this.props;
        this.setState({ todoId: id }, () => { strikeTodo(this.state.todoId) })
    }

    handleEdit = (id) => {
        this.setState({ editTodoById: id }, () => { this.titleRef.current.focus() })
    }

    handleEditedTodoTitle = (todoId) => {
        const { editTodo } = this.props
        const editedValue = this.titleRef.current.innerText
        editTodo({ id: todoId, todotitle: editedValue })
        this.setState({ editTodoById: undefined })
    }
    render() {
        const { todoData, isChanged } = this.props;
        const { editTodoById } = this.state
        // console.log(todoData)
        return (
            <section className={`todo-task-list-wrapper ${isChanged ? 'text-[#25273c] bg-[#ffffff]' : 'text-[#ffffff] bg-[#25273c]'}`}>
                <ul className="todotask-list overflow-y-auto max-h-[calc(250px-2.5rem)] text-[0.9rem] font-light">
                    {

                        todoData.map(todoItem => {
                            return (
                                <li key={todoItem.todoId} className='flex h-[2.8rem] py-1 px-3 border-b border-b-[#9ca3af] items-center capitalize gap-x-2 animate-newtodo'>
                                    <div className='flex border-[1.5px] border-[#2d2f44] rounded-full overflow-hidden cursor-pointer'>
                                        <Input
                                            type={'checkbox'}
                                            className={'todolist-checkbox'}
                                            onChange={() => { this.strikeTodoHasChecked(todoItem.todoId) }}
                                            checked={todoItem.markedHasChecked}
                                        />
                                    </div>
                                    <div className="todolist-title grow">
                                        <h1
                                            className={`${todoItem.markedHasChecked ? 'line-through opacity-80' : ''} outline-0 rounded-[0px] break-words`}
                                            contentEditable={editTodoById === todoItem.todoId ? true : false}
                                            ref={editTodoById === todoItem.todoId ? this.titleRef : null}
                                            suppressContentEditableWarning

                                        >
                                            {todoItem.todoTask}
                                        </h1>
                                    </div>
                                    <div className={`${isChanged ? 'text-[#25273c]' : 'text-[#ffffff]'} text-[1.3rem] mr-2 cursor-pointer flex space-x-1`}>
                                        {
                                            todoItem.markedHasChecked &&
                                            <AiFillDelete onClick={() => this.removeTodoTask(todoItem.todoId)} className={`${todoItem.markedHasChecked && 'animate-icon'}`} />
                                        }
                                        {
                                            editTodoById === todoItem.todoId ?
                                                <FaRegSave onClick={() => this.handleEditedTodoTitle(todoItem.todoId)} /> :
                                                <CiEdit onClick={() => { this.handleEdit(todoItem.todoId) }} />
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section >
        )
    }
}

const mapStateToProps = state => {
    return {
        todoData: state.todoReducer.todoData,
        isChanged: state.themeReducer.isChanged
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeTodo: todoId => { dispatch(removeTodoAction(todoId)) },
        strikeTodo: (todoId) => { dispatch(strikeTodoAction(todoId)) },
        editTodo: (todoData) => { dispatch(editTodoTitle(todoData)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)