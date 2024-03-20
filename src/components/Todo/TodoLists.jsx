import styles from './TodoLists.module.scss';

import TodoItem from './TodoItem';

// const data = [
//   {
//     "id": 1,
//     "task": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
//     "status": false,
//     "date": "2023-05-03"
//   },
//   {
//     "id": 2,
//     "task": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
//     "status": false,
//     "date": "2023-05-04"
//   },
//   {
//     "id": 3,
//     "task": "Curabitur in libero ut massa volutpat convallis.",
//     "status": false,
//     "date": "2023-04-29"
//   },
// ]

function TodoLists(props) {
  // const dataRender = data.map((todoObj) =>
  //   <TodoItem task={todoObj.task}
  //     key={todoObj.id}
  //     done={todoObj.status}
  //     date={todoObj.date} />);


  // const [allTodos, setAllTodos] = useState(data)
  return (
    <>

      <ul className={styles.todo__lists}>
        {props.data.map((todoObj) => (
          <TodoItem
            task={todoObj.task}
            key={todoObj.id}
            id={todoObj.id}
            done={todoObj.status}
            date={todoObj.date} />)
        )}
      </ul>
    </>
  );
}

export default TodoLists;
