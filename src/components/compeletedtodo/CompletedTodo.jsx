import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeTodoAction } from '../../redux/actions/removeTodoAction';
import { strikeTodoAction } from '../../redux/actions/strikeTodoAction';
import { AiFillDelete } from 'react-icons/ai';
import { FaRegSave } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import Input from '../inputbox/Input';


class CompletedTodo extends PureComponent {

    constructor() {
        super()
        this.state = {
            todoId: undefined,
            editTodoById: undefined,
        }
        this.removeTodoTask = this.removeTodoTask.bind(this);
        this.strikeTodoHasChecked = this.strikeTodoHasChecked.bind(this);
    }

    removeTodoTask(todoId) {
        const { removeTodo } = this.props;
        removeTodo(todoId)
    }

    strikeTodoHasChecked(id) {
        const { strikeTodo } = this.props;
        console.log(id)
        strikeTodo(id)
    }


    render() {
        const { todoCompleted, isChanged } = this.props;
        return (
            <section className="completed-todotask">
                <section className={`todo-task-list-wrapper ${isChanged ? 'text-[#25273c] bg-[#ffffff]' : 'text-[#ffffff] bg-[#25273c]'}`}>
                    <ul className="todotask-list overflow-y-auto max-h-[calc(250px-2.5rem)] text-[0.9rem] font-light">
                        {
                            todoCompleted.map(todoItem => {
                                return (
                                    <li key={todoItem.todoId} className='flex h-[2.8rem] py-1 px-3 border-b border-b-[#9ca3af] items-center capitalize gap-x-2'>
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

                                            >
                                                {todoItem.todoTask}
                                            </h1>
                                        </div>
                                        <div className={`${isChanged ? 'text-[#25273c]' : 'text-[#ffffff]'} text-[1.3rem] mr-2 cursor-pointer flex space-x-1`}>
                                            {
                                                todoItem.markedHasChecked &&
                                                <AiFillDelete onClick={() => this.removeTodoTask(todoItem.todoId)} />
                                            }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section >
            </section>
            /* todoCompleted.lengtn > 0 ?
                <section className="completed-todotask">
                    <section className={`todo-task-list-wrapper ${isChanged ? 'text-[#25273c] bg-[#ffffff]' : 'text-[#ffffff] bg-[#25273c]'}`}>
                        <ul className="todotask-list overflow-y-auto max-h-[calc(250px-2.5rem)] text-[0.9rem] font-light">
                            {
                                todoCompleted.map(todoItem => {
                                    return (
                                        <li key={todoItem.todoId} className='flex h-[2.8rem] py-1 px-3 border-b border-b-[#9ca3af] items-center capitalize gap-x-2'>
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

                                                >
                                                    {todoItem.todoTask}
                                                </h1>
                                            </div>
                                            <div className={`${isChanged ? 'text-[#25273c]' : 'text-[#ffffff]'} text-[1.3rem] mr-2 cursor-pointer flex space-x-1`}>
                                                <AiFillDelete onClick={() => this.removeTodoTask(todoItem.todoId)} />
                                                <FaRegSave /> :
                                                <CiEdit />

                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section >
                </section>
                :
                <h1>No completed Todo</h1> */
        )
    }
}

const mapStateToProps = state => {
    return {
        todoCompleted: state.todoReducer.todoCompleted,
        isChanged: state.themeReducer.isChanged
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeTodo: todoId => { dispatch(removeTodoAction(todoId)) },
        strikeTodo: (todoId) => { dispatch(strikeTodoAction(todoId)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompletedTodo)