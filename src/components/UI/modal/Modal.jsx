import React, { useState } from 'react'
import classes from './Modal.module.scss'
import Icons from '../icons/Icons'
import Input from '../input/Input'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import Btn from '../btn/Btn'
import ImagesComponents from '../imagesComponents/ImagesComponents'
import logo from '../../../images/logo.png'
export default function Modal({ visible, setVisible }) {

  const [inputValue, setInputValue] = useState({ name: "", phone: "" })
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [trueProcessed, setTrueProcessed] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };



  const rootClass = [classes.modal]
  if (visible) rootClass.push(classes.active)


  function validateForm() {
    // Проверка имени на пустоту
    if (!inputValue.name.trim()) {
      alert('Пожалуйста, введите ваше имя.');
      return false;
    }

    // Проверка номера телефона на пустоту и на то, что он содержит только цифры
    const phoneRegex = /^[0-9]+$/;
    if (!inputValue.phone.trim() || !phoneRegex.test(inputValue.phone.trim())) {
      alert('Пожалуйста, введите корректный номер телефона.');
      return false;
    }

    // Проверка, отмечен ли чекбокс
    if (!isCheckboxChecked) {
      alert('Пожалуйста, подтвердите согласие на обработку персональных данных.');
      return false;
    }
    const formData = {
      name: inputValue.name,
      phone: inputValue.phone,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  
    setTrueProcessed(true);
  }

  function clouseModal() {

    setVisible(false)
    setInputValue({ name: "", phone: "" });
    setTrueProcessed(false)
    setIsCheckboxChecked(false)
  }

  return (
    <div className={rootClass.join(' ')} onClick={clouseModal}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header} >
          <div onClick={clouseModal} style={{ cursor: 'pointer' }}>
            <Icons name="bi-x-lg" style={{ fontSize: '32px' }} />
          </div>
        </div>

        {trueProcessed ? (
          <>
            <div className={[classes.body, classes.trueProcessed].join(' ')}>
              <h2>Спасибо
                за заявку</h2>
              <h3>Я обязательно
                свяжусь с вами<br />
                в ближайшее время</h3>
            </div>
            <div className={classes.footer}>
              <ImagesComponents src={logo} className={classes.logo}/>
            </div>
          </>
        ) : (
          <>
            <div className={classes.body}>
              <h2>Закажите обратный звонок</h2>
              <Input placeholder="имя" value={inputValue.name} onChange={e => setInputValue(prevState => ({ ...prevState, name: e.target.value }))} />
              <Input placeholder="телефон" value={inputValue.phone} onChange={e => setInputValue(prevState => ({ ...prevState, phone: e.target.value }))} />
            </div>

            <div className={classes.footer}>
              <CustomCheckbox label="Согласен на сохранение и обработку персональных данных" checked={isCheckboxChecked} onChange={handleCheckboxChange} />
              <Btn border={{ borderLeft: '1px solid rgba(255, 255, 255, 1)' }} onClick={validateForm}>
                Заказать обратный звонок
              </Btn>
            </div>
          </>
        )}

        <div></div>
      </div>
    </div>
  )
}
