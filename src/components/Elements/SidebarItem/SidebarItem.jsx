import { Link } from "react-router-dom";
import "./SidebarItem.styles.css";

const SidebarItem = ({ iconSrc, text, link }) => {
  return (
    <Link className="text-decoration-none"  to={link}>
        <div className="sidebar-item">
          <div className="item-content">
            <img src={iconSrc} alt={`${text} Icon`} className="icon" />
            <div className="text">{text}</div>
          </div>
        </div>
    </Link>
  );
};

export default SidebarItem;
