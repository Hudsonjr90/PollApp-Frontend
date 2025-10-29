import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export function PollForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", "", ""]);
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");

  const addOption = () => setOptions([...options, ""]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ question, startAt, endAt, options });
    setQuestion("");
    setOptions(["", "", ""]);
    setStartAt("");
    setEndAt("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Criar nova enquete
      </Typography>
      <TextField
        fullWidth
        label="Pergunta"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box display="flex" flexDirection="column" gap={1}>
        {options.map((opt, i) => (
          <TextField
            key={i}
            label={`Opção ${i + 1}`}
            value={opt}
            onChange={(e) =>
              setOptions(options.map((o, idx) => (idx === i ? e.target.value : o)))
            }
          />
        ))}
      </Box>
      <Button onClick={addOption} sx={{ mt: 1 }}>
        + Adicionar opção
      </Button>
      <TextField
        fullWidth
        type="datetime-local"
        label="Data de início"
        value={startAt}
        onChange={(e) => setStartAt(e.target.value)}
        sx={{ mt: 2 }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        type="datetime-local"
        label="Data de término"
        value={endAt}
        onChange={(e) => setEndAt(e.target.value)}
        sx={{ mt: 2 }}
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        Criar Enquete
      </Button>
    </Box>
  );
}
