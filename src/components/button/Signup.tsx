import { Button, useTheme } from "@mui/material";

const Signup = () => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: "bold",
        fontFamily: "sans-serif",
        fontSize:17,
        borderRadius:'12px',
        p: "8px 14px",
        zIndex:2,
        "&:hover":{
            bgcolor:theme.palette.secondary[700]
        }
      }}
    >
      Sign up
    </Button>
  );
};

export default Signup;
