import PropTypes from 'prop-types';
import { NavigateNext } from "@mui/icons-material";
import { Divider, Typography, Box } from "@mui/material";
import React from 'react';

export default function ListHeaders(props) {
    return <React.Fragment>
        <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'flex' }, flexGrow: 1, marginBottom: 1 }}>
            <Box><Typography variant="h5">{props.text}</Typography></Box>
            <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'flex' }, flexGrow: 1 }}></Box>
            <Box>
                {props.hasMore && <Typography
                    display="flex"
                    color="primary"
                >一覧へ <NavigateNext /></Typography>}
            </Box>
        </Box>
        <Divider />
    </React.Fragment>
}

ListHeaders.defaultProps = {
    text: '',
    hasMore: false,
}

ListHeaders.props = {
    text: PropTypes.string,
    hasMore: PropTypes.bool,
}