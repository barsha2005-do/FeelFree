import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account and tell us a bit about yourself',
    icon: '👋'
  },
  {
    title: 'Choose Your Path',
    description: 'Decide if you want to be a listener or find someone to talk to',
    icon: '🛣️'
  },
  {
    title: 'Connect',
    description: 'Get matched with someone who understands your needs',
    icon: '🤝'
  },
  {
    title: 'Start Talking',
    description: 'Begin your journey towards better mental well-being',
    icon: '💬'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        How It Works
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Simple steps to find your support system
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h1" sx={{ mb: 2 }}>
                    {step.icon}
                  </Typography>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks; 