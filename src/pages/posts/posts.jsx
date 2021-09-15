
import { useSortedAndFilteredPosts } from "hooks/usePost";
import React, { useEffect, useRef, useState } from "react";
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
import { useObserver } from "hooks/useObserver";
import SelectDefault from "UI/select/SelectDefault";


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const lastElement = useRef()
  const observer = useRef()


  const sortedAndSearchedPosts = useSortedAndFilteredPosts(posts, filter.sort, filter.query)

  const [getPostsFromJson, isPostLoading, postError] = useFetching( async() => {
    const response = await PostService.getAll(page, limit)
    setPosts([...posts, ...response.data])
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit))
    console.log(totalPages);
  })

  useObserver(lastElement, page < totalPages, isPostLoading, (() => {
      setPage(page + 1)
  }))

  useEffect(() => {
    console.log('сработало');
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
    console.log(page)
    setPage(page)
  }


  return (
    <div className="App">
      {postError && <div>Произошла ошбика {postError}</div>}
      <ButtonDefault onClick={() => setModal(true)}>Создать посты</ButtonDefault>
      <SelectDefault value={limit} onChange={ value => setLimit(value)} defaultName='Количество элементов на странице' options={[

        {value: 5, name: '5'},
        {value: 10, name: '10'},
        {value: 25, name: '25'},
        {value: -1, name: 'Загрузить все'},
      ]
      }/>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList sortedAndSearchedPosts={sortedAndSearchedPosts} removePost={removePost}/> 
      <div ref={lastElement} style={{height: '20px', background: 'red'}}></div>
      {isPostLoading && <Loader />}
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
