import { useParams } from "react-router-dom";
import { Link, Typography, Box } from '@mui/material';
import ArticleDetail from "../../components/ArticleDetail";
import AllArticles from '../../data/AllArticles.json';

export default function TreadingArticleDetailPage() {
    const { id } = useParams();

    const article = AllArticles.filter(article => article.id === id)[0];

    const breadcrumbs = [
        <Link underline="hover" key="1" href="/index" color="primary" noWrap>
            ホーム
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="primary"
            href="/index/fullList/treads"
            noWrap
        >
            トレッド
        </Link>,
        <Typography key="3" color="text.primary" sx={{
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical',
            wordBreak: 'break-all',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }}>
            {article.title}
        </Typography>,
    ];

    return <ArticleDetail breadcrumbs={breadcrumbs} article={article} />;
}