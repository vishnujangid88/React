import './App.css';
import Header from './components/Header';
import TodoItem from './components/Todo';
import Button from './components/Button';

import "./style.css"

import CounterComp from './components/CounterComp';

function App() {
  return (
    <div className='todo-container'>
      <CounterComp />
      <Header title="TO-DO" />
      <TodoItem text="Eat" />
      <TodoItem text="Code" />
      <TodoItem text="Sleep" />
      <TodoItem text="Movie" />
      <Button />
    </div>
  );
};

export default App;
