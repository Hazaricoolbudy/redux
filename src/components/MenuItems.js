import React, { useState, useRef, useEffect } from 'react'
import Dropdown from './Dropdown'

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, SetDropdwon] = useState(false)
    let ref = useRef()
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target) ) {
                SetDropdwon(false);
                event.preventDefault() // for preventing default behavior but it is not working in mobile view
            }

        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler)
        }

    }, [dropdown])
    const onMouseEnter = () => {
        window.innerWidth > 960 && SetDropdwon(true)
    }
    const onMouseLeave = () => {
        window.innerWidth > 960 && SetDropdwon(false)
    }
    
    return (
        <>
            <li className="menu-items " ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {items.submenu ? (
                    <>
                        <button type="button" aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"} onClick={() => { SetDropdwon((prev) => !prev) }}>
                            {items.title}{" "}

                            {depthLevel > 0 ? <span>&#8594;	</span> : <span className='arrow' />}

                        </button>
                        <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                    </>
                ) : (
                    <a href="/#" >{items.title}</a>
                  
                )}
                

            </li>
                          
        </>
    )
}

export default MenuItems
