import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { CreatePollPage } from "./pages/CreatePollPage";
import { PollDetailPage } from "./pages/PollDetailPage";
import { PollsPage } from "./pages/PollsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/polls" element={<PollsPage />} />
          <Route path="/polls/new" element={<CreatePollPage />} />
          <Route path="/polls/:id" element={<PollDetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
