
import { useSortedAndFilteredPosts } from "hooks/usePost";
import React, { useEffect, useState } from "react";
import ButtonDefault from "UI/button/ButtonDefault";
import ModalWindow from "UI/modalWindow/ModalWindow";
import PostFilter from "../../Components/postFilter/PostFilter";
import PostForm from "../../Components/postForm/PostForm";
import PostList from "../../Components/postList/PostList";
import PostService from "API/postService";
import Loader from "UI/loader/Loader";
import { useFetching } from "hooks/useFetching";
import { getPageCount } from "API/utils/pages";
import Pagination from "UI/pagination/Pagination";


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  


  const sortedAndSearchedPosts = useSortedAndFilteredPosts(posts, filter.sort, filter.query)

  const [getPostsFromJson, isLoading, postError] = useFetching( async() => {
    const response = await PostService.getAll(currentPage, limit)
    setPosts(response.data)
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    console.log('сработала юзэффект')
    getPostsFromJson()
  }, [currentPage])  

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      {postError && <div>Произошла ошбика {postError}</div>}
      <ButtonDefault onClick={() => setModal(true)}>Создать посты</ButtonDefault>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isLoading ? <Loader /> : <PostList sortedAndSearchedPosts={sortedAndSearchedPosts} removePost={removePost}/> }
      <Pagination  currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
