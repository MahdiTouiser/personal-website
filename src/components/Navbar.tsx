import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#526D82' }}>
            <Toolbar>
                <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', flexGrow: 1 }}>
                    MahdiTouiser.Dev
                </Typography>
                <Typography component={RouterLink} to="/#home" variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', marginRight: 4, transition: 'color 0.3s' }}>
                    Home
                </Typography>
                <Typography component={RouterLink} to="/#about" variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', marginRight: 4, transition: 'color 0.3s' }}>
                    About
                </Typography>
                <Typography component={RouterLink} to="/#projects" variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', marginRight: 4, transition: 'color 0.3s' }}>
                    Projects
                </Typography>
                <Typography component={RouterLink} to="/#contact" variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', transition: 'color 0.3s' }} className="hover:text-gray-300">
                    Contact
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
