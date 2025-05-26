import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196f3 30%, #00bcd4 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 20px rgba(33, 150, 243, 0.5)',
}));

const GlowButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196f3 30%, #00bcd4 90%)',
  border: 0,
  borderRadius: 30,
  color: 'white',
  padding: '15px 40px',
  fontSize: '1.2rem',
  textTransform: 'none',
  boxShadow: '0 0 20px rgba(33, 150, 243, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 30px rgba(33, 150, 243, 0.5)',
    transform: 'translateY(-2px)',
    background: 'linear-gradient(45deg, #00bcd4 30%, #2196f3 90%)',
  },
}));

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a1929 0%, #112240 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <GradientText
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 'bold',
              mb: 4,
              letterSpacing: '0.1em',
              color: 'white',
            }}
          >
            Hi Nielja ^_^
          </GradientText>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: '0 0 10px rgba(33, 150, 243, 0.3)',
            }}
          >
            Welcome to the Official Complaint Corner
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: '0 0 10px rgba(33, 150, 243, 0.3)',
            }}
          >
            Feel free to drop your exaggerated, barely-valid issues here. I’ll read them all with a lovingly judgmental smile.
          </Typography>
       
          <GlowButton
            onClick={() => navigate('/contact')}
            size="large"
          >
            START COMPLAINING HERE...
          </GlowButton>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 6,
              fontSize : '1rem'
            }}
          >
            *made with pure hate :)
          </Typography>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;