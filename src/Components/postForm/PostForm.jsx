import React, { useState } from 'react';
import ButtonDefault from '../../UI/button/ButtonDefault';
import DefaultInput from '../../UI/defaultInput/DefaultInput';


const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', text: '' })


    function addNewPost(e) {
        e.preventDefault()
        const newPost={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', text: '' })
    }

    // function searchPost(){
        
    // }
    return (
        <div>
            <form>
                    <DefaultInput placeholder='Заголовок поста' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type='text' />
                    <DefaultInput placeholder='Текст поста' value={post.text} onChange={e => setPost({ ...post, text: e.target.value })} type='text' />
                    <ButtonDefault onClick={addNewPost}>Создать пост</ButtonDefault>
                <hr style={{ margin: '18px 0px' }}></hr>
            </form>
        </div>
    );
};

export default PostForm;