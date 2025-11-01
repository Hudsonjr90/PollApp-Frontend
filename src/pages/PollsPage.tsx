import { useEffect, useState } from "react";
import { api } from "../api/api";
import type { Poll } from "../types";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Fade,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([]);

  const fetchPolls = async () => {
    const res = await api.get("/polls");
    setPolls(res.data);
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  const handleVote = async (pollId: string, optionId: string) => {
    const res = await api.post(`/polls/${pollId}/vote`, { optionId });
    // Atualiza localmente após votar
    setPolls((prev) =>
      prev.map((p) => (p.id === pollId ? res.data : p))
    );
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/polls/${id}`);
    setPolls((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {polls.length === 0 ? (
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center" 
          sx={{ py: 8, textAlign: 'center' }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: 'text.secondary' }}>
            Nenhuma enquete encontrada
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Crie sua primeira enquete para começar a coletar opiniões!
          </Typography>
          <Button 
            variant="contained" 
            component={Link} 
            to="/create"
            sx={{ mt: 2 }}
          >
            Criar Enquete
          </Button>
        </Box>
      ) : (
        polls.map((poll) => (
          <Fade in key={poll.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                p: 2,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">{poll.question}</Typography>
                  <Tooltip title="Excluir enquete">
                    <IconButton color="error" onClick={() => handleDelete(poll.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>

                <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                  {poll.options.map((opt) => (
                    <Button
                      key={opt.id}
                      variant="outlined"
                      onClick={() => handleVote(poll.id, opt.id)}
                    >
                      {opt.text} ({opt.votes})
                    </Button>
                  ))}
                </Stack>

                <Button
                  component={Link}
                  to={`/polls/${poll.id}`}
                  variant="text"
                  sx={{ mt: 2 }}
                >
                  Ver detalhes
                </Button>
              </CardContent>
            </Card>
          </Fade>
        ))
      )}
    </Box>
  );
}
