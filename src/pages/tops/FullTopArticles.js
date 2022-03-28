import FullLists from '../../components/FullLists';
import TopArticles from '../../data/TopArticles.json';

export default function FullTopArticles() {
    return <FullLists title="トップ記事" articles={TopArticles}  path="/tops/article"  />;
}
