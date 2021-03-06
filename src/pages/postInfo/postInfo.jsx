import PostService from 'API/postService';
import { useFetching } from 'hooks/useFetching';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'UI/loader/Loader';

const PostInfo = () => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const params = useParams()


    const [openPost, isLoading, postError] = useFetching( async() => {
        // @ts-ignore
        const response = await PostService.getPageInfo(params.id)
        setPost(response.data);
    })    
    const [showComments, isComLoading, comError] = useFetching( async() => {
        const response = await PostService.getPostComments(params.id)
        setComments(response.data);
    })
    useEffect(() => {
        // @ts-ignore
        openPost(params.id)
        // @ts-ignore
        showComments(params.id)
      }, [])  

    return (
        <div>
            <h1 style={{textAlign: "center", marginTop: "10px"}}>Вы перешли на страницу юзера {params.id}</h1>
            {isLoading 
                ? <Loader/> 
                : <div>
                    <h2 style={{'marginTop': '20px', marginBottom: "15px" }}>Информация:</h2>
                    <p><strong>Заголовок</strong>: {post.title}</p>
                    <p><strong>Содержание</strong>: {post.body}</p>
                 </div> 
            }
            {isComLoading 
                ? <Loader/> 
                : <div style={{'marginTop': '20px'}}><h3 style={{marginBottom: "15px"}}>Комментарии:</h3>
                {comments.map( (comm, index) => 
                    <div key={comm.email} style={{marginBottom: "8px"}}>
                        <h5 key={comm.id}>{comm.email}</h5>
                        <p key={comm.index}>{comm.name}</p>
                    </div>
                )}
                  </div> 
            }


        </div>
    );
};

export default PostInfo;