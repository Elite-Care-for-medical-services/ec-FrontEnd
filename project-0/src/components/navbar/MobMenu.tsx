import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Menus } from "./MenusData";
import { motion } from 'motion/react';

// main function components
const MobMenu = () => {
  // state track if the mobile menu drawer is open  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // state track which menu item clicked (for submenu toggle)
  const [clicked, setClicked] = useState<number | null>(null);

  // toggle the mobile menu drawer open/close
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null); // reset any open submenus when closing
  };

  //animation var for submenu expand/collapse
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

    return (
      /*  tide on large screens, show only on mobile/tablet */
      <div className="lg:hidden md:flex flex-col justify-end">
            
        {/* toggle button opening mobile menu*/ }
        <button onClick={toggleDrawer}>
          <div className="flex cursor-pointer items-center justify-center rounded-md bg-white p-2 hover:bg-slate-100">
            
            {/* animated menu icon convert to X  */}
            <div className="space-y-2 flex flex-col items-end">
              <span
                className={`block h-0.5 w-6 origin-center rounded-md bg-slate-600 transition-transform ease-in-out duration-300
                  ${isOpen ? 'translate-y-[3.2px] rotate-45 ' : ''}
                `}
              ></span>
              <span
                className={`block h-0.5 w-3 origin-center rounded-md bg-emerald-500 transition-transform ease-in-out duration-300
                  ${isOpen ? 'w-6 -translate-y-1.5 -rotate-45' : ''}
                `}
              ></span>
            </div>

          </div>
        </button>
            
            
        {/* mobile menu */}
        <motion.div
          className="fixed z-50 left-0 right-0 top-16 overflow-y-auto h-full backdrop-blur text-black p-6 pb-20"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
        >
          <ul>
            {/* loop through each menu item */}
            {Menus.map(({ name, subMenu, href}, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
              
            return (
              <li key={name} className="">
              
                {/* main menu link or clickable with submenu */}
                
                <a href={href} target="_blank">
                  <span
                    className="flex-center-between p-4 hover:bg-[#c6ac8f21] rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                >
                    {name}

                    {/* Chevron icon if submenu exists */}
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && "rotate-180"} `}
                      />
                    )}
                  </span>
                </a>
              
              {/* Submenu dropdown with animation */}
              {hasSubMenu && (
                <motion.ul
                  initial="exit"
                  animate={isClicked ? "enter" : "exit"}
                  variants={subMenuDrawer}
                  className="ml-5"
                >
                  {subMenu.map(({ name,href, icon: Icon }) => (
                    <a href={href} target="_blank">
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-[#c6ac8f7e] rounded-md gap-x-2 cursor-pointer"
                      >
                        
                        {Icon && <Icon size={16} />}
                        {name}
                        
                      </li>
                    </a>
                        
                      ))}
                </motion.ul>
              )}
              </li>
              );
            })}
          </ul>
        </motion.div>
      </div> 
    )
}

export default MobMenu