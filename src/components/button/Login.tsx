import { Button, useTheme } from "@mui/material";

const Login = () => {
  const theme = useTheme();
  return (
    <Button
      //   variant="contained"
      sx={{
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: theme.palette.primary.main,
        bgcolor: "#f1f1f1",
        p: "8px 14px",
        fontSize: 17,
        borderRadius: '12px',
        position: "relative",
        left: "-5px",
        "&:hover":{
            color:theme.palette.secondary[700]
        }
      }}
    >
      Login
    </Button>
  );
};

export default Login;
