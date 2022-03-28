import PropTyeps from 'prop-types';
import { Card, Typography, CardContent, CardMedia, Chip, Box, CardActionArea, CardActions, Button, Link } from '@mui/material';
import MiImage from '../assets/images/mi_img.png';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { idID } from '@mui/material/locale';

// TODO: add breakpont for font-size
export default function TopArticleCard(props) {
    const navigate = useNavigate();
    const { title, imgUrl, publishTime, author, tags = [], body, preBody, id } = props;

    const goArticleDetail = () => {
        navigate("/tops/article/" + id);
    }

    return <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        marginTop: 2,
        marginLeft: 3,
        marginBottom: 1
    }} >
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: { xs: 100, md: 100, lg: 200 },
            cursor: 'pointer'
        }}
            onClick={goArticleDetail}>
            <CardMedia
                component="img"
                image={MiImage}
                alt="Article Card Image"
            />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1" color="text.secondary">
                    {publishTime} <Link underline='hover'>{author}</Link>
                </Typography>
                <Link underline="hover"
                    color="secondary"
                    component={Typography}
                    variant="h5"
                    sx={{
                        '-webkit-line-clamp': '3',
                        '-webkit-box-orient': 'vertical',
                        wordBreak: 'break-all',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontWeight: 'bold',
                    }}
                    href={`/tops/article/${id}`}
                >{title}
                </Link>
                <Typography variant="body1" color="text.secondary"
                    sx={{
                        '-webkit-line-clamp': '2',
                        '-webkit-box-orient': 'vertical',
                        wordBreak: 'break-all',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                    mt={1}>
                    {preBody}
                </Typography>
            </CardContent>
            <CardActionArea>
                <CardActions>
                    <Button variant="contained"
                        color="secondary"
                        endIcon={<ArrowForward />}
                        onClick={goArticleDetail}>続きを読む</Button>
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
    id: PropTyeps.string,
    preBody: PropTyeps.string,
}