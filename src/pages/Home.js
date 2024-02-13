import React,{useState} from "react";
import "../index.css";
import {useDispatch}  from 'react-redux'
import {addTodo} from '../Features/todo/todoSlice'

const Home = () => {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };


  return <form onSubmit={addTodoHandler} class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
      Feedback
    </h2>
    <p class="leading-relaxed mb-5 text-gray-600">
      Post-ironic portland shabby chic echo park, banjo fashion axe
    </p>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-600">
        Text
      </label>
      <input
        type="text"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a todo... "
        onChange={(e) => setInput(e.target.value)}
      />
    </div>

    <button
      type="submit"
      class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </div>
    </form>

};

export default Home;
