import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Timeline from "./Timeline";
import Container from "@mui/material/Container";
import MapImage from "./Headshots/map.png";


export default function MapComponent() {

    return (
        <Box sx={{width: '100%', height: '100%'}}>
            <img style={{height: '75%', width: '75%', margin: 4}} src={MapImage}/>
        </Box>
    );
}
