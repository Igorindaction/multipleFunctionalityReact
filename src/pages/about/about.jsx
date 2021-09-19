import React from 'react';

const About = () => {
    return (
        <div>
            <ul style={{'marginTop': '20px'}}>Список используемых инструментов, методов, технологий и всего, что связано с разработкой данного проекта:</ul>
                <li>Проект написан с помощью CRA</li>
                <li>Проект реализован с помощью хуков (функциональной компонента)</li>
                <li>Внутри проекта используются такие хуки, как: useState, useMemo, useEffect, useContext, useHistory, useRef, useParams</li>
                <li>На странице логина настроена валидация с помощью библиотеки Formik</li>
                <li>В проекте используются localStorage</li>
                <li>В проекте используются кастомные хуки</li>
                <li>Работа с <a rel="noreferrer" target="_blank" style={{textDecoration: "underline", color: "blue"}} href="https://jsonplaceholder.typicode.com/">сервером</a>. Axios</li>
                <li>В проекте настроено: поиск постов, фильтрация постов</li>
                <li>Обмен данными между компонентами. От родителя к ребенку. От ребенка к родителю</li>
                <li>Выполнен постраничный вывод постов. Пагинация, которая преобразовалась в "бесконечную ленту" (если потребуется, для пагинации есть свой комит, позволяющий к ней вернуться). Бесконечная лента реализована с помощью Intersection Observer API</li>
                <li>Для навигации по страницам/элементам использовано React router, BrowserRouter, Route, Switch, Redirect</li>
                <li>Динамическая навигация. useHistory, useParams</li>
                <li>Внутри всех полей настроено двухстороннее связывание</li>
                <li>Анимациии реализованы с помощью React transition group </li>
                <li>Декомпозиция всего кода, за исключением CSS</li>
                <li>CSS Modules</li>
                <li>Модальное окно. Переиспользуемые UI компоненты</li>
        </div>
    );
};

export default About;