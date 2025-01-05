import React from 'react';

import SubjectCoursesPage from '../abstract/SubjectCoursepage';
import { Course } from '../abstract/course';

const courses: Course[] = [
  {
    code: 'PhIO101',
    name: 'Introduction to Tesla',
    instructor: 'Dr. Alice Smith',
    description: 'Learn the basics of Biology, including cell structure, DNA, and ecosystems.',
  },
  {
    code: 'PhIO201',
    name: 'E=mc2',
    instructor: 'Dr. John Doe',
    description: 'Dive into the world of genetics and explore advanced topics like CRISPR and gene therapy.',
  },
  {
    code: 'PhIO301',
    name: 'Phy 101',
    instructor: 'Dr. Jane Brown',
    description: 'Understand the principles of ecology and evolutionary biology through real-world examples.',
  },
];

const PhyCoursesPage: React.FC = () => {
  return (
    <SubjectCoursesPage courses={courses} subject='Physics'/>
  );
};

export default PhyCoursesPage;