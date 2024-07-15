import { useState } from "react";
import { useFormik } from "formik";
import FormStyles from "../Styles/FormStyles";
import { updateInvoice } from "../Services/invoiceService";
import { useNavigate } from "react-router-dom";

function EditForm(props) {
  const fetchData = JSON.parse(window.localStorage.getItem("invoices"));
  const getInvoice = fetchData.filter((i) => i.id === props.id);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { ...props.formElements },
    onSubmit: async (values) => {
      try {
        await updateInvoice(values.id, {
          ...values,
          date: new Date(values.date).toISOString().split("T")[0],
        });
        navigate("/");
      } catch (error) {
        console.error("Error updating invoice:", error);
        alert("Error updating invoice");
      }
      props.formStatus();
    },
  });

  const classes = FormStyles();

  if (!props.hide)
    return (
      <div className={classes.Overlay}>
        <div className={classes.Form}>
          <h1>
            Edit <span>#</span>
            {props.id}
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="wrapper">
              <section className="Bill-To">
                <div className="name">
                  <label htmlFor="name">Customer's Name</label>
                  <br />
                  <input
                    required
                    type="text"
                    value={formik.values.customer_name}
                    onChange={formik.handleChange}
                    name="customer_name"
                  />
                </div>

                <div className="flexbox responsive">
                  <div className="first-columm">
                    <label htmlFor="city">Price</label>
                    <br />
                    <input
                      required
                      type="number"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      name="price"
                      id="city"
                    />
                  </div>
                  <div className="second-columm">
                    <label htmlFor="post">Tax</label>
                    <br />
                    <input
                      required
                      type="number"
                      value={formik.values.tax}
                      onChange={formik.handleChange}
                      name="tax"
                      id="post"
                    />
                  </div>
                  <div className="third-columm">
                    <label htmlFor="country">Discounts</label>
                    <br />
                    <input
                      required
                      type="number"
                      value={formik.values.discounts}
                      onChange={formik.handleChange}
                      name="discounts"
                      id="country"
                    />
                  </div>
                </div>
                <div className="flexbox column-flex">
                  <div className="first-columm responsive-date">
                    <label htmlFor="date">Invoice Date</label>
                    <br />
                    <input
                      required
                      type="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      name="date"
                      id="date"
                    />
                  </div>
                </div>
                <div className="description">
                  <label htmlFor="description">Description</label>
                  <br />
                  <input
                    required
                    type="description"
                    value={formik.values.item_description}
                    onChange={formik.handleChange}
                    id="item_description"
                    placeholder="e.g. Graphic Design Services"
                  />
                </div>
              </section>
            </div>
            <div className="options flexbox">
              <div className="btn">
                <button
                  type="button"
                  className="discart-btn"
                  onClick={props.formStatus}
                >
                  Discart
                </button>
              </div>
              <div className="btn">
                <button type="submit" className="save-btn">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  return null;
}

export default EditForm;
