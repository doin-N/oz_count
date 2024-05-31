import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react';



function App() {
  
  const counter = useSelector((state) => state.counter ) //store.getState()
  const dispatch = useDispatch() //store.dispatch(action)

  const [todoValue, setTodoValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todoValue})
  }

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });

  }

  const handleDEcrement = () => {
    dispatch({ type: 'DECREMENT' });
  }


  return (
    <div className="App">
      <div>
        <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type='text' 
          value={todoValue} 
          onChange={(e) => setTodoValue(e.target.value)}/>
          <input type='submit'/>
        </form>

      </div>

      <div>
            Clicked: {counter} times
        {" "}
        <button onClick={handleIncrement}>
          +
        </button>
        {" "}
        <button onClick={handleDEcrement}>
          -
        </button>
      </div>
   
    </div>
  );
}

export default App;
