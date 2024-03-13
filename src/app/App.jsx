
import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaChevronDown,FaCalendarAlt } from "react-icons/fa";
import Header from '../component/Header'
import Listitem from '../component/Listitem';

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
              <Listitem text="Inbox" icon={<FaInbox/>} active={true}/>
              <Listitem text="Today" icon={<FaCalendar/>} active={false}/>
              <Listitem text="Next 7 Days" icon={<FaCalendarAlt/>} active={false}/>
            </ul>
          </section>
          <section className='sidebar__category'>
            <div className = 'accordion'>
              {/* toogle */}
              <div className='accordion__toogle'>
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon accordion__item__active'/>
                  <p className='accordion__item__text'>Projects</p>
                </li>
              </div>
              {/* Lists */}
          <ul className='list'>
              <Listitem text="Project-A" icon={<FaInbox/>} active={true}/>
              <Listitem text="Project-B" icon={<FaInbox/>} active={false}/>
            </ul>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
