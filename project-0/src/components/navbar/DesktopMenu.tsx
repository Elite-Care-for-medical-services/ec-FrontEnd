import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from 'motion/react';

// Define type 
type MenuType = {
  name: string;
  href?: string;
  gridCols?: number;
  subMenuHeading?: string[];
  subMenu?: {
    name?: string;
    desc?: string;
    href?: string;
    icon?: React.ElementType;
  }[];
};

// main function components
const DesktopMenu = ({ menu }: { menu: MenuType }) => {
    // check if the menu has a subMenu array
    const hasSubMenu = menu?.subMenu?.length;

     // track click state to show/hide submenu
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    // animation variable for submenu appearance/disappearance
    const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  // toggle hover state (mouse enter/leave)
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
    return (

     <div ref={menuRef}>
      {/* main menu item container with click tracking */}
      <motion.div className="group/link overflow-hidden">

        {/* menu label with optional dropdown icon */}
        <span 
          className="flex-center gap-1 hover:bg-[#EAE0D5] cursor-pointer px-3 py-1 rounded-xl"
          onClick={hasSubMenu ? toggleMenu : undefined}
          >
          {hasSubMenu ? (
            <>
              {menu.name}
              <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
            </>
          ) : (
            <a href={menu.href} target="_blank" className="text-inherit no-underline">
              {menu.name}
            </a>
          )}
        </span>

        {/* submenu dropdown (only if it exists) */}  
        {hasSubMenu && (
          <motion.div
            className="sub-menu"
            initial="exit"
            animate={isOpen ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            {/* grid layout for submenu items */}
            <div
              className={`grid gap-7 ${
                menu.gridCols === 3
                  ? "grid-cols-3"
                  : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              
              {/* render each submenu item */}
              {/* I have redline {menu.subMenu} type error */}
              {menu.subMenu?.map((submenu, i) => (
                <div className="relative cursor-pointer" key={i}>
                    {/* I have redline {menu.gridCols} type error */}
                    {menu.gridCols && menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-gray-900">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                   {/* submenu link with icon and text */}
                  <a href={submenu.href} target="_blank">
                  <div className="flex-center gap-x-4 group/menubox">
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-black group-hover/menubox:text-gray-100 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="text-sm font-bold">{submenu.name}</h6>
                      <p className="text-xs text-gray-900">{submenu.desc}</p>
                    </div>
                  </div>
                  </a>
                </div>
                ))}
                
            </div>
            
          </motion.div>
        )}
      </motion.div>
    </div>
    
  )
}

export default DesktopMenu