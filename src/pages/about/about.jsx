import React from 'react';

const About = () => {
    return (
        <div>
            <ul style={{'marginTop': '20px'}}>The list of used toolchains, technologies and everything related to the development of this project:</ul>
                <li>This project was made via CRA</li>
                <li>The project is configured: creating "posts" and deleting, searching for posts, filtering (sorting) posts and resetting these settings and etc</li>
                <li>The project was implemented exclusively with hooks(useState, useMemo, useEffect, useContext, useHistory, useRef, useParams)</li>
                <li>Validation implemented via Formik library</li>
                <li>The project used localstorage to imitate cookies. It's necessary to remember the authorization session</li>
                <li>Custom hooks are also used</li>
                <li>Operations with <a rel="noreferrer" target="_blank" style={{textDecoration: "underline", color: "blue"}} href="https://jsonplaceholder.typicode.com/">a server</a>.Via Axios</li>

                <li>Data exchange between components - from parent to child. From child to parent (using callbacks)</li>
                <li>The Posts are  paginated. A pagination that turned into an "infinite feed" (if necessary, pagination has its own commit that allows you to return to it). Infinite tape implemented using the Intersection Observer API</li>
                <li>Page navigation realized by React router, BrowserRouter, Route, Switch, Redirect</li>
                <li>Dynamic navigation(useHistory, useParams)</li>
                <li>All inputs are configured for two-way binding</li>
                <li>Animation is realized by React transition group </li>
                <li>All code is decomposed except for CSS(CSS = CSS Modules)</li>
                <li>The project uses reusable UI components</li>
        </div>
    );
};

export default About;