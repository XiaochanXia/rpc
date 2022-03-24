import { Chip, Grid } from "@mui/material";
import { Box, margin } from "@mui/system";
import ArticleCard from "../components/ArticleCard";
import ListHeaders from "../components/ListHeaders";
import TopArticleCard from "../components/TopArticleCard";
import LatestArticles from '../data/LatestArticles.json';
import TopArticles from '../data/TopArticles.json';
import TreadingArticles from '../data/TreadingArticles.json';
import Tags from '../data/allTags.json';

export default function LandingPage() {
    return <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
        <Grid item xs={12} md={12} lg={8} container>
            <Grid xs={12} md={12} lg={12}>
                <ListHeaders text="トップ記事" hasMore={true} />
            </Grid>
            {TopArticles.map(article => (<Grid xs={12} md={6} lg={4}>
                <TopArticleCard title={article.title}
                    publishTime={article.publishTime}
                    author={article.author}
                    imgUrl={article.imgUrl}
                    tags={article.tags}
                />
            </Grid>))}
        </Grid>
        <Grid item xs={12} md={12} lg={4} container>
            <Grid xs={12} md={12} lg={12}>
                <ListHeaders text="新着記事" hasMore={true} />
            </Grid>
            {LatestArticles.map(article => (<Grid xs={12} md={12} lg={12}><ArticleCard title={article.title}
                publishTime={article.publishTime}
                author={article.author}
                imgUrl={article.imgUrl}
                tags={article.tags}
            ></ArticleCard>
            </Grid>))}
        </Grid>
        <Grid item xs={12} md={12} lg={8} container>
            <Grid xs={12} md={12} lg={12}>
                <ListHeaders text="トレッド" hasMore={true} />
            </Grid>
            {TreadingArticles.map(article => (<Grid xs={12} md={6} lg={6}><ArticleCard title={article.title}
                publishTime={article.publishTime}
                author={article.author}
                imgUrl={article.imgUrl}
                tags={article.tags}
            ></ArticleCard>
            </Grid>))}
        </Grid>
        <Grid item xs={12} md={12} lg={4} container>
            <Grid xs={12} md={12} lg={12}>
                <ListHeaders text="すべての分類" hasMore={true} />
            </Grid>
            <Grid xs={12} md={12} lg={12}>
                <Box>
                    {Tags.map(tag => <Chip key={tag} label={tag} sx={{ margin: 1 }}></Chip>)}
                </Box>
            </Grid>
        </Grid>
    </Grid>
}