import {
  useState,
  useEffect,
  useRef,
  useContext,
  useLayoutEffect,
} from "react";
import NewInvoice from "../../Components/NewInvoice";
import Invoice from "../../Components/Invoice";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import InvoicesStyle from "../../Styles/InvoicesStyles";
import { FormContext } from "../../Context/showForm";
import { getInvoices } from "../../Services/invoiceService";

export default function Invoices(props) {
  const { changeState } = useContext(FormContext);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getInvoices();
      setInvoices(data);
    };

    fetchInvoices();
  }, []);

  useLayoutEffect(() => {
    gsap.from(an.current, {
      duration: 1.5,
      x: "-100%",
    });
  }, []);

  const an = useRef();

  const classes = InvoicesStyle();
  // document title
  document.title = `(${invoices.length}) Invoices - Invoice App`;
  return (
    <div className={classes.InvoiceDetails} ref={an}>
      <div className="flexbox">
        <div className="first-columm">
          <h1>Invoices</h1>
          <div className="Counter">
            There are {invoices.length} total invoices
          </div>
        </div>
        <div className="second-columm">
          <NewInvoice showForm={changeState} />
        </div>
      </div>
      {invoices.map((d) => (
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
