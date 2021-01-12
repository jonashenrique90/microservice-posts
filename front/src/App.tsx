import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App:React.FC = () => {

  return (
    <div className="container">
      <h1 className="title">Criar Post</h1>
      <PostCreate></PostCreate>
      <hr/>
      <h1>Posts</h1>
      <PostList></PostList>
    </div>
  );
}

export default App;
