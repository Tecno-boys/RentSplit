import { useState } from "react";
import { Icon } from "./dashboard/dashboardData";
import { Link } from "react-router-dom";

function Header() {

  const [active, setActive] = useState(1);
  
  return (
    <header className="rd-header">
      <div className="rd-header-inner">
        <div className="rd-header-left">
          <div className="rd-brand">
            <div className="rd-brand-mark">
              <Icon name="toll" />
            </div>
            <div className="rd-brand-cols">
              <span className="rd-headline-md rd-brand-name">ROOMIES</span>
              <span className="rd-label-mono rd-brand-sub">RENTSPLIT</span>
            </div>
          </div>

          <div className="rd-header-divider" />

          <div className="rd-flat-pill">
            <div className="rd-flat-name">
              <Icon name="apartment" />
              <span className="rd-body-md">The Brooklyn Loft (#4B)</span>
            </div>
            <div className="rd-flat-active">
              <span className="rd-dot-pulse" />
            </div>
          </div>
        </div>

        <nav className="rd-nav" aria-label="Primary">
            <Link to="/dashboard" className={active===1 ? "active" : ""} onClick={()=>setActive(1)}>
              Home
            </Link>
            <Link to="/expenses" className={active===2 ? "active" : ""} onClick={()=>setActive(2)}>
              Expenses
            </Link>
            <Link to="/recurring-bills" className={active===3 ? "active" : ""} onClick={()=>setActive(3)}>
              Bills
            </Link>
            <Link to="/debt-settle" className={active===4 ? "active" : ""} onClick={()=>setActive(4)}>
              Debt and settle
            </Link>
            <Link className={active==5 ? "active" : ""} onClick={()=>setActive(5)}>
              Split Rules
            </Link>
        </nav>

        <div className="rd-header-actions">
          <button className="rd-btn-add" type="button">
            <Icon name="add" />
            <span>Add Expense</span>
          </button>
          <button className="rd-btn-icon" type="button">
            <Icon name="notifications" />
            <span className="rd-notif-dot" />
          </button>
          <div className="rd-account">
            <div className="rd-account-avatar">
              <Icon name="person" />
            </div>
            <div className="rd-account-info">
              <span className="rd-body-sm rd-account-name">Marcus Vance</span>
              <span className="rd-label-mono rd-account-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header