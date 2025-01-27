import { createUseStyles } from "react-jss";
export default function InvoiceStyles() {
  const useStyles = createUseStyles({
    Invoice: {
      padding: "15px 20px",
      backgroundColor: "white",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      border: "1px solid #fff",
      transition: "all 0.3s ease-in-out",

      "&:hover, .dark &:hover": {
        cursor: "pointer",
        border: "1px solid #7C5DFA",
      },

      ".dark &": {
        backgroundColor: "#1E2139",
        border: "1px solid #1E2139",
      },

      "& .details, & .price-status": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        // backgroundColor: "red",

        "& .Invoice-id": {
          fontWeight: "600",
          color: "#000",
          "& span": {
            color: "#7C5DFA",
          },
        },
      },

      ".dark & .Invoice-id, .dark & .Invoice-price": {
        color: "#fff !important",
      },

      ".dark & .Draft": {
        color: "inherit",
        backgroundColor: "rgba(223, 227, 250, 0.06)",
        "& span": {
          backgroundColor: "#FFF",
        },
      },

      "& .price-status": {
        width: "35%",
      },

      "& .Invoice-price": {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#000",
      },

      "& .Invoice-arrow": {
        color: "#7C5DFA",
      },

      "@media screen and (max-width: 730px)": {
        "& .details": {
          width: "350px",
        },

        "& .price-status": {
          width: "230px",
          marginLeft: "15px",

          "& .Invoice-status": {
            margin: "0 10px",
          },
        },
      },

      "@media screen and (max-width: 590px)": {
        "&": {
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",

          "& .Invoice-arrow": {
            display: "flex",
          },
        },
      },
    },
  });

  const classes = useStyles();
  return classes;
}
