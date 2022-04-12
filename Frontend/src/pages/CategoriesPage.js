import NavSection from '../components/NavSection/NavSection';
import CategoriesCards from './../components/CategoriesCards';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CategoriesPage() {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <Box pb={2}>
        <Box pl={2} mb={1}>
          <Typography variant="h5" color="text.primary">
            Categories
          </Typography>
        </Box>
        <CategoriesCards />
      </Box>
      <Footer />
    </Box>
  );
}
