import { createUseStyles } from "react-jss";

export default function SidebarStyles() {
  const useStyles = createUseStyles({
    Sidebar: {
      zIndex: "4",
      backgroundColor: "#373B53",
      height: "100vh",
      width: "130px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      position: "fixed",

      "& .bottom-elements": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        height: "100px",
      },

      "@media screen and (max-width: 890px)": {
        "&": {
          height: "80px",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",

          "& .bottom-elements": {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0px",
            marginRight: "30px",
            width: "100px",
            height: "100%",
          },
        },
      },
    },
  });

  const classes = useStyles();
  return classes;
}
