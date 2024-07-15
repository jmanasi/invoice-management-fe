import { createUseStyles } from "react-jss";

export default function InvoiceDetailsStyles() {
  const useStyles = createUseStyles({
    InvoiceDetails: {
      fontSize: "14px",
      maxWidth: "700px",
      minWidth: "450px",
      margin: "0 auto",
      transitionTimingFunction: "ease-in-out",
      "& .back": {
        border: "none",
        backgroundColor: "inherit",
        marginBottom: "30px",
        cursor: "pointer",

        "& i": {
          marginRight: "20px",
          color: "#7C5DFA",
          pointerEvents: "none",
        },
      },

      "& .bold": {
        fontWeight: "bold",
        fontSize: "18px",
        color: "#000",
        transition: "opacity 0.4s ease-in-out",
      },

      "& .option": {
        padding: "20px",
        backgroundColor: "#fff",
        alignItems: "center",
        marginBottom: "30px",
        borderRadius: "10px",
        transition: "opacity 0.4s ease-in-out",

        "& .btns": {
          "& button": {
            border: "none",
            padding: "15px 20px",
            borderRadius: "20px",
            marginLeft: "10px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "opacity 0.4s ease-in-out",
          },

          "& button:hover": {
            opacity: 0.8,
          },

          "& .edit": {
            backgroundColor: "rgb(249, 250, 254)",
            color: "rgb(126, 136, 195)",
          },

          "& .delete": {
            backgroundColor: " rgb(236, 87, 87)",
            color: "#fff",
          },
          "& .download": {
            backgroundColor: " rgb(55, 59, 83)",
            color: "#fff",
          },

          "& .paid": {
            backgroundColor: "rgb(124, 93, 250)",
            color: "#fff",
          },
        },

        "& .status-details": {
          display: "flex",
          alignItems: "center",

          "& .text": {
            marginRight: "20px",
          },

          "& .status": {
            padding: "10px 20px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "& span": {
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "20px",
              margin: {
                right: "10px",
              },
            },
          },
        },
      },

      "& .flexbox": {
        display: "flex",
        justifyContent: "space-between",
      },

      "& .invoice": {
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        transition: "opacity 0.4s ease-in-out",

        "& .header, & .body": {
          marginBottom: "50px",
        },

        "& .id span": {
          color: "#7C5DFA",
        },
        "& .date-due": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },

        "& .footer": {
          borderRadius: "10px",
          backgroundColor: "#F9FAFE",
          transition: "opacity 0.4s ease-in-out",
          "& .all-items, & .invoice-total": {
            padding: "20px",
          },

          "& .item-header": {
            marginBottom: "30px",
          },

          "& .item-header, & .item-details": {
            justifyContent: "space-between",
          },

          "& .wide": {
            width: "250px",
          },

          "& .small": {
            width: "90px",
          },

          "& .black": {
            color: "#000",
            transition: "opacity 0.4s ease-in-out",
          },
        },

        "& .title": {
          marginBottom: "5px",
        },

        " & .price": {
          textAlign: "right",
        },
      },

      //dark theme
      ".dark & .option .status-details .Draft": {
        color: "inherit",
        backgroundColor: "rgba(223, 227, 250, 0.06)",
        "& span": {
          backgroundColor: "#FFF",
        },
      },

      ".dark & .option, .dark & .invoice": {
        backgroundColor: "#1E2139",
      },

      ".dark & .bold": {
        color: "#fff",
      },

      ".dark & .invoice .footer": {
        backgroundColor: "#252945",
      },

      ".dark & .black": {
        color: "#fff !important",
      },

      ".dark & .invoice-total": {
        backgroundColor: "#0C0E16 !important",
      },

      ".dark & .back": {
        color: "#fff",
      },

      "@media screen and (max-width: 560px)": {
        "& .option": {
          flexWrap: "wrap",

          "& .btns": {
            marginTop: "20px",

            "& button": {
              marginLeft: "0 !important",
              marginRight: "10px",
            },
          },
        },
      },
    },
  });

  const classes = useStyles();

  return classes;
}
