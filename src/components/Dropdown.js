import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown ,depthLevel}) => {
    depthLevel=depthLevel+1
    const dropdownClass=depthLevel>1?"dropdown-submenu":""
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                
                <MenuItems items={submenu} key={index}/>
            ))}
        </ul>
    );
};

export default Dropdown;



//we can add it inside the submenu. map
// {/*<li key={index} className="menu-items">
//                     <a href="/#">{submenu.title}</a>
            // </li>*/}