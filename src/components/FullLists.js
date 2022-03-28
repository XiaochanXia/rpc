import { Grid, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

export default function FullLists(props) {
    const { title, articles = [], path } = props;

    return <Box>
        <Typography variant='h3'>{title}</Typography>
        <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}>
            {articles.map(article => (<Grid xs={12} md={6} lg={6}><ArticleCard {...article}
                path={path}
            ></ArticleCard>
            </Grid>))}
        </Grid>
    </Box>

}

FullLists.propTyeps = {
    title: PropTypes.string,
    articles: PropTypes.array,
    path: PropTypes.string,
}