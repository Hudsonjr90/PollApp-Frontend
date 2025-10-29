import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function Navbar() {
  const { pathname } = useLocation();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          PollApp
        </Typography>
        <Box display="flex" gap={2}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            disabled={pathname === "/"}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/polls"
            disabled={pathname.startsWith("/polls") && pathname !== "/polls/new"}
          >
            Minhas Enquetes
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/polls/new"
            disabled={pathname === "/polls/new"}
          >
            Criar Enquete
          </Button>
        </Box>
         <Box>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
