import PropTyeps from 'prop-types';
import { Card, Typography, CardContent, CardMedia, Chip, Box, CardActionArea, CardActions, Button } from '@mui/material';
import MiImage from '../assets/images/mi_img.png';
import { ArrowRight } from '@mui/icons-material';

// TODO: add breakpont for font-size
export default function TopArticleCard(props) {
    const { title, imgUrl, publishTime, author, tags = [] } = props;

    return <Card sx={{ display: 'flex', flexDirection: 'column', marginRight: 2, marginTop: 2 }}>
        <Box sx={{ display: 'flex', width: 200, height: 200 }}>
            <CardMedia
                component="img"
                image={MiImage}
                sx={{ width: 180, height: 180 }}
                alt="Article Card Image"
            />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                {/* <Box sx={{ paddingBottom: 2, paddingTop: 2 }}>
                    {tags.map(tag => <Chip key={tag} label={tag} size="xs" sx={{ marginRight: 1, marginTop: 1 }} />)}
                </Box> */}
                {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                    {publishTime} {author}
                </Typography> */}
            </CardContent>
            <CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary" endIcon={<ArrowRight />}>続きを読む</Button>
                </CardActions>
            </CardActionArea>
        </Box>
    </Card>
}

TopArticleCard.propsTypes = {
    title: PropTyeps.string,
    imgUrl: PropTyeps.string,
    publishTime: PropTyeps.string,
    author: PropTyeps.string,
    tags: PropTyeps.array,
}