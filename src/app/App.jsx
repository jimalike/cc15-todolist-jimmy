
import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaChevronDown,FaCalendarAlt } from "react-icons/fa";
import Header from '../component/Header'

function App() {
  return (
    <div className='todo'>
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <ul className='list'>
              <li className='list__item'>
                  <FaInbox />
                <p className='list__item__text'>Inbox</p>
              </li>
            </ul>
            <ul className='list'>
              <li className='list__item'>
                  <FaCalendar />
                <p className='list__item__text'>Today</p>
              </li>
            </ul>
            <ul className='list'>
              <li className='list__item'>
                  <FaCalendarAlt />
                <p className='list__item__text'>Next 7 days</p>
              </li>
            </ul>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
