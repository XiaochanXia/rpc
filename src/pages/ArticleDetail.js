import PropTypes from 'prop-types';
import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function ArticleDetail(props) {
    const { publishTime, author, title, body } = props;

    const breadcrumbs = [
        <Link underline="hover" key="1" href="/" color="primary" onClick={handleClick}>
            ホーム
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="primary"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            トップ記事
        </Link>,
        <Typography key="3" color="text.primary">
            Breadcrumb
        </Typography>,
    ];
    return <Box>
        <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
            {publishTime} {author}
        </Typography>
        <div dangerouslySetInnerHTML={body}>
        </div>
    </Box>;
}

ArticleDetail.propTypes = {
    title: PropTypes.string,
    publishTime: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.body,
}
