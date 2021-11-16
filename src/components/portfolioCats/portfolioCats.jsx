import "./portfolioCats.scss";

function portfolioCats({item, category, active, setSelected}) {
    return (
    <li className={active ? "item item--active" : "item"}
     onClick ={ ()=> {
        setSelected(category);
    }}
    >
        {item}
    </li>
    );
}

export default portfolioCats;
