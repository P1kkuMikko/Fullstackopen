const fs = require('fs')

const getBlogs = () => {
  const data = fs.readFileSync('blogitesti/db.json', 'utf8')
  return JSON.parse(data).blogs
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  return blogs.reduce((favorite, blog) => {
    return (favorite.likes > blog.likes) ? favorite : blog
  }, blogs[0])
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  const authorCounts = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + 1
    return counts
  }, {})

  const maxAuthor = Object.keys(authorCounts).reduce((max, author) => {
    return (authorCounts[author] > authorCounts[max]) ? author : max
  })

  return {
    author: maxAuthor,
    blogs: authorCounts[maxAuthor]
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  const authorLikes = blogs.reduce((likes, blog) => {
    likes[blog.author] = (likes[blog.author] || 0) + blog.likes
    return likes
  }, {})

  const maxAuthor = Object.keys(authorLikes).reduce((max, author) => {
    return (authorLikes[author] > authorLikes[max]) ? author : max
  })

  return {
    author: maxAuthor,
    likes: authorLikes[maxAuthor]
  }
}

module.exports = {
  getBlogs,
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}