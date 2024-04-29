import { Avatar, Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20%' }}>
            <Box sx={{ width: '400px', height: '300px' }}>
                <Avatar src={"/src/assets/about-img.jpg"} alt="About Image" sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10%' }} />
            </Box>
            <Box sx={{ flex: 1, marginLeft: '2rem' }}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                    ABOUT ME
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold', lineHeight: '1.2' }}>
                    Front-end Developer<br />
                    based in Tehran, Iran 📍
                </Typography>

                <Typography variant="body1" paragraph sx={{ textAlign: 'left', color: '#9DB2BF', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    <span style={{ fontWeight: 'bold' }}>Hey, my name is Mahdi, and I'm a Frontend Developer.</span><br />
                    <span style={{ fontStyle: 'italic' }}>My passion is to create and develop a clean UI/UX for my users.</span>
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'left', color: '#9DB2BF', fontSize: '1rem', lineHeight: '1.6' }}>
                    My main stack currently is <span style={{ fontWeight: 'bold' }}>React/Next.js</span> in combination with<br />
                    <span style={{ fontWeight: 'bold' }}>Tailwind CSS</span> and <span style={{ fontWeight: 'bold' }}>TypeScript</span>.
                </Typography>


            </Box>
        </Box >
    );
};

export default About;
