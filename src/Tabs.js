import PropTypes from 'prop-types';
import {
    Tabs as MuiTabs,
    Tab as MuiTab
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import {
    Link,
    matchPath,
    useLocation,
} from 'react-router-dom';

const StyledTabs = styled((props) => (
    <MuiTabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#ffffff',
    },
});

const StyledTab = styled((props) => <MuiTab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        color: alpha(theme.palette.common.white, 0.7),
        '&.Mui-selected': {
            color: theme.palette.common.white,
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        if (pathname.includes(pattern)) {
            return pattern;
        }
    }

    return null;
}

export default function Tabs(props) {
    // You need to provide the routes in descendant order.
    // This means that if you have nested routes like:
    // users, users/new, users/edit.
    const routePaths = props.routes.map(route => route.value);
    const currentTab = useRouteMatch(routePaths);

    return (
        <StyledTabs
            value={currentTab}
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="full width tabs example"
        >
            {
                props.routes.map((config, index) => (
                    <StyledTab label={config.label}
                        key={config.value}
                        value={config.value}
                        to={config.value}
                        component={Link}
                        {...a11yProps(index)} />
                ))
            }
        </StyledTabs>
    );
}

Tabs.propType = {
    routes: PropTypes.array,
}