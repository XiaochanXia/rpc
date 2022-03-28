import FullLists from '../../components/FullLists';
import LatestArticles from '../../data/LatestArticles.json';

export default function FullLatestArticles() {
    return <FullLists title="新着記事"
        articles={LatestArticles}
        path="/latest/article" />;
}
