import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#ff9800" },
    background: { default: "#f5f6fa", paper: "#ffffff" },
    text: { primary: "#111", secondary: "#555" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: { default: "#0f0f0f", paper: "#1a1a1a" },
    text: { primary: "#f5f5f5", secondary: "#bbb" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
});
