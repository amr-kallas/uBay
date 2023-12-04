import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import regesterImg from "../../../assets/registration.png";
import logo from "../../../assets/logo.svg";
import Signup from "../../../components/button/Signup";
import Login from "../../../components/button/Login";
const Register = () => {
  const theme = useTheme();
  return (
    <Slide in dir="up" timeout={500}>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          m: "auto",
          minHeight: "100vh",
        }}
      >
        <Paper
          sx={{
            maxWidth: { xs: 1, sm: 670 },
            width: 1,
            bgcolor: "white",
            borderRadius: "12px",
            display: "flex",
            m: "auto",
            flexDirection: { xs: "column", sm: "row" },
            height: { xs: "100vh", sm: 1 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: 200, sm: 380 },
              borderRadius: { xs: "0", sm: "12px" },
              overflow: "hidden",
              flex: { xs: 1, sm: 1.6 },
            }}
          >
            <img
              src={regesterImg}
              style={{ height: "100%", objectFit: "fill", width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              flex: 2,
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: 3,
                mb: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ display: "flex" }}>
                u
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.primary.main, fontSize: 30 }}
                >
                  Bay
                </Typography>
              </Typography>
              <img style={{ width: 70 }} src={logo} />
            </Stack>
            <Typography sx={{ textAlign: "center" }}>
              Buy and sell what suits you, at the price that suits you
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                paddingLeft: "20px",
                width: "fit-content",
                m: "auto",
                mt: 3,
              }}
            >
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText
                  sx={{ span: { fontSize: "0.8rem  !important" } }}
                  primary="Post your used parts and ask for the best price for you."
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  p: 0,
                }}
              >
                <ListItemText
                  sx={{ span: { fontSize: "0.8rem  !important" } }}
                  primary="Browse the newly published pieces and react with them."
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  p: 0,
                }}
              >
                <ListItemText
                  sx={{ span: { fontSize: "0.8rem  !important" } }}
                  primary="Chat privately with other users and get the right deal for you."
                />
              </ListItem>
            </List>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "12px",
                marginBottom: "12px",
              }}
            >
              <Signup />
              <Login />
            </Box>
          </Box>
        </Paper>
      </Stack>
    </Slide>
  );
};

export default Register;
