import ArticleInterface from "../interface/articleInterface"

export default function Article({imgSource, author, title, body}: ArticleInterface) {
  return (
    <div className="article">
      <img src={imgSource} alt="" />
      <small>By {author}</small>
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
  )
}