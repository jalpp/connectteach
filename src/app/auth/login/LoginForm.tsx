'use client';
import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface LoginOptions {
  stage: string;
}

 const StageForm: React.FC<LoginOptions> = ({stage}) => {
  const [role, setRole] = useState('Student'); // Default to Student role
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = () => {
    // TODO: Implement signup logic here (e.g., API call)
    console.log('Signing up:', { name, email, password, role });

    // Redirect after signup
    router.replace('/');
  };

  return (
    <Box sx={{ maxWidth: 700, margin: 'auto', padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        {stage}
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormControl>
          <Typography variant="h6" gutterBottom>
            Select Role
          </Typography>
          <RadioGroup
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <FormControlLabel value="Student" control={<Radio />} label="Student" />
            <FormControlLabel value="Tutor" control={<Radio />} label="Tutor" />
            <FormControlLabel value="Notemaker" control={<Radio />} label="Notemaker" />
            <FormControlLabel value="Testmaker" control={<Radio />} label="Testmaker" />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
};

export default StageForm;
