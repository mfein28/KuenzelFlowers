import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Timeline from "./Timeline";
import Container from "@mui/material/Container";
import MapImage from "./Map";
import MapComponent from "./Map";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabNav() {
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: '100%'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="The Team" {...a11yProps(0)} />
                    <Tab label="Where's the Team?" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel style={{ padding: 0 }} value={value} index={0}>
                <Container>
                    <Box sx={{ my: 2 }}>
                        <Timeline/>
                    </Box>
                </Container>
            </CustomTabPanel>
            <CustomTabPanel style={{ padding: 0 }}  value={value} index={1}>
                <MapComponent/>
            </CustomTabPanel>
        </Box>
    );
}
