import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonLinkProps {
  to: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}
const BtnwithIcon = ({ to, label, icon, className = "" }: ButtonLinkProps)=> {
    return (
           <div className="flex items-end justify-end mr-4 my-6">
      <Link
        to={to}
        className={`bg-primary font-medium py-2 pl-3 pr-6 rounded-lg flex justify-center items-center gap-2 ${className}`}
      >
        {icon}
        {label}
      </Link>
    </div>
    );
};

export default BtnwithIcon;