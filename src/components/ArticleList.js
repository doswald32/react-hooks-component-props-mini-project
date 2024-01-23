import React from "react";
import blogData from "../data/blog";
import Article from "./Article"

const articleComponents = blogData.posts.map((post) => {
    return <Article key ={post.id} title={post.title} date={post.date} preview={post.preview}/>
})

function ArticleList() {
    return (
        <main>{articleComponents}</main>
    )
}

export default ArticleList