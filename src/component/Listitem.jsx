import { FaInbox } from 'react-icons/fa';
import './Listitem.scss'

function Listitem(props) {
    console.log(props);
    
    const listClassName = `list__item ${props.active ? 'active' : ''}`
    return (
        <li className={listClassName}>
            {props.icon}
            <p className="list__item__text">{props.text}</p>
        </li>
    );

}


export default Listitem;