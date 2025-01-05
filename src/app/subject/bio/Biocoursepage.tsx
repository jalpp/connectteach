import React from 'react';

import SubjectCoursesPage from '../abstract/SubjectCoursepage';
import { Course } from '../abstract/course';

const courses: Course[] = [
  {
    code: 'BIO101',
    name: 'Introduction to Biology',
    instructor: 'Dr. Alice Smith',
    description: 'Learn the basics of Biology, including cell structure, DNA, and ecosystems.',
  },
  {
    code: 'BIO201',
    name: 'Advanced Genetics',
    instructor: 'Dr. John Doe',
    description: 'Dive into the world of genetics and explore advanced topics like CRISPR and gene therapy.',
  },
  {
    code: 'BIO301',
    name: 'Ecology and Evolution',
    instructor: 'Dr. Jane Brown',
    description: 'Understand the principles of ecology and evolutionary biology through real-world examples.',
  },
];

const BiologyCoursesPage: React.FC = () => {
  return (
    <SubjectCoursesPage courses={courses} subject='Biology'/>
  );
};

export default BiologyCoursesPage;
