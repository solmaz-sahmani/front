import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#9a8c98"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#8d99ae"
    },
    text: {
      primary: "#2b2d42"
    }
  }
});

const Theme = () => {
  const [light, setLight] = React.useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight((prev) => !prev)}>change bg color</Button>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Theme />, rootElement);

export default Theme;