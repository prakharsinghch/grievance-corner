import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            background: 'linear-gradient(135deg, #112240 0%, #233554 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
            boxShadow: '0 0 20px rgba(33, 150, 243, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{
              background: 'linear-gradient(45deg, #2196f3 30%, #00bcd4 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
              textShadow: '0 0 10px rgba(33, 150, 243, 0.5)',
            }}
          >
            Alright, Nielja 💅
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Your grievance has been successfully delivered to Prakhar's Royal Inbox 💌
            <br />
            <br />
            He might get back to you after he's done dramatically sighing and pretending to be busy.
            <br />
            <br />
            <Typography
              component="span"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontStyle: 'italic',
              }}
            >
              (No promises, but hey—you tried.)
            </Typography>
          </Typography>

          <Button
            onClick={() => navigate('/contact')}
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #2196f3 30%, #00bcd4 90%)',
              color: 'white',
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              '&:hover': {
                background: 'linear-gradient(45deg, #00bcd4 30%, #2196f3 90%)',
                boxShadow: '0 0 20px rgba(33, 150, 243, 0.4)',
              },
            }}
          >
            Submit Another Drama 💖
          </Button>

          <Button
            onClick={() => navigate('/')}
            variant="text"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mt: 2,
              '&:hover': {
                color: '#2196f3',
                background: 'rgba(33, 150, 243, 0.1)',
              },
            }}
          >
            Return to Home
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default SuccessPage;