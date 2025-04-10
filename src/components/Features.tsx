import React from 'react';
import { Typography, Container, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const features = [
  {
    category: 'User Experience',
    items: [
      'Anonymous chatting',
      '24/7 availability',
      'Easy-to-use interface',
      'Secure messaging'
    ]
  },
  {
    category: 'Support Features',
    items: [
      'Professional listeners',
      'Community support',
      'Resource library',
      'Crisis intervention'
    ]
  },
  {
    category: 'Safety & Privacy',
    items: [
      'End-to-end encryption',
      'Anonymous profiles',
      'Content moderation',
      'Report system'
    ]
  },
  {
    category: 'Community',
    items: [
      'Support groups',
      'Success stories',
      'Community events',
      'Peer support'
    ]
  }
];

const Features: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Features
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Everything you need to find support and give support
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid key={index} xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.category}
                </Typography>
                <List>
                  {feature.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features; 