import { useEffect, useState } from "react";
import { api } from "../api/api";
import type { Poll } from "../types";
import { io } from "socket.io-client";
import { Box, Typography, Button, Card, CardContent, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const socket = io("http://localhost:3000");

export function PollList() {
  const [polls, setPolls] = useState<Poll[]>([]);

  const fetchPolls = async () => {
    const res = await api.get<Poll[]>("/polls");
    setPolls(res.data);
  };

  useEffect(() => {
    fetchPolls();

    socket.onAny((event, data) => {
      if (event.startsWith("poll_") && event.endsWith("_update")) {
        setPolls((prev) =>
          prev.map((p) => (p.id === data.id ? data : p))
        );
      }
    });

    return () => {
      socket.offAny();
      socket.disconnect();
    };
  }, []);

  const handleVote = async (pollId: string, optionId: string) => {
    const res = await api.post(`/polls/${pollId}/vote`, { optionId });
    setPolls((prev) =>
      prev.map((p) => (p.id === res.data.id ? res.data : p))
    );
  };

  const handleDelete = async (pollId: string) => {
    await api.delete(`/polls/${pollId}`);
    setPolls((prev) => prev.filter((p) => p.id !== pollId));
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {polls.map((poll) => (
        <Card key={poll.id}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">{poll.question}</Typography>
              <IconButton onClick={() => handleDelete(poll.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Box>

            <Box mt={1}>
              {poll.options.map((opt) => (
                <Button
                  key={opt.id}
                  onClick={() => handleVote(poll.id, opt.id)}
                  variant="outlined"
                  sx={{ mr: 1 }}
                >
                  {opt.text} ({opt.votes})
                </Button>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
