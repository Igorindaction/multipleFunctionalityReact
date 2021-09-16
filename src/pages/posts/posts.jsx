
import { useSortedAndFilteredPosts } from "hooks/usePost";
import React, { useContext, useEffect, useRef, useState } from "react";
import ModalWindow from "UI/modalWindow/ModalWindow";
import PostFilter from "../../Components/postFilter/PostFilter";
import PostForm from "../../Components/postForm/PostForm";
import PostList from "../../Components/postList/PostList";
import PostService from "API/postService";
import Loader from "UI/loader/Loader";
import { useFetching } from "hooks/useFetching";
import { getPageCount } from "API/utils/pages";
import Pagination from "UI/pagination/Pagination";
import { useObserver } from "hooks/useObserver";
import { AuthContext } from "Components/context/authContext";


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const {modal, setModal} = useContext(AuthContext)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef()



  const sortedAndSearchedPosts = useSortedAndFilteredPosts(posts, filter.sort, filter.query)

  const [getPostsFromJson, isPostLoading, postError] = useFetching( async() => {
    const response = await PostService.getAll(page, limit)
    setPosts([...posts, ...response.data])
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostLoading, (() => {
      setPage(page + 1)
  }))

  useEffect(() => {
    // @ts-ignore
    getPostsFromJson(page, limit)
  }, [page, limit])  

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }



  return (
    <div className="App">
      {postError && <div>Произошла ошбика {postError}</div>}
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>
        <PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit}/>
      <PostList sortedAndSearchedPosts={sortedAndSearchedPosts} removePost={removePost}/> 
      <div ref={lastElement} style={{height: '10px'}}></div>
      {isPostLoading && <Loader />}
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );

}



export default Posts;
