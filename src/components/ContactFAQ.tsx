import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from '@mui/material';
import { ExpandMore, Send } from '@mui/icons-material';

const faqs = [
  {
    question: 'How does FeelFree work?',
    answer: 'FeelFree connects people who need someone to talk to with trained listeners. You can chat anonymously and get support whenever you need it.'
  },
  {
    question: 'Is the service really anonymous?',
    answer: 'Yes, we take privacy seriously. All chats are anonymous, and we don\'t store any personal information that could identify you.'
  },
  {
    question: 'How do I become a listener?',
    answer: 'You can apply to become a listener through our "Become a Listener" page. We provide training and support to help you help others.'
  },
  {
    question: 'Is FeelFree free to use?',
    answer: 'Yes, FeelFree is completely free for users. Our listeners are volunteers who want to make a difference in people\'s lives.'
  },
  {
    question: 'What kind of support can I expect?',
    answer: 'Our listeners provide emotional support, active listening, and resources. They are not professional therapists but are trained to provide compassionate support.'
  }
];

const ContactFAQ: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Contact Us & FAQs
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Send us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<Send />}
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactFAQ; 