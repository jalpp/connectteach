'use client';

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export interface Tutor {
  id: number;
  name: string;
  description: string;
  role: 'Tutor';
  rating: number;
  meetingid: string;
  tips: string;
  notes: string[];
  tests: string[];
}

const users: Tutor[] = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Experienced tutor in Psychology',
    role: 'Tutor',
    rating: 4.5,
    meetingid: '123-456',
    tips: 'Practice regularly.',
    notes: ['Note 1', 'Note 2'],
    tests: ['Test 1', 'Test 2'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'Expert in Chemistry and Biology',
    role: 'Tutor',
    rating: 4.8,
    meetingid: '789-012',
    tips: 'Focus on understanding concepts.',
    notes: ['Note A', 'Note B'],
    tests: ['Test A', 'Test B'],
  },
  {
    id: 6,
    name: 'David Green',
    description: 'Experienced tutor in Biology',
    role: 'Tutor',
    rating: 4.3,
    meetingid: '345-678',
    tips: 'Review class material daily.',
    notes: ['Note X', 'Note Y'],
    tests: ['Test X', 'Test Y'],
  },
];

const RolesPage: React.FC = () => {
  const [roleFilter, setRoleFilter] = useState<string>('All');
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

  const filteredUsers = users.filter((user) => {
    return (
      (roleFilter === 'All' || user.role === roleFilter) &&
      user.rating >= ratingFilter
    );
  });

  const renderStars = (rating: number) => {
    return (
      <Box>
        {[...Array(5)].map((_, index) =>
          index < Math.round(rating) ? (
            <StarIcon key={index} color="primary" />
          ) : (
            <StarBorderIcon key={index} color="disabled" />
          )
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        List of Roles
      </Typography>

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

      <Grid container spacing={4}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => setSelectedTutor(user)}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {user.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating: {renderStars(user.rating)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedTutor && (
        <Dialog open={!!selectedTutor} onClose={() => setSelectedTutor(null)} maxWidth="sm" fullWidth>
          <DialogTitle>
            {selectedTutor.name}
            <IconButton
              aria-label="close"
              onClick={() => setSelectedTutor(null)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="subtitle1">Meeting ID: {selectedTutor.meetingid}</Typography>
            <Typography variant="subtitle1">Description:</Typography>
            <Typography variant="body2" gutterBottom>
              {selectedTutor.description}
            </Typography>

            <Typography variant="subtitle1">Rating:</Typography>
            {renderStars(selectedTutor.rating)}

            <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
              Tips:
            </Typography>
            <Typography variant="body2" gutterBottom>
              {selectedTutor.tips}
            </Typography>

            <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
              Notes:
            </Typography>
            <ul>
              {selectedTutor.notes.map((note, index) => (
                <li key={index}>
                  <Typography variant="body2">{note}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
              Tests:
            </Typography>
            <ul>
              {selectedTutor.tests.map((test, index) => (
                <li key={index}>
                  <Typography variant="body2">{test}</Typography>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default RolesPage;
