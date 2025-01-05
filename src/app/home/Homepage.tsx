import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const Homepage: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to TutorApp
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Empowering students and educators to achieve excellence
        </Typography>
      </Box>

      {/* Roles Section */}
      <Grid container spacing={4}>
        {[
          { title: 'Students', description: 'Explore courses and track your learning journey.' },
          { title: 'Tutors', description: 'Share your knowledge and guide students.' },
          { title: 'Testmakers', description: 'Create and manage tests for students.' },
          { title: 'Notemakers', description: 'Organize and provide notes for courses.' },
        ].map((role, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {role.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {role.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Subjects Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" gutterBottom>
          Subjects We Offer
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: 'Biology', description: 'Discover the wonders of life and living organisms.', url: 'bio' },
            { title: 'Chemistry', description: 'Explore the science of matter and its interactions.', url: 'chem' },
            { title: 'Physics', description: 'Understand the laws that govern the universe.', url: 'phy' },
            { title: 'Psychology', description: 'Dive into the study of mind and behavior.', url: 'psy' },
          ].map((subject, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {subject.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {subject.description}
                  </Typography>
                  <Button variant="contained" color="success" size="medium" href={'/subject/' + subject.url}>
          View Courses
        </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', marginTop: 6 }}>
        <Typography variant="h5" gutterBottom>
          Ready to get started?
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/signup">
          Sign Up Now
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
