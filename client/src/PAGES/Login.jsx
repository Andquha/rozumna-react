import React from 'react'
import BigLogo from '../components/UI/Logo/BigLogo';
import WebpImg from '../components/UI/WebpImg/WebpImg'
import '../styles/Login.scss';
import {Formik} from 'formik';
import * as Yup from 'yup'
import Input from '../components/UI/Input/Input';
import { Link } from 'react-router-dom';
import Button2 from '../components/UI/Button/Button2';

export default function Login() {
  return (
    <main className='Login'>
      <div className='Login_container _container'>
        <WebpImg src={'./img/Login/Back.webp'} fallbackSrc={'./img/Login/Back.png'} alt='background' className='Logo_background'/>
        <div className='Login_content'>
          <BigLogo/>
          <div className='Login_box'>
            <div className='Login_box_header'>Вхід</div>
            <Formik
              initialValues = {{
                  email: '',
                  password: '',
              }}
              validateOnBlur
              validationSchema = {Yup.object({
                  email: Yup.string()
                      .email('Не вірний формат почти')
                      .required('Це обов`язкове поле'),
                  password: Yup.string()
                      .max(15, 'Пароль надто довгий')
                      .min(3, 'Пароль дуже короткий')
                      .required('Це обов`язкове поле')
              })}
              onSubmit={(values) => {console.log(values)}}
            >
              {formvalid => (
                  <form onSubmit={formvalid.handleSubmit}>
                    <div>
                      <Input type="email" 
                              name='email' 
                              id='email'
                              placeholder='Email*'
                              onChange={formvalid.handleChange} 
                              onBlur={formvalid.handleBlur}
                              value={formvalid.values.email}
                              error={formvalid.touched.email && formvalid.errors.email ? true : false}
                      />
                      {formvalid.touched.email && formvalid.errors.email && (<div className='Form_error'>{formvalid.errors.email}</div>)}
                    </div>
                      
                    <div>
                      <Input type="password" 
                              name='password' 
                              id='password'
                              placeholder='Пароль*'
                              onChange={formvalid.handleChange} 
                              onBlur={formvalid.handleBlur}
                              value={formvalid.values.password}
                              error={formvalid.touched.password && formvalid.errors.password ? true : false}
                      />
                      {formvalid.touched.password && formvalid.errors.password && (<div className='Form_error'>{formvalid.errors.password}</div>)}
                    </div>
                    <div className='Form_description'>Ще не зареєстровані? <Link to='/registration'>Створіть новий обліковий запис</Link></div>

                    <Button2 type="submit" style={{marginTop: '3.3rem'}}>Увійти</Button2>
                  </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
    
  )
}
