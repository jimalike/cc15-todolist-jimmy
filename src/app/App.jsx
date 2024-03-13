
import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaChevronDown } from "react-icons/fa";
import Header from '../component/Header'

function App() {
  return (
    <div className='todo'>
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className='sidebar'>
          <section className='generic__lists'>
            <ul className='list__container'>
              <li className='list__item'>
                <span>
                  <FaInbox />
                </span>
                <p>Inbox</p>
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
