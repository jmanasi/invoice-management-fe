import { createUseStyles } from "react-jss";

const DashboardStyles = createUseStyles({
  InvoiceDetails: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  dashboardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  firstColumn: {
    flex: 1,
  },

  newInvoiceBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
  },
  dashboardTotals: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  totalsWrapper: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    marginTop: "20px",
  },
  totalItem: {
    backgroundColor: "#373B53",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    flex: 1,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  "@media screen and (max-width: 730px)": {
    totalsWrapper: {
      flexDirection: "column",
      alignItems: "center",
    },
    totalItem: {
      marginBottom: "20px",
    },
  },
});

export default DashboardStyles;
