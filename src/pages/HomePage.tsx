import { Box, Typography, Button, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const samplePolls = [
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60",
    title: "Qual é o melhor sabor de pizza?",
  },
  {
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=60",
    title: "Seu estilo musical favorito?",
  },
  {
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
    title: "Ferramenta de design preferida?",
  },
];

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play do carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % samplePolls.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % samplePolls.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + samplePolls.length) % samplePolls.length);
  };

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
      
      {/* Carousel */}
      <Box 
        sx={{ 
          mt: 6, 
          position: 'relative', 
          maxWidth: 600, 
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <IconButton 
          onClick={prevSlide}
          sx={{ 
            position: 'absolute', 
            left: -20, 
            zIndex: 1,
            bgcolor: 'rgba(255,255,255,0.8)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": { boxShadow: 6 },
            width: '100%',
            maxWidth: 400
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image={samplePolls[currentSlide].image}
            alt={samplePolls[currentSlide].title}
          />
          <CardContent>
            <Typography variant="h6" fontWeight={500}>
              {samplePolls[currentSlide].title}
            </Typography>
          </CardContent>
        </Card>
        
        <IconButton 
          onClick={nextSlide}
          sx={{ 
            position: 'absolute', 
            right: -20, 
            zIndex: 1,
            bgcolor: 'rgba(255,255,255,0.8)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      
      {/* Indicadores */}
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
        {samplePolls.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: currentSlide === index ? '#1976d2' : '#e0e0e0',
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': { bgcolor: currentSlide === index ? '#1976d2' : '#bdbdbd' }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
