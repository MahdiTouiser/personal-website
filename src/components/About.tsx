import { Avatar, Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20%' }}>
            <Box sx={{ width: '400px', height: '300px' }}>
                <Avatar src={"/src/assets/about-img.jpg"} alt="About Image" sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10%' }} />
            </Box>
            <Box>
                <Typography>
                    ABOUT ME
                </Typography>
                <Typography>
                    Front-end Developer
                    based in Tehran, Iran 📍
                </Typography>
                <Typography>
                    Hey, my name is Mahdi, and I'm a Frontend Developer.
                </Typography>
                <Typography>
                    My passion is to create and develop a clean UI/UX for my users.
                </Typography>
                <Typography>
                    My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
                </Typography>
            </Box>
        </Box >
    );
};

export default About;
