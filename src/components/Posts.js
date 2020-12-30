import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { roll } from '../Random';
import Post from './Post';
import AnimationBlocks from './AnimationBlocks';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadPost, setLoadPost] = useState(false);
  const prePosts = [];
  let rngTab = [];
  roll(rngTab);

  useEffect(() => {
    for (let i = 0; i <= 99; i++) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${rngTab[i]}`)
        .then((res) => res.json())
        .then((json) => {
          prePosts.push(json);
          if (prePosts.length === 100) {
            setPosts(prePosts);
            setLoadPost(true);
          }
        });
    }
  }, []);

  return (
    <div className="posts-main">
      {!loadPost && <AnimationBlocks />}
      {loadPost && (
        <Link to="/" className="link-to-main">
          <i className="fas fa-arrow-left fa-2x"></i>
        </Link>
      )}
      {loadPost &&
        posts.map((post) => (
          <Post
            user={users.id}
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
    </div>
  );
}

export default Posts;
