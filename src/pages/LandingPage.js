import {
    useNavigate
} from 'react-router-dom';
import { Chip, Grid, useMediaQuery } from "@mui/material";
import { Box, margin } from "@mui/system";
import ArticleCard from "../components/ArticleCard";
import ListHeaders from "../components/ListHeaders";
import TopArticleCard from "../components/TopArticleCard";
import LatestArticles from '../data/LatestArticles.json';
import TopArticles from '../data/TopArticles.json';
import TreadingArticles from '../data/TreadingArticles.json';
import Tags from '../data/allTags.json';
import MobileCarousel from '../components/MobileCarousel';

export default function LandingPage() {
    const navigate = useNavigate();

    const goFullTopStories = () => {
        // go top stories full list
        navigate('/index/fullList/tops');
    }


    const goFullLatestArticles = () => {
        navigate('/index/fullList/latest');

    }

    const goTreadingArticles = () => {
        navigate('/index/fullList/treads');
    }

    const goSearchPage = () => {
        navigate('/search');
    }

    const renderMobileTopArticles = () => {
        // the max size is 3;
        return TopArticles.slice(0, 3).map(article => (<Grid xs={12} md={6} lg={4} sx={{ display: 'flex' }}>
            <TopArticleCard {...article}
                path="/tops/article"
            />
        </Grid>));
    }

    const renderDesktopTopArticles = (split) => {
        const nextTopArticles = [];
        for (let i = 0; i < TopArticles.length; i += split) {
            const temp = [];
            for (let j = i; j < i + split; j += 1) {
                temp.push(TopArticles[j]);
            }

            nextTopArticles.push(temp);
        }

        console.log("nextTopArticles: ", nextTopArticles);
        return nextTopArticles.map(group => {
            return <Grid item container>
                {group.map(article => <Grid xs item sx={{ display: 'flex' }}><TopArticleCard {...article}
                    path="/tops/article"
                />
                </Grid>
                )}
            </Grid>
        });
    }

    return <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
        <Grid item xs={12} md={12} lg={8}>
            <Grid >
                <ListHeaders text="トップ記事" hasMore={true} clickMore={goFullTopStories} />
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} sx={{ display: { xs: 'flex', md: 'none', lg: 'none' } }}>
                <MobileCarousel>
                    {renderMobileTopArticles()}
                </MobileCarousel>
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} sx={{ display: { xs: 'none', md: 'flex', lg: 'none' } }}>
                <MobileCarousel>
                    {renderDesktopTopArticles(2)}
                </MobileCarousel>
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                <MobileCarousel>
                    {renderDesktopTopArticles(3)}
                </MobileCarousel>
            </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
            <Grid>
                <ListHeaders text="新着記事" hasMore={true} clickMore={goFullLatestArticles} />
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
                {LatestArticles.map(article => (<Grid xs={12} md={6} lg={12} sx={{ display: 'flex' }}><ArticleCard {...article}
                    path="/latest/article"
                ></ArticleCard>
                </Grid>))}
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} sx={{ display: { xs: 'flex', md: 'none', lg: 'none' } }}>
                {LatestArticles.slice(0, 1).map(article => (<Grid xs={12} md={6} lg={12} sx={{ display: 'flex' }}><ArticleCard {...article}
                    path="/latest/article"
                ></ArticleCard>
                </Grid>))}
            </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
            <Grid>
                <ListHeaders text="トレッド" hasMore={true} clickMore={goTreadingArticles} />
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
                {TreadingArticles.map(article => (<Grid xs={12} md={6} lg={6} sx={{ display: 'flex' }}><ArticleCard {...article}
                    path="/treads/article"
                ></ArticleCard>
                </Grid>))}
            </Grid>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} sx={{ display: { xs: 'flex', md: 'none', lg: 'none' } }}>
                {TreadingArticles.slice(0, 1).map(article => (<Grid xs={12} md={6} lg={6} sx={{ display: 'flex' }}><ArticleCard {...article}
                    path="/treads/article"
                ></ArticleCard>
                </Grid>))}
            </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
            <Grid>
                <ListHeaders text="すべての分類" hasMore={true} clickMore={goSearchPage} />
            </Grid>
            <Grid>
                <Box>
                    {Tags.map(tag => <Chip key={tag} label={tag} sx={{ margin: 1 }}></Chip>)}
                </Box>
            </Grid>
        </Grid>
    </Grid>
}