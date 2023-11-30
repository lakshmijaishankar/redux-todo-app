import { Action_Types } from '../contants/action-types';
import { toast } from 'react-toastify'

const todoInitialState = {
    todoData: [],
    totalItem: 0,
    todoCompleted: []
}

export const todoReducer = (state = todoInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Action_Types.ADD_NEW_TODO:
            // console.log(payload);
            const exitingTodo = state.todoData.some(todo => todo.todoTask === payload.todoTask)
            if (exitingTodo) {
                toast.error(`${payload.todoTask} todotask already exist`, {})
                return state
            }
            else {
                toast.success(`${payload.todoTask} todotask sucessfulled added`)
                return {
                    ...state,
                    todoData: [/* { ...payload, markedHasChecked: false, checked: false } */payload, ...state.todoData],
                    totalItem: state.totalItem + 1
                }
            }
        case Action_Types.REMOVE_SELECTED_TODO:
            let count = 0;
            const removeTodoTemp = state.todoData.filter(todo => {
                if (todo.todoId !== action.payload) {
                    count++;
                    return todo;
                } else {
                    toast.error(`${todo.todoTask} has been removed sucessfully`)
                }
            })

            return {
                ...state,
                todoData: removeTodoTemp,
                totalItem: count,
                todoCompleted: state.todoCompleted.filter(todo => {
                    if (todo.todoId !== payload) {
                        return todo;
                    }
                })
            }
        case Action_Types.STRIKE_HAS_CHECKED:
            const strikeTodoTemp = state.todoData.map(todo => {
                if (todo.todoId === payload) {
                    return {
                        ...todo,
                        markedHasChecked: !todo.markedHasChecked
                    }
                }
                return todo;
            })
            return {
                ...state,
                todoData: strikeTodoTemp,
                /* todoCompleted: state.todoCompleted.map(todo => {
                    if (todo.todoId === payload) {
                        tod
                    }
                }) */
            }
        case Action_Types.CLEAR_COMPLETED_TODO:
            let clearCount = 0;
            const clearTodoTemp = state.todoData.filter(todo => {
                if (!todo.markedHasChecked) {
                    clearCount++;
                    return todo;
                }
            })
            return {
                ...state,
                todoData: clearTodoTemp,
                totalItem: clearCount,
                todoCompleted: []
            }
        case Action_Types.COMPLETED_TODO:
            const completedTodoTemp = payload.filter(todo => {
                if (todo.markedHasChecked) {
                    return todo
                }
            })
            return {
                ...state,
                todoCompleted: completedTodoTemp
            }
        case Action_Types.EDITETODO_TITLE:
            const { id, todotitle } = payload
            const editedTopTemp = state.todoData.map(todo => {
                if (todo.todoId === id) {
                    return {
                        ...todo,
                        todoTask: todotitle
                    }
                }
                return todo
            })
            return {
                ...state,
                todoData: editedTopTemp
            }
        case Action_Types.MARKAS_ALL_CHECKED:
            return {
                ...state,
                todoData: state.todoData.map(todo => {
                    return {
                        ...todo,
                        markedHasChecked: !todo.markedHasChecked
                    }
                })
            }
        default: return state
    }
}
