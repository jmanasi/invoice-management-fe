import { useState, useContext } from "react";
import { useFormik } from "formik";
import FormStyles from "../Styles/FormStyles";
import { FormContext } from "../Context/showForm";
import { createInvoice } from "../Services/invoiceService";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const { state, changeState } = useContext(FormContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      customer_name: "",
      item_description: "",
      price: "",
      discounts: "",
      tax: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await createInvoice(values);
        resetForm();
        navigate("/invoices");
        changeState();
      } catch (error) {
        alert("Failed to create invoice. Please try again.");
      }
    },
  });

  const classes = FormStyles();

  if (!state)
    return (
      <div className={classes.Overlay}>
        <div className={classes.Form}>
          <h1>Create Invoice</h1>
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
                    id="name"
                  />
                </div>

                <div className="flexbox responsive">
                  <div className="first-columm">
                    <label>Price</label>
                    <br />
                    <input
                      required
                      type="number"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      name="price"
                    />
                  </div>
                  <div className="second-columm">
                    <label>Tax</label>
                    <br />
                    <input
                      required
                      type="number"
                      value={formik.values.tax}
                      onChange={formik.handleChange}
                      name="tax"
                    />
                  </div>
                  <div className="third-columm">
                    <label>Discounts</label>
                    <br />
                    <input
                      required
                      type="number"
                      value={formik.values.discounts}
                      onChange={formik.handleChange}
                      name="discounts"
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
                  onClick={changeState}
                >
                  Discart
                </button>
              </div>
              <div className="btn">
                <button type="submit" className="save-btn">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  return null;
}
