import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonDefault from '../../UI/button/ButtonDefault';

import s from './post.module.css'
const Post = (props) => {
    const router = useHistory   ()

    return (
        <div className={s.postWrapper}>  
            <div className={s.postContainer}>
                <h3 className={s.title}>{props.post.id}.{props.post.title}</h3>
                <p className={s.text}>{props.post.body}</p>
            </div>
            <div className={s.buttonWrapper}>
            <ButtonDefault onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</ButtonDefault>
            <ButtonDefault onClick={() => props.delete(props.post)}>Удалить</ButtonDefault>
            </div>

        </div>
    );
};

export default Post;