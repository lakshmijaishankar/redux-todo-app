import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import './index.css';
import TodoBackGround from './components/todobg/TodoBackGround';
import Header from './components/header/Header';
import TodoTask from './components/todotask/TodoTask';
import Footer from './components/footer/Footer';
import TodoList from './components/todolist/TodoList';
import CompletedTodo from './components/compeletedtodo/CompletedTodo';

class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      switchTodo: "All",
      compIndex: 0
    }
  }

  switchTodoComponent = (e) => {
    const { ariaLabel, ariaControls } = e.target
    this.setState({ switchTodo: ariaLabel });
  }

  render() {
    const { switchTodo, compIndex } = this.state
    return (
      <Provider store={store}>
        <section className="app-container relative">
          <TodoBackGround />
          <section className="todo-wrapper absolute w-[100%] flex justify-center top-24 bottom-0">
            <section className="todo-container flex flex-col flex-[0_1_30%] gap-y-2">
              <Header />
              <TodoTask />
              <section className="todo-tasklist-wrapper rounded-md overflow-hidden max-h-[250px] text-[#ffffff] bg-[#25273c]">
                {
                  switchTodo === "All" && <TodoList />
                }
                {
                  switchTodo === "Completed" && <CompletedTodo />
                }

                <Footer switchTodoComponent={this.switchTodoComponent} switchTodo={this.state.switchTodo} />
              </section>
            </section>
          </section>
        </section>
      </Provider>
    )
  }
}

export default App;