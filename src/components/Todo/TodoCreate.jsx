
import { HiPlus } from 'react-icons/hi';
import { useState } from 'react';


import TodoForm from './TodoForm';
import styles from './TodoCreate.module.scss';


/*Condition Rendering
- Default : Show Button &Text
- Active : Show TodoForm

Concept : true ? <AddTasl/> : <TodoForm/>
*/

/*- EVENT HANDLING
  เอ่าฟังก์ชันไปผูกติดกับ UI เพื่อให้ USER เป็นคนเรียกใช้ฟังก์ชันเอง
  - OnClock : ต้อง Click ก่อน , FN ถึงจะรัน
    - User ทำการคลิก
    - Browser ทำการเรียกใช้ฟังก์ชัน
      handleClick(eventObject)
*/

// CC3 - JS Value ไม่้สามารถทำให้ React Rerender ได้
// ต้องใช้ State


/* CC4 - React State
    = useState(initialState:any)
    //  element 1 : current State
    //  element 2 : Fn สำหรับ SetState
    // เมื่อ State เปลี่ยน Function Component จะ Redrender
    // Rerender == Code ทั้งหมดใน FC จะถูกรันใหม่ 1 ครั้ง
*/
//  #1 : FC = Function Component (Render)
function TodoCreate(props) {
  const [isOpenForm, setisOpenForm] = useState(false)
  // #2 : JS Function (Logic)
  const handleClick = function (event) {
    setisOpenForm(!isOpenForm)


  }
  return (
    <>

      {isOpenForm ? (
        <TodoForm  textSubmit="Add Task"
        setisOpenForm={setisOpenForm}
        data={props.data}
        setTodo={props.setTodo}/>
      ) : (<div
        className={styles.todo__create}
        onClick={handleClick}
      >
        <div className={styles.todo__create__button}>
          <HiPlus />
        </div>
        <h3 className={styles.todo__create__text}>Add Task</h3>
      </div>)}
    </>
  );
}

export default TodoCreate;


