import React, { useState } from 'react';
import ButtonDefault from '../../UI/button/ButtonDefault';
import DefaultInput from '../../UI/defaultInput/DefaultInput';


const PostForm = ({create, posts}) => {
    const [post, setPost] = useState({ title: '', body: '' })
    function addNewPost(e) {
        e.preventDefault()
        const newPost={
            ...post, id: posts.length + 0.1
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <div>
            <form>
                    <DefaultInput placeholder='Заголовок поста' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type='text' />
                    <DefaultInput placeholder='Текст поста' value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type='text' />
                    <ButtonDefault onClick={addNewPost}>Создать пост</ButtonDefault>
                <hr style={{ margin: '18px 0px' }}></hr>
            </form>
        </div>
    );
};

export default PostForm;