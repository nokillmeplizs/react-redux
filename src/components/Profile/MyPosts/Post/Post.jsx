import React from 'react';
import s from './Post.module.css';

const Post = (props) => { 
  return (    
    <div className={s.item}>
      <img src="https://im0-tub-ru.yandex.net/i?id=295ce01e538c51628f1ab26134c9e456-l&n=13" alt=""></img>
      {props.message}
      <div>
        <span>like </span>{props.likesCount}
      </div>

    </div>
  );
}

export default Post;