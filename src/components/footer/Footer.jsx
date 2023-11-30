import React, { PureComponent, createContext } from 'react'
import { connect } from 'react-redux';
import { clearCompletedTodoAction } from '../../redux/actions/clearCompletedAction';
import { completedTodoAction } from '../../redux/actions/completedTodoAction';


class Footer extends PureComponent {

    clearCompletedTodo = () => {
        const { clearTodo } = this.props;
        clearTodo()
    }

    completedTodo = () => {
        const { complTodo, todoData } = this.props;
        complTodo(todoData);
    }

    render() {
        const { isChanged, totalItem, switchTodoComponent, switchTodo } = this.props;
        return (
            <section className={`todo-footer flex items-center justify-between ${isChanged ? 'text-[#25273c] bg-[#ffffff]' : 'text-[#ffffff] bg-[#25273c]'} sticky bottom-0 font-light px-3 py-1 h-[2.6rem] text-[0.9rem]`}>
                <section className='todo-items-left'>{totalItem} items left</section>
                <section className='tdo-task-switcher'>
                    <ul className='flex space-x-2'>
                        <li className={`${switchTodo === "All" ? 'text-[#2922ae]' : 'text-white'} todo-task-all `} ><button aria-label='All' type='button' aria-controls='0' onClick={switchTodoComponent}>All</button></li>
                        <li className='todo-task-active' aria-label='Active'>Active</li>
                        <li className={`todo-task-completed ${switchTodo === "Completed" ? 'text-[#2922ae]' : 'text-white'}`} ><button type='button' onClick={(e) => { this.completedTodo(); switchTodoComponent(e) }} aria-label='Completed' aria-controls='1'>Completed</button></li>
                    </ul>
                </section>
                <section className='clear-todo-completed cursor-pointer'>
                    <button type='button' onClick={this.clearCompletedTodo}>Clear completed</button>
                </section>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        isChanged: state.themeReducer.isChanged,
        totalItem: state.todoReducer.totalItem,
        todoData: state.todoReducer.todoData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearTodo: () => { dispatch(clearCompletedTodoAction()) },
        complTodo: (todoData) => { dispatch(completedTodoAction(todoData)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)