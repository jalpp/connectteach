import { NextPage } from 'next';
import { Stack} from '@mui/material';
import ChemCoursesPage from './Chemcoursepage';


/**
 * Main page of the Application
 * @page Home
 */
const ChemPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <ChemCoursesPage/>
    </Stack>
  );
};

export default ChemPage;