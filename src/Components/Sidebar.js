import React from "react";
import SidebarStyles from "../Styles/SidebarStyles";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };
  const invoiceList = () => {
    navigate("/invoices");
  };

  const Component = () => {
    return (
      <div className={classes.Sidebar}>
        <div className="bottom-elements">
          <div
            className="link"
            onClick={goToDashboard}
            style={{ cursor: "pointer", marginTop: "30px" }}
          >
            <h3>Dashboard</h3>
          </div>
          <div
            className="link"
            onClick={invoiceList}
            style={{ cursor: "pointer", marginTop: "30px" }}
          >
            <h3>Invoices</h3>
          </div>
        </div>
      </div>
    );
  };

  const classes = SidebarStyles();
  return <Component />;
}
