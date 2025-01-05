import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Course } from './course';
import {Button} from '@mui/material';
const SubjectCoursesPage: React.FC<{ subject: string; courses: Course[] }> = ({ subject, courses }) => {
    if (!courses || courses.length === 0) {
      return (
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4" color="error">
            No courses available for {subject}
          </Typography>
        </Box>
      );
    }
  
    return (
      <Box sx={{ padding: 4 }}>
        {/* Page Header */}
        <Typography variant="h3" gutterBottom>
          {subject} Courses
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Explore our range of {subject} courses designed to inspire and educate students.
        </Typography>
  
        {/* Courses Grid */}
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.code}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Course Code: {course.code}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Instructor: {course.instructor}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    {course.description}
                  </Typography>
                  <Button variant="contained" color="success" size="medium" href='/view'>
          View Roles
        </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default SubjectCoursesPage;
  