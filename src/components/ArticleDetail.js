import PropTypes from 'prop-types';
import { Typography, Box, Breadcrumbs, styled } from "@mui/material";
import { NavigateNext } from '@mui/icons-material';
import TagsWrapper from './TagsWrapper';

const StyledBreadcrumbs = styled(Breadcrumbs)`
  & .MuiBreadcrumbs-ol {
    border-radius: 1px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    -webkit-box-align: center;
  }
`;

export default function ArticleDetail(props) {
    const { article, breadcrumbs } = props;

    const { title, body, publishTime, author, tags } = article;
    const decodedBody = decodeURI(body);

    return <Box sx={{ marginLeft: 5, marginRight: 5 }}>
        <StyledBreadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </StyledBreadcrumbs>
        <Box sx={{ marginTop: 2 }}>
            <article className='article'>
                <header><Typography variant="h4">{title}</Typography></header>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {publishTime} {author}
                </Typography>
                <TagsWrapper tags={tags} />
                <img loading="lazy" width="2235" height="1341" src="https://media.fintos.jp/image/iStock-576566188.jpg" alt="" />
                <div className='article-body' dangerouslySetInnerHTML={{ __html: decodedBody }}>
                </div>
            </article>
        </Box>
    </Box>;
}

ArticleDetail.propTypes = {
    article: PropTypes.object,
    breadcrumbs: PropTypes.node,
}