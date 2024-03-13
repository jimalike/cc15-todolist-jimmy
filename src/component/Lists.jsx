import Listitem from './Listitem';


/* props = {
    data : Arrary <{
        id:number,
        text:string,
        icon: component
        
    }
}
*/
function Lists(props) {
    return (
        <ul className='list'>
            {props.data.map((obj) => (
                <Listitem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active}/>
            ))}
        </ul>
    )
}

export default Lists;