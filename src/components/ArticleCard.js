import PropTyeps from 'prop-types';
import { Card, Typography, CardContent, CardMedia, Chip, Box, Link } from '@mui/material';
import MiImage from '../assets/images/mi_img.png';
import { useNavigate } from 'react-router-dom';
import TagsWrapper from './TagsWrapper';

// TODO: add breakpont for font-size
export default function ArticleCard(props) {
    const navigate = useNavigate();

    const { title, imgUrl, publishTime, author, tags = [], id, preBody, path } = props;

    const goDetail = () => {
        navigate(path + '/' + id);
    }

    const handleTagClick = (tag) => () => {
        console.log('tag');
    }

    const renderTag = (tag) => <Chip key={tag}
        label={tag}
        size="xs"
        onClick={handleTagClick(tag)}
        sx={{ marginRight: 1, marginTop: 1 }} />

    return <Card sx={{ display: 'flex', marginLeft: 2, marginTop: 1, marginBottom: 1, flex: '1 1 auto' }}
        onClick={goDetail}>
        <Box sx={{ display: 'flex', width: 200, height: 200, padding: 2, cursor: 'pointer' }}>
            <CardMedia
                component="img"
                image={MiImage}
                sx={{ width: 100, height: 100 }}
                alt="Article Card Image"
            />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Link component={Typography}
                    variant="h5"
                    color="secondary"
                    underline="hover"
                    href={`${path}/${id}`}
                    sx={{
                        '-webkit-line-clamp': '2',
                        '-webkit-box-orient': 'vertical',
                        wordBreak: 'break-all',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}>
                    {title}
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
                <TagsWrapper limitTags={3} tags={tags} renderTag={renderTag} />
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {publishTime}  <Link underline='hover'>{author}</Link>
                </Typography>
            </CardContent>
        </Box>
    </Card>
}

ArticleCard.propsTypes = {
    title: PropTyeps.string,
    imgUrl: PropTyeps.string,
    publishTime: PropTyeps.string,
    author: PropTyeps.string,
    tags: PropTyeps.array,
    id: PropTyeps.string,
    path: PropTyeps.string,
}