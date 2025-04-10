import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Psychology, Support, Group } from '@mui/icons-material';

const requirements = [
  '18 years or older',
  'Good communication skills',
  'Empathetic and non-judgmental',
  'Commitment to helping others',
  'Basic understanding of mental health'
];

const benefits = [
  'Make a real difference in people\'s lives',
  'Flexible volunteering hours',
  'Training and support provided',
  'Join a supportive community',
  'Personal growth and development'
];

const BecomeListener: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Become a Listener
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Make a difference in someone's life today
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Requirements
              </Typography>
              <List>
                {requirements.map((req, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={req} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Benefits
              </Typography>
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{ px: 4, py: 2 }}
        >
          Apply Now
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Psychology sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Training
              </Typography>
              <Typography color="text.secondary">
                Comprehensive training program to prepare you for supporting others
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Support sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Support
              </Typography>
              <Typography color="text.secondary">
                Ongoing support and supervision from experienced professionals
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Group sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Community
              </Typography>
              <Typography color="text.secondary">
                Join a community of like-minded individuals making a difference
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BecomeListener; 