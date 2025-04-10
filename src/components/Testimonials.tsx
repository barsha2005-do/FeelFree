import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'User',
    quote: 'FeelFree helped me through my darkest days. The listeners are amazing and truly care.',
    avatar: '👩'
  },
  {
    name: 'John D.',
    role: 'Listener',
    quote: 'Being a listener has been incredibly rewarding. I love helping others and making a difference.',
    avatar: '👨'
  },
  {
    name: 'Emma R.',
    role: 'User',
    quote: 'The community is so supportive. I found friends who understand what I\'m going through.',
    avatar: '👧'
  },
  {
    name: 'Michael T.',
    role: 'Listener',
    quote: 'The training and support for listeners is excellent. I feel prepared to help others.',
    avatar: '👨‍🦱'
  }
];

const Testimonials: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Real stories from our community
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, fontSize: '2rem' }}>
                      {testimonial.avatar}
                    </Avatar>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="div">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    "{testimonial.quote}"
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

export default Testimonials; 