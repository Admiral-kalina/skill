import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Field, Formik} from "formik";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

import ProductsList from "./ProductsList/ProductsList";
import {UIButton} from "../UI/Button/UIButton";
import Footer from "../Footer/Footer";

import {removeUserCurse} from "../../features/userSlice/userSlice";
import {calculateTotalPrice} from "../../helpers/calculateTotalPrice";

// styles
import * as styles from "./checkout.module.scss";
import {useTranslation} from "react-i18next";
import {groupCheckoutItems} from "../../helpers/groupCheckoutItems";
import {navigate} from "gatsby";


const Checkout = () => {
    const {t} = useTranslation();
    const {coursesList} = useSelector(store => store.user.user)
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeUserCurse())
    }

    const totalPrice = calculateTotalPrice(coursesList)
    const checkoutItems = groupCheckoutItems(coursesList)


    const createPayment = async (values) => {
        console.log('payment',values)
        const response = await axios.post('http://localhost:5000/payment',{
            amount: {
                    value: totalPrice,
                    currency: "EUR"
                },
            metadata:{
                checkoutItems,
                name:values.name,
                email:values.email,
                address:values.address,
                phone:values.phone,
            }
        })
        console.log(response.data)
        navigate(response.data)
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>

                {coursesList.length === 0
                    ?
                    <h2 className={styles.title}>Ваша корзина пустая</h2>
                    :
                   <>
                       <h2 className={styles.title}>{t('checkout.text1')}</h2>
                       <Formik
                           initialValues={{name: "", phone: "", address: "", email: ""}}
                           validate={values => {
                               const errors = {};
                               if (!values.email) {
                                   errors.email = 'Required';
                               } else if (
                                   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                               ) {
                                   errors.email = 'Invalid email address';
                               }

                               return errors;
                           }}
                           onSubmit={(values, {setSubmitting}) => {
                               setTimeout(() => {
                                   alert(JSON.stringify(values, null, 2));
                                   setSubmitting(false);
                               }, 400);
                           }}
                       >
                           {({

                                 values,
                                 errors,
                                 touched,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit,
                                 isSubmitting,
                                 /* and other goodies */
                             }) => (
                               <form
                                   className={styles.form}
                                   onSubmit={handleSubmit}
                               >
                                   <div className={styles.formContainer}>
                                       <div>
                                           <label className="text40" htmlFor="name">{t('checkout.text2')}</label>
                                           <input
                                               className="text24"
                                               type="name"
                                               name="name"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.name}
                                           />
                                           {errors.name && touched.name && errors.name}
                                       </div>
                                       <div>
                                           <label className="text40" htmlFor="phone">{t('checkout.text3')}</label>
                                           <Field name="phone" component={Phone}/>
                                       </div>

                                       <div>
                                           <label className="text40" htmlFor="address">{t('checkout.text4')}</label>
                                           <input
                                               className="text24"
                                               type="address"
                                               name="address"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.address}
                                           />
                                           {errors.address && touched.address && errors.address}
                                       </div>
                                       <div>
                                           <label className="text40" htmlFor="email">{t('checkout.text5')}</label>
                                           <input
                                               className="text24"
                                               type="email"
                                               name="email"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.email}
                                           />
                                           <p className={styles.error}>{errors.email && touched.email && errors.email}</p>
                                       </div>
                                   </div>
                                   <ProductsList totalPrice={totalPrice} coursesList={coursesList}/>
                                   <div className={styles.btnBlock}>
                                       <UIButton onClick={handleRemove} teal>Отменить</UIButton>
                                       <UIButton type="submit" disabled={isSubmitting} onClick={() => createPayment(values)} teal>Оплатить</UIButton>
                                   </div>

                                   {/*<button type="submit" disabled={isSubmitting}>*/}
                                   {/*    Submit*/}
                                   {/*</button>*/}
                               </form>
                           )}
                       </Formik>
                   </>
                }
            </div>
            <div className={styles.footerBlock}>
                <Footer withPlanes/>
            </div>
        </div>
    );
};

export default Checkout;

const Phone = ({field, form, ...props}) => {
    return (
        <PhoneInput
            value=""

            onChange={value => {
                if (!form.touched[field.name]) form.setFieldTouched(field.name);
                form.setFieldValue(field.name, value);
            }}
        />
    );
};