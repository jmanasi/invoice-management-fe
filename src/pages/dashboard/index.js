import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getInvoices } from "../../Services/invoiceService";
import DashboardStyles from "../../Styles/DashboardStyles";
import Invoice from "../../Components/Invoice";

export default function Dashboard(props) {
  const classes = DashboardStyles();
  const an = useRef();
  const [invoicesList, setInvoicesList] = useState([]);
  const [totals, setTotals] = useState({ total: 0, tax: 0, discounts: 0 });

  useEffect(() => {
    const fetchInvoices = async () => {
      const invoices = await getInvoices();
      setInvoicesList(invoices);
      const total = invoices.reduce(
        (sum, invoice) => sum + parseFloat(invoice.price),
        0
      );
      const tax = invoices.reduce(
        (sum, invoice) => sum + parseFloat(invoice.tax),
        0
      );
      const discounts = invoices.reduce(
        (sum, invoice) => sum + parseFloat(invoice.discounts),
        0
      );
      setTotals({ total, tax, discounts });
    };

    fetchInvoices();
  }, []);

  return (
    <div className={classes.InvoiceDetails} ref={an}>
      <div className={classes.dashboardHeader}>
        <div className={classes.firstColumn}>
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className={classes.dashboardTotals}>
        <h2>Invoices</h2>
        <div className={classes.totalsWrapper}>
          <div className={classes.totalItem}>
            <p>Total Invoice Value</p>
            <h3>{totals.total.toFixed(2)}</h3>
          </div>
          <div className={classes.totalItem}>
            <p>Total Tax</p>
            <h3>{totals.tax.toFixed(2)}</h3>
          </div>
          <div className={classes.totalItem}>
            <p>Total Discounts</p>
            <h3>{totals.discounts.toFixed(2)}</h3>
          </div>
        </div>
      </div>
      <div className={classes.firstColumn}>
        <h2>Invoice List</h2>
      </div>
      {invoicesList?.map((d) => (
        <Link
          to={`/id/${d.id}`}
          state={d}
          style={{ textDecoration: "none", color: "inherit" }}
          key={d.id}
        >
          <Invoice id={d.invoice_number} date={d.date} name={d.customer_name} />
        </Link>
      ))}
    </div>
  );
}
