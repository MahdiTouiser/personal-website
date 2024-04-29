import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface NavbarProps {
    scrollToRef: {
        introductionRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        projectsRef: React.RefObject<HTMLDivElement>;
        contactRef: React.RefObject<HTMLDivElement>;

    };
}

const Navbar: React.FC<NavbarProps> = ({ scrollToRef }) => (
    <AppBar position="fixed" sx={{ backgroundColor: '#526D82', height: "auto" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', transition: 'color 0.3s' }}>
                MahdiTouiser.Dev
            </Typography>
            <div>
                <Typography component={RouterLink} to="/#home" onClick={() => scrollToRef.introductionRef.current?.scrollIntoView()} variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', marginRight: 4, transition: 'color 0.3s' }}>
                    Home
                </Typography>
                <Typography component={RouterLink} to="/#About" onClick={() => scrollToRef.aboutRef.current?.scrollIntoView()} variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', marginRight: 4, transition: 'color 0.3s' }}>
                    About
                </Typography>
                <Typography component={RouterLink} to="/#Projects" onClick={() => scrollToRef.projectsRef.current?.scrollIntoView()} variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', marginRight: 4, transition: 'color 0.3s' }}>
                    Projects
                </Typography>
                <Typography component={RouterLink} to="/#Contact" onClick={() => scrollToRef.contactRef.current?.scrollIntoView()} variant="button" sx={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit', marginRight: 4, transition: 'color 0.3s' }}>
                    Contact
                </Typography>
            </div>
        </Toolbar>
    </AppBar>
);

export default Navbar;
