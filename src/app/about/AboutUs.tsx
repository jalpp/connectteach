import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import { localClubData } from './about';
import { consURL } from './about';
const Aboutpage: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Avatar alt="C.O.R.E Logo" src="/core.webp" sx={{ width: 100, height: 100, margin: '0 auto 16px' }} />
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Empowering students and educators to achieve excellence
        </Typography>
        <Button variant="contained" color="success" size="medium" href={consURL}>
          View Constitution
        </Button>
      </Box>

      <Grid container spacing={4}>
        {localClubData.map((role, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Avatar alt={role.name} src={role.pic} sx={{ width: 100, height: 100, margin: '0 auto 16px' }} />
                <Typography variant="h5" gutterBottom>
                  {role.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {role.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {role.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

     
    </Box>
  );
};

export default Aboutpage;
