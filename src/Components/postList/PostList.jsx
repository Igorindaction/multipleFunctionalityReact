import PostItem from 'Components/post/PostItem';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loader from 'UI/loader/Loader';
import './../../App.css'

const postList = ({sortedAndSearchedPosts, removePost}) => {
    return (
        <div>
      { sortedAndSearchedPosts.length !== 0 
        && <TransitionGroup>
          {sortedAndSearchedPosts.map( (post, index) =>
            <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post">
              <PostItem post={post} key={post.id} number={index + 1} delete={removePost}/>
            </CSSTransition>
          )}
          </TransitionGroup>
        
      }            
        </div>
    )
}



export default postList;