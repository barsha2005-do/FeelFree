import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              You're Not Alone
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Everyone deserves someone to talk to. Find your safe space with FeelFree.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ mr: 2 }}
                href="/download"
              >
                Download App
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                href="/become-listener"
              >
                Become a Listener
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src="/hero-image.png"
              alt="Supportive community"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage; 