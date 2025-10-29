import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { PollForm } from "../components/PollForm";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export function CreatePollPage() {
  const navigate = useNavigate();
  const [created, setCreated] = useState(false);

  const handleCreate = async (formData: any) => {
    await api.post("/polls", formData);
    setCreated(true);
    setTimeout(() => navigate("/polls"), 1200);
  };

  return (
    <>
      <PollForm onSubmit={handleCreate} />
      <Snackbar open={created} autoHideDuration={1200}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Enquete criada com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
}
