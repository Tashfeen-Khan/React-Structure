import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../Features/todo/todoSlice";


const About = () => {
 const todos = useSelector(sate => sate.todos)
 const dispatch = useDispatch()
 

  return (
    <>
      <div>Todos</div>
      {todos.map((todos) =>(
        <li key={todos.id}>
          {todos.text}
          <button
          onClick={() => dispatch(removeTodo(todos.id))}>x</button>
        </li>


      ))}
    </>
  );
};
export default About;
