import PropTypes from 'prop-types';
import { NavigateNext } from "@mui/icons-material";
import { Divider, Typography, Box, Button } from "@mui/material";
import React from 'react';

export default function ListHeaders(props) {
    return <React.Fragment>
        <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'flex' }, flexGrow: 1, marginBottom: 1 }}>
            <Box><Typography variant="h5" sx={{ fontWeight: 'bold' }}>{props.text}</Typography></Box>
            <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'flex' }, flexGrow: 1 }}></Box>
            <Box>
                {props.hasMore && <Button
                    color="primary"
                    variant="text"
                    onClick={props.clickMore}
                    disableFocusRipple
                    disableElevation
                    disableRipple
                    endIcon={<NavigateNext />}
                >一覧へ</Button>}
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
    clickMore: PropTypes.func,
}