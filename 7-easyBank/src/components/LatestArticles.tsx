import ArticlesData from "../data/ArticlesData";
import Article from "./Article";

export default function LatestArticles(){
  const currentArticles = ArticlesData.map(article => {
    return (
      <Article key={article.id} {...article} />
    )
  })

  return (
    <div className="articles">
      <div className="container">
        <h3>Latest Articles</h3>
        <div className="articles-flex">
          {currentArticles}
        </div>
      </div>
    </div>
  )
}