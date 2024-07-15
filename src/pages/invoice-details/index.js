import { useNavigate } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";
import moment from "moment";
import { gsap } from "gsap";
import EditForm from "../../Components/EditForm";
import InvoiceDetailsStyles from "../../Styles/InvoiceDetailsStyles";
import { useLocation } from "react-router-dom";
import { deleteInvoice } from "../../Services/invoiceService";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function InvoiceDetails(props) {
  const location = useLocation();
  const element = location.state || {};

  const [invoice, setInvoice] = useState(element);
  const navigate = useNavigate();

  const classes = InvoiceDetailsStyles();
  const date = new Date(invoice.date);
  const dateString = moment(date).format("YYYY-MM-DD");

  //Delete function
  const deleteItem = async () => {
    await deleteInvoice(invoice.id);
    navigate(-1);
  };

  //Edit  function
  const [hideForm, setHideForm] = useState(true);

  const editItem = () => {
    setHideForm(!hideForm);
  };

  const getDataHandler = (values) => {
    setInvoice(element);
  };

  //Download
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Invoice", 14, 22);
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${invoice.invoice_number}`, 14, 32);
    doc.text(`Customer Name: ${invoice.customer_name}`, 14, 40);
    doc.text(`Date: ${new Date(invoice.date).toLocaleDateString()}`, 14, 48);

    // Add table with invoice details
    doc.autoTable({
      startY: 60,
      head: [["Item Description", "Price", "Tax", "Discounts"]],
      body: [
        [
          invoice.item_description,
          invoice.price,
          invoice.tax,
          invoice.discounts,
        ],
      ],
    });

    // Save the PDF
    doc.save(`invoice_${invoice.invoice_number}.pdf`);
  };

  useLayoutEffect(() => {
    gsap.from(an.current, {
      duration: 1.5,
      x: "100%",
    });
  }, []);

  const an = useRef();
  document.title = `Invoice #${invoice.id} - Invoice App`;

  return (
    <div>
      <EditForm
        hide={hideForm}
        formStatus={editItem}
        id={invoice.id}
        data={getDataHandler}
        formElements={element}
      />

      <div className={classes.InvoiceDetails} ref={an}>
        <button className="back" onClick={() => navigate(-1)}>
          <i className="fas fa-chevron-left"></i> Go back
        </button>
        <div className="option flexbox">
          <div className="status-details"></div>
          <div className="btns flexbox">
            <button className="edit" onClick={editItem}>
              Edit
            </button>
            <button className="delete" onClick={deleteItem}>
              Delete
            </button>
            <button className="download" onClick={downloadPDF}>
              Download
            </button>
          </div>
        </div>
        <div className="invoice">
          <div className="header flexbox">
            <div className="id-service">
              <div className="id bold">
                <span>#</span>
                {invoice.invoice_number}
              </div>
              <div className="service">
                Description :{invoice.item_description}
              </div>
            </div>
          </div>
          <div className="body flexbox">
            <div className="date-due">
              <div>
                <div className="title">Invoice Date</div>
                <div className=" bold">{dateString}</div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="all-items">
              <div className="item-header flexbox">
                <div className="item-name wide">Customer Name</div>
                <div className="qty small">Tax</div>
                <div className="qty small">Discounts</div>
                <div className="price small">Price</div>
              </div>
              <div className="item-details flexbox" key={invoice.id}>
                <div className="item-name wide black">
                  <b>{invoice.customer_name}</b>
                </div>
                <div className="qty small">
                  <b>{invoice.tax}</b>
                </div>
                <div className="qty small">
                  <b>{invoice.discounts}</b>
                </div>
                <div className="price small">
                  <b>Rs.{parseInt(invoice.price).toLocaleString()}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
