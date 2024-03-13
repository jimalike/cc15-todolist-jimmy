
import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import Header from '../component/Header'
import Listitem from '../component/Listitem';
import Lists from '../component/Lists'

function App() {

  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false }
  ]


  const projectLists = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];
  //  ObjectDetail => <Listitem  >
  return (
    <div className='todo'>
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <Lists data={generalLists} />
          </section>
          <section className='sidebar__category'>
            <div className='accordion'>
              {/* toogle */}
              <div className='accordion__toogle'>
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon' />
                  <p className='accordion__item__text'>Projects</p>
                </li>
              </div>
              {/* Lists */}
              <Lists data={projectLists} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;


{/* <ul className='list'>
{projectLists.map((obj) => <Listitem key={obj.id}
  text={obj.text}
  icon={obj.icon}
  active={obj.active} />)} */}