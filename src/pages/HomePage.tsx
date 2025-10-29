import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// const samplePolls = [
//   {
//     image: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=800&q=60",
//     title: "Qual é o melhor sabor de pizza?",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=60",
//     title: "Seu estilo musical favorito?",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1573164574396-9d4910e21f6c?auto=format&fit=crop&w=800&q=60",
//     title: "Ferramenta de design preferida?",
//   },
// ];

export function HomePage() {
  return (
    <Box textAlign="center" mt={12}>
      <Typography variant="h3" gutterBottom fontWeight={600}>
        Bem-vindo ao <span style={{ color: "#1976d2" }}>PollApp</span>
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={4}>
        Crie, vote e acompanhe enquetes em tempo real com uma experiência moderna.
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="primary"
        component={Link}
        to="/polls/new"
        sx={{ px: 5, py: 1.5, borderRadius: 10 }}
      >
        Criar enquete
      </Button>
      {/* <Grid container spacing={3} mt={6}>
        {samplePolls.map((poll, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={poll.image}
                alt={poll.title}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={500}>
                  {poll.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}
