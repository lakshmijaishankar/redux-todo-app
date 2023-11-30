import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './TodoBg.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
class TodoBackGround extends PureComponent {

    constructor() {
        super()
    }

    render() {
        const { isChanged } = this.props
        return (
            <>
                <section className="todo-bg-container h-screen  flex flex-col ">
                    <div className={`todo-top flex ${isChanged ? 'todo-top-light-img' : 'todo-top-dark-img'}`}></div>
                    <div className={`todo-bottom ${isChanged ? 'bg-white' : 'bg-theme-very-dark-blue'} h-[100%] flex`}></div>
                </section>
                <ToastContainer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoData: state.todoReducer.todoData,
        isChanged: state.themeReducer.isChanged
    }
}

export default connect(mapStateToProps)(TodoBackGround);