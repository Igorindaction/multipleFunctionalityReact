import Login from "Components/login/Login";
import About from "pages/about/about";
import ErrorPage from "pages/error/error";
import PostInfo from "pages/postInfo/postInfo";
import Posts from "pages/posts/posts";



export const PrivateRoutes = [
    {path: '/Posts', component: Posts, exact: true},
    {path: '/Posts/:id', component: PostInfo, exact: true},
    {path: '/About', component: About, exact: true},
    {path: '/Error', component: ErrorPage, exact: true}
]

export const PublicRoutes = [
    {path: '/Login', component: Login, exact: true},
    {path: '/About', component: About, exact: true},

]

