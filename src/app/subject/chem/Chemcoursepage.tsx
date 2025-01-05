import React from 'react';

import SubjectCoursesPage from '../abstract/SubjectCoursepage';
import { Course } from '../abstract/course';

const courses: Course[] = [
  {
    code: 'CIO101',
    name: 'Introduction to Chem',
    instructor: 'Dr. Alice Smith',
    description: 'Learn the basics of Biology, including cell structure, DNA, and ecosystems.',
  },
  {
    code: 'CIO201',
    name: 'Carbon bonds',
    instructor: 'Dr. John Doe',
    description: 'Dive into the world of genetics and explore advanced topics like CRISPR and gene therapy.',
  },
  {
    code: 'CIO301',
    name: 'Chem 101',
    instructor: 'Dr. Jane Brown',
    description: 'Understand the principles of ecology and evolutionary biology through real-world examples.',
  },
];

const ChemCoursesPage: React.FC = () => {
  return (
    <SubjectCoursesPage courses={courses} subject='Chemistry'/>
  );
};

export default ChemCoursesPage;