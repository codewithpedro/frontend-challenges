import ArticleInterface from "../interface/ArticleInterface"

export default function Article({imgSource, author, title, body}: ArticleInterface) {
  return (
    <div className="article">
      <img src={imgSource} alt="" />
      <div className="container">
        <small>By {author}</small>
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
    </div>
  )
}