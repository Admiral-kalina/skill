import React, {useEffect, useState} from 'react';
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
import {PAYMENT_BACKEND} from "../../global";
import {paymentApi} from "../../api";



const Checkout = () => {
    const [paymentStatus, setPaymentStatus] = useState(null)
    const {t} = useTranslation();
    const {coursesList} = useSelector(store => store.user.user)
    const dispatch = useDispatch()
const errorObj={};
    console.log('ENV', process.env.PAYMENT_BACKEND)
    console.log('ENV', process.env.BACKAND_URL)
    useEffect(() => {
        if(typeof window !==`undefined` && window.location.search){
            const queryString = window.location.search;
            const paymentID = queryString.replace(/[^0-9]/g, "");;
            webhook(paymentID)
        }
    },[])

    const handleRemove = () => {
        dispatch(removeUserCurse())
    }

    const totalPrice = calculateTotalPrice(coursesList)
    const checkoutItems = groupCheckoutItems(coursesList)

    const webhook = async (paymentId) => {
        const response = await paymentApi.post(`/webhook`,{paymentId:paymentId})
        console.log(response.data)
        setPaymentStatus(response.data)
        handleRemove()
        window.history.replaceState(null, '', window.location.pathname);
    }

    const createPayment = async (event,values) => {
        event.preventDefault()

        if(values.name && values.phone && values.email){
            const response = await paymentApi.post(`/payment`,{
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
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>

                {coursesList.length === 0
                    ?
                   <>
                       <h2 className={styles.title}>Ваша корзина пустая</h2>
                       {paymentStatus && <p className={`${styles.status} text48`}>Payment status : {paymentStatus}</p>}
                   </>
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
                                   errorObj.email = 'Invalid email address';
                               }

                               if (!values.phone) {
                                   errors.phone = 'Required';
                                   errorObj.phone = 'Required';
                               }

                               if (!values.name) {
                                   errors.name = 'Required';
                                   errorObj.name = 'Required';
                               }

                               return errors;
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
                                   onSubmit={(event) =>createPayment(event,values, errors)}
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
                                           <p className={styles.error}>{errors.name && touched.name && errors.name}</p>

                                       </div>
                                       <div>
                                           <label className="text40" htmlFor="phone">{t('checkout.text3')}</label>
                                           <Field name="phone"  component={Phone}/>
                                           <p className={styles.error}>{errors.phone && touched.phone && errors.phone}</p>
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
                                       <UIButton type="submit" teal>Оплатить</UIButton>
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