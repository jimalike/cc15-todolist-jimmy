import { useState } from 'react';
import {Button} from '../Common/Button/Button'
import styles from './TodoForm.module.scss';

/*
  props = {
    textSubmit : string 
  }
*/ 

/*
CC1 - Form Handle

 - ใช้ FN ไปผูกกับ Event ชื่อ onSubmit
 - FN จะถูก Browser เรียกใช้ โดยส่ง Parameter มา 1 ตัว (event Object)
 - โดย default ทุกปุ่มใน <form></form> จะทำหน้้าที่ submit
 - วิธีแก้ ต้องกำหนด tyupe ของปุ่ม
*/

/*
  props = {
    textSubmit : string 
    setIsOpenForm : FN
  }
*/
function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState('')

  const handleChangeInput = function (event) {
    if (isError) setIsError(false);
    setTaskInput(event.target.value)
  }

  const handleSubmit = function (event) {
    // 1. PreventDefault
    event.preventDefault();
    // 2. รู้ก่อนว่า User พิมพ์อะไร (อยู่ใน state : taskInput)
    // 3. FormValidation
    // case1 : submit ได้
    // case2 : submit ไม่้ได้ => แสดง Error
    if (taskInput.trim() === '' ) {
      console.log("Error");
      setIsError(true);
      return;
    } 
  }

  const handleCancel = function () {
    // correctName : setisOpenForm(false)
    // incorrectName : undefined(false) => getting Error
    props.setisOpenForm(false)
    
    console.log('cancel');
  }
  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} 
      placeholder='Task Name'
      value={taskInput}
      onChange={handleChangeInput}
       />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>Title is required</p> : null}
        <div className={styles.todo__form__buttons}>
          <Button text='Cancel' active={false} type="button" onClick={handleCancel}/>
          <Button text={props.textSubmit} active={true} type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
