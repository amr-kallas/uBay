import { ThemeProvider as ThemeProviders } from "@mui/material";
import theme from "../constant/theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProviders theme={theme}>{children}</ThemeProviders>;
};

export default ThemeProvider;
