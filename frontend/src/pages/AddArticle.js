import '../css/AddArticle.css';
import ArticleEditor from '../components/ArticleEditor';


export default function AddArticle() {

    return (
        <div className="main">
            <div className="container">
                <div className="article_editor">
                    <ArticleEditor></ArticleEditor>
                </div>
            </div>
        </div>
    )
}
