import { AuthContext } from 'Components/context/authContext';
import React, { useContext, useState } from 'react';
import ButtonDefault from 'UI/button/ButtonDefault';
import DefaultInput from '../../UI/defaultInput/DefaultInput';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css'
import Loader from 'UI/loader/Loader';

const Login = () => {
    // @ts-ignore
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [isFetching, setIsFetching] = useState(true)
    const autohrization = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
        <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Обязательное поле!';
          } else if (!values.password){
              errors.password = 'Обязательное поле!';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорретный email!';
          }
          else if ( !/^(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(values.password)) {
            errors.password = 'Пароль должен состоять не менее чем из 8 символов, одного верхнего регистра, одной цифры и одного символа специального регистра!'
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setIsFetching(false)
          setTimeout(() => {
            setSubmitting(false);
            setIsFetching(true)
            autohrization()
          }, 2000);
        }}
      >
        {({ isSubmitting }) => (
            isFetching 
            ? <Form>
                <h2>Войдите в личный кабинет</h2>
                <Field type="email" name="email" className={s.defaultInput} placeholder='Email'/>
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" className={s.defaultInput} placeholder='password'/>
                <ErrorMessage name="password" component="div" />
                <ButtonDefault type="submit" disabled={isSubmitting} onSubmit={(e) => { e.preventDefault()}}>Войти</ButtonDefault>
                <p style={{marginTop: "10px"}}>Подсказка: чтобы авторизоваться, введите случайный, но валидный e-mail и пароль</p>
              </Form>
              
            : <Loader />
        )}
        
      </Formik>

      </div>
    );
};

export default Login;