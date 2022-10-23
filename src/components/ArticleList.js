import React from "react"
import Article from "./Article"

function ArticleList({posts}){
    console.log(posts)
    const articleLists = posts.map(post => {
        console.log(post)
        return(
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
        )
    })
    console.log(articleLists)
    return(
        <main>
            {articleLists}
        </main>
    )
}

export default ArticleList