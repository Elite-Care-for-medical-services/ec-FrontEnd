// Menu icons
import { Shield } from 'lucide-react';
import { ShoppingBag } from "lucide-react";
import { Pill } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { HandHelping } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { Users } from "lucide-react";
import { Lock } from "lucide-react";


// Define SubMenuItem type
export type SubMenuItem = {
  name?: string;
  desc?: string;
  href?: string;
  icon?: React.ElementType; // or use `JSX.Element` if you're directly passing React elements
};

// Define the type for navItems array
type NavItem = {
  name: string;
  href?: string;
  subMenuHeading?: string[],
  subMenu?: SubMenuItem[],
  gridCols?: number;
};

// Array contains Menus Data
export const Menus: NavItem[] = [
  
  { name: "Services", 
    subMenuHeading: ["Pharmacy", "Insurance"],
    gridCols: 2,
    subMenu: [
      {
        name: "Pharmacy Management",
        desc: "Optimize pharmacy resources",
        href: "https://www.typescriptlang.org/docs/",
        icon: Pill,
      },
      {
        name: "Medicine Supply",
        desc: "Order and track medications",
        href: "https://www.typescriptlang.org/docs/",
        icon: ShoppingBag,
      },
      {
        name: "Health Insurance",
        desc: "Plans and coverage options",
        href: "https://www.typescriptlang.org/docs/",
        icon: Shield,
      },]
  },

{ name: "Impact", href: "https://devdojo.com/tailwindcss/buttons" },

  { name: "Resources",
    subMenuHeading: ["Get started", "Support", "Updates"],
    gridCols: 2,
    subMenu: [
      {
        name: "How to Book",
        desc: "Step-by-step booking guide",
        icon: Calendar,
        href: "https://devdojo.com/tailwindcss/buttons"
      },
      {
        name: "Help Center",
        desc: "FAQs and support resources",
        icon: HandHelping,
        href: "https://devdojo.com/tailwindcss/buttons"
      },
      {
      name: "Latest Updates",
      desc: "Platform news and changes",
      icon: Newspaper, 
      href: "https://devdojo.com/tailwindcss/buttons"
    },
    ]
    },

  { name: "Location", href: "https://www.geekboots.com/nextjs/add-background-image-using-custom-tailwind-css-configuration" },
  
  { name: "About us", 
    subMenuHeading: ["Company", "Team", "Trust"],
    gridCols: 2,
    subMenu: [
      {
        name: "Our Mission",
        desc: "Improving access to healthcare services",
        icon: Heart,
        href: "https://devdojo.com/tailwindcss/buttons"
      },
      {
        name: "Our Team",
        desc: "Healthcare and tech professionals",
        icon: Users,
        href: "https://devdojo.com/tailwindcss/buttons"
      },
      {
        name: "Partners & Clients",
        desc: "Hospitals, pharmacies, and insurers",
        icon: Handshake,
        href: "https://devdojo.com/tailwindcss/buttons"
      },
      {
        name: "Data Security",
        desc: "Keeping health information safe",
        icon: Lock,
        href: "https://devdojo.com/tailwindcss/buttons"
      },]
      
   },
];
