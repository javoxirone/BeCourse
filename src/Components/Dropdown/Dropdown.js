import React, {useState, useEffect} from "react";
import './dropdown.scss'
// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const data = [{id: 0, label: "Kamayish tartibida"}, {id: 1, label: "Ko'payish tartibida"}];

const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {selectedItem ? items.find(item => item.id == selectedItem).label : "Kamayish tartibida"}
                <ExpandMoreIcon className={`icon ${isOpen && "open"}`}/>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                    <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Dropdown