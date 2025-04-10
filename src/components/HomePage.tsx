import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        sx={{ 
          minHeight: { xs: '60vh', md: '80vh' },
          py: { xs: 4, md: 0 }
        }}
      >
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              You're Not Alone
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 3, md: 4 }
              }}
            >
              Everyone deserves someone to talk to. Find your safe space with FeelFree.
            </Typography>
            <Box 
              sx={{ 
                mt: 4,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Button
                variant="contained"
                size={isMobile ? "medium" : "large"}
                color="primary"
                href="/download"
                fullWidth={isMobile}
              >
                Download App
              </Button>
              <Button
                variant="outlined"
                size={isMobile ? "medium" : "large"}
                color="primary"
                href="/become-listener"
                fullWidth={isMobile}
              >
                Become a Listener
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
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
                maxWidth: { xs: '80%', md: '100%' },
                mx: 'auto',
                display: 'block'
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage; 