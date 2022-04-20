import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown ,depthLevel}) => {
    depthLevel=depthLevel+1
    const dropdownClass=depthLevel>1?"dropdown-submenu":""
    return (
        <ul className={`dropdown ${dropdownClass}  ${dropdown ? "show" : ""} dropdown-item  navbar-nav me-auto mb-2 mb-lg-0`}>
            {submenus.map((submenu, index) => (
                
                <MenuItems items={submenu} key={index} className="nav-item"/>
            ))}
        </ul>
    );
};

export default Dropdown;



//we can add it inside the submenu. map
// {/*<li key={index} className="menu-items">
//                     <a href="/#">{submenu.title}</a>
            // </li>*/}