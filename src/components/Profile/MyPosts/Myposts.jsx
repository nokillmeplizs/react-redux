import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/state'


const Myposts = (props) => {

  let postsElemets = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {    
    props.dispatch(addPostActionCreator());    
  }


  let onPostChange = () => {
    let text = newPostElement.current.value;
    //let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElemets}
      </div>
    </div>
  );
}

export default Myposts;