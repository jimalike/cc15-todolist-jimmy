import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';


function TodoItem({task, done, date}) {

    const [isOpenForm, setisOpenForm] = useState(false)

    const handleClick = function (event) {
        setisOpenForm(!isOpenForm)
    }
    return (
        <>

            {isOpenForm ? (<TodoForm textSubmit="Edit Task" setisOpenForm={setisOpenForm} />) :
                (
                    <li className={styles.todo}>
                        <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done : ''}`}>
                            <HiOutlineCheck className={styles.todo__checkbox__icon} />
                        </div>
                        <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}  >{task} </p>
                        <span className={styles.todo__date}>{date}</span>
                        <div className={styles.todo__action}>
                            <span>
                                <FaPen className={styles.todo__edit} onClick={handleClick} />
                            </span>
                            <span>
                                <FaTrashAlt className={styles.todo__delete} />
                            </span>
                        </div>
                    </li>
                )}
        </>
    )
}

export default TodoItem;
