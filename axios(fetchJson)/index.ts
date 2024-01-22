import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface TODO {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((ressponse) => {
  const todo = ressponse.data as TODO;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(ID, title, completed);
});
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    ` todo with id is ${id} todo has title is ${title} Is it finished ${completed}`
  );
};
