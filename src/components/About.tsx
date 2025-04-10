import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider
} from '@mui/material';
import { Psychology, Group, Favorite } from '@mui/icons-material';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & Clinical Psychologist',
    bio: 'Passionate about making mental health support accessible to everyone.',
    avatar: '/images/team/sarah-johnson.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Lead',
    bio: 'Building secure and user-friendly platforms for mental health support.',
    avatar: '/images/team/michael-chen.jpg'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Community Manager',
    bio: 'Creating safe spaces and fostering supportive communities.',
    avatar: '/images/team/emma-rodriguez.jpg'
  }
];

const About: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        About FeelFree
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Our mission to make mental health support accessible to all
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4} component="div">
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Psychology sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography color="text.secondary">
                We envision a world where everyone has access to emotional support and mental health resources, regardless of their background or circumstances.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} component="div">
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Group sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography color="text.secondary">
                To create a safe, anonymous platform that connects people in need with trained listeners who can provide emotional support and guidance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} component="div">
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Favorite sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography color="text.secondary">
                We believe in empathy, accessibility, privacy, and the power of human connection to heal and support.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Story
        </Typography>
        <Typography paragraph>
          FeelFree was born out of a simple observation: many people struggle with mental health issues but face barriers to accessing professional help. Whether it's cost, stigma, or availability, these barriers prevent people from getting the support they need.
        </Typography>
        <Typography paragraph>
          Our founder, Dr. Sarah Johnson, saw an opportunity to bridge this gap by creating a platform that connects people in need with trained listeners who can provide emotional support and guidance. What started as a small project has grown into a community of thousands of listeners and users, all working together to make mental health support more accessible.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index} component="div">
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar 
                  src={member.avatar}
                  sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About; 