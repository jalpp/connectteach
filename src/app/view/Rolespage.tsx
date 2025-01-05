'use client'

import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

// Mock data for testmakers, tutors, and notemakers
const users = [
  { id: 1, name: 'John Doe', description: 'Experienced tutor in Psychology', role: 'Tutor', rating: 4.5 },
  { id: 2, name: 'Jane Smith', description: 'Expert in Chemistry and Biology', role: 'Tutor', rating: 4.8 },
  { id: 3, name: 'Alice Johnson', description: 'Testmaker with years of experience', role: 'Testmaker', rating: 4.2 },
  { id: 4, name: 'Bob Brown', description: 'Notemaker specializing in Physics notes', role: 'Notemaker', rating: 4.7 },
  { id: 5, name: 'Charlie White', description: 'Testmaker for various subjects', role: 'Testmaker', rating: 4.9 },
  { id: 6, name: 'David Green', description: 'Experienced tutor in Biology', role: 'Tutor', rating: 4.3 },
  { id: 7, name: 'Eva Black', description: 'Notemaker for Psychology and History', role: 'Notemaker', rating: 4.6 },
];

const RolesPage: React.FC = () => {
  const [roleFilter, setRoleFilter] = useState<string>('All');
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  // Handle filtering based on role and rating
  const filteredUsers = users.filter((user) => {
    return (
      (roleFilter === 'All' || user.role === roleFilter) &&
      user.rating >= ratingFilter
    );
  });

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        List of Roles
      </Typography>

      {/* Filter Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <FormControl sx={{ width: 200 }}>
          <InputLabel>Role</InputLabel>
          <Select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            label="Role"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Tutor">Tutors</MenuItem>
            <MenuItem value="Testmaker">Testmakers</MenuItem>
            <MenuItem value="Notemaker">Notemakers</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200 }}>
          <InputLabel>Min Rating</InputLabel>
          <Select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            label="Min Rating"
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
            <MenuItem value={4.5}>4.5+</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Users Cards */}
      <Grid container spacing={4}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {user.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating: {user.rating} / 5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RolesPage;
