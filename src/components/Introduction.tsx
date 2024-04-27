import { Box } from "@mui/material";
import IntroductionImage from "./IntroductionElements/IntroductionImage";
import IntroductionStack from "./IntroductionElements/IntroductionStack";
import IntroductionText from "./IntroductionElements/IntroductionText";

const Introduction = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IntroductionText />
                <IntroductionImage />
            </Box>
            <Box sx={{ marginTop: '20%' }}
            >
                <IntroductionStack />
            </Box>
        </>
    );
}

export default Introduction;
