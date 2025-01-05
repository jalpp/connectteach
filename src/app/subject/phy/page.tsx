import { NextPage } from 'next';
import { Stack} from '@mui/material';
import PhyCoursesPage from './Phycoursepage';


/**
 * Main page of the Application
 * @page Home
 */
const PhyPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <PhyCoursesPage/>
    </Stack>
  );
};

export default PhyPage;