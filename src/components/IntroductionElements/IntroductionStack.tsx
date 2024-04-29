import { Box, Typography } from "@mui/material";

const IntroductionStack = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '20px', marginRight: '20px' }}>Tech Stack |</Typography>

            <Box sx={{ display: 'flex' }}>
                <Box>
                    <img src="././src/assets/htmlcss.svg" alt="HTML CSS" />
                </Box>
                <Box sx={{ marginLeft: '20px' }}>
                    <img src="././src/assets/jsts.svg" alt="JavaScript" />
                </Box>
                <Box sx={{ marginLeft: '20px' }} >
                    <img src="././src/assets/reactnext.svg" alt="React Next.js" />
                </Box>
                <Box sx={{ marginLeft: '20px' }}>
                    <img src="././src/assets/tailwindmui.svg" alt="Tailwind CSS MUI" />
                </Box>
            </Box>
        </Box>
    );
}

export default IntroductionStack;
