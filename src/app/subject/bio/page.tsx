import { NextPage } from 'next';
import { Stack} from '@mui/material';
import BiologyCoursesPage from './Biocoursepage';


/**
 * Main page of the Application
 * @page Home
 */
const BioPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <BiologyCoursesPage/>
    </Stack>
  );
};

export default BioPage;