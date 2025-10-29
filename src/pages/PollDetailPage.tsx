import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import type { Poll } from "../types";
import { Box, Typography } from "@mui/material";
import { io } from "socket.io-client";
import { PollChart } from "../components/PollChart";

const socket = io("http://localhost:3000");

export function PollDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [poll, setPoll] = useState<Poll | null>(null);

  useEffect(() => {
    const fetchPoll = async () => {
      const res = await api.get(`/polls/${id}`);
      setPoll(res.data);
    };
    fetchPoll();

    socket.on(`poll_${id}_update`, (updated) => setPoll(updated));

    return () => {
      socket.off(`poll_${id}_update`);
      socket.disconnect();
    };
  }, [id]);

  if (!poll) return <Typography>Carregando...</Typography>;

  return (
    <Box>
      <Button
        variant="outlined"
        sx={{ mt: 4 }}
        onClick={() => navigate("/polls")}
      >
        Voltar
      </Button>
      <Typography variant="h5" sx={{ mb: 6, textAlign: 'center', mt: 6 }}>
        {poll.question}
      </Typography>
      <PollChart poll={poll} />
    </Box>
  );
}
