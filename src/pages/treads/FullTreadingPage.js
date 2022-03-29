import FullLists from '../../components/FullLists';
import TreadingArticles from '../../data/TreadingArticles.json';

export default function FullTreadingPage() {
    return <FullLists title="トレッド" articles={TreadingArticles} path="/index/treads/article" />;
}
