import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import SuccessPage from './components/SuccessPage';

// Create a romantic cyberpunk theme
const romanticTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff69b4',
    },
    secondary: {
      main: '#ff1493',
    },
    background: {
      default: '#1a001a',
      paper: '#2d002d',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 105, 180, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: '#ff69b4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ff69b4',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 105, 180, 0.7)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#ff69b4',
          },
        },
      },
    },
  },
});

const API_URL = 'https://grievance-corner.onrender.com' || 'http://localhost:5000';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    complaint: '',
    mood: '',
    remedy: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/submit-form`, formData);
      navigate('/success');
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send complaint. Please try again.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            background: 'linear-gradient(135deg, #2d002d 0%, #3d003d 100%)',
            border: '1px solid rgba(255, 105, 180, 0.1)',
            boxShadow: '0 0 20px rgba(255, 105, 180, 0.1)',
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{
              background: 'linear-gradient(45deg, #ff69b4 30%, #ff1493 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
              textShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
            }}
          >
            COMPLAINT PORTAL
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="TITLE"
              name="title"
              value={formData.title}
              onChange={handleChange}
              margin="normal"
              required
              placeholder="What are we calling this tiny tragedy?"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="WHAT'S BOTHERING YOU?"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              margin="normal"
              required
              multiline
              rows={3}
              placeholder="Spill the tea. I'm all ears (and judgment)."
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel sx={{ color: 'rgba(255, 105, 180, 0.7)' }}>MOOD</InputLabel>
              <Select
                name="mood"
                value={formData.mood}
                onChange={handleChange}
                required
                sx={{
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 105, 180, 0.23)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff69b4',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff69b4',
                  },
                }}
              >
                <MenuItem value="furious">😡 Furious</MenuItem>
                <MenuItem value="overit">😩 Over it</MenuItem>
                <MenuItem value="crying">😢 Crying in the club</MenuItem>
                <MenuItem value="meh">😐 Just meh</MenuItem>
                <MenuItem value="petty">😈 Petty mode activated</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="SUGGESTED REMEDY"
              name="remedy"
              value={formData.remedy}
              onChange={handleChange}
              margin="normal"
              required
              multiline
              rows={2}
              placeholder="What would make you feel better? Be as extra as you want. (e.g. 'A 3-hour rant session and a boba tea') 🍹"
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(45deg, #ff69b4 30%, #ff1493 90%)',
                color: 'white',
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                '&:hover': {
                  background: 'linear-gradient(45deg, #ff1493 30%, #ff69b4 90%)',
                  boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)',
                },
              }}
            >
              SUBMIT COMPLAINT
            </Button>
          </form>
        </Paper>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            background: 'linear-gradient(45deg, #2d002d 30%, #3d003d 90%)',
            color: '#ff69b4',
            '& .MuiAlert-icon': {
              color: '#ff69b4',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

function App() {
  return (
    <ThemeProvider theme={romanticTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 