import React, { useEffect, useState } from 'react';
import classes from './MainComponents.module.scss';
import Btn from '../UI/btn/Btn';
import Mentor from '../../images/mentor.png';
import MentorMobil  from '../../images/mentorMobil.png';
import ImagesComponents from '../UI/imagesComponents/ImagesComponents';
import Modal from '../UI/modal/Modal';


export default function MainComponents() {
    const [data, setData] = useState('');
    const [date, setDate] = useState('');
    const [modal, setModal] = useState(false);
    const [descriptionText, setDescriptionText] = useState({
        description: "Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий",
        textBtnOne: 'Записаться на консультацию',
        textBtnTwo: 'Бесплатная консультация',
        dataText: 'техник для достижения целей',
        dateText: 'увеличение личной продуктивности',
   });
    useEffect(() => {


        function dateSum() {
            const currentDate = new Date();
            const dateString = ('0' + currentDate.getDate()).slice(-2) +
                ('0' + (currentDate.getMonth() + 1)).slice(-2) +
                currentDate.getFullYear();

            const sumOfDigits = dateString
                .split('')
                .reduce((sum, digit) => sum + parseInt(digit, 10), 0);

            setDate(sumOfDigits);
        }

        dateSum();

        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => setData(Math.round(json.Valute.GBP.Value)))
            .catch(error => console.error("Failed to fetch data: ", error));



            const mediaQuery = window.matchMedia('(max-width: 767px)');
            const handleMediaQueryChange = () => {
                setDescriptionText(prev => ({
                    ...prev,
                    description: mediaQuery.matches ? "Ваш успех зависит от ваших действий" : "Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий",
                    textBtnOne: mediaQuery.matches ? "Запись" : "Записаться на консультацию",
                    textBtnTwo: mediaQuery.matches ? "Консультация" : "Бесплатная консультация",
                    dataText: mediaQuery.matches ? 'техники': 'техник для достижения целей',
                    dateText: mediaQuery.matches ? 'продуктивности': 'увеличение личной продуктивности'
                }));
            };
    
            mediaQuery.addEventListener('change', handleMediaQueryChange);
            handleMediaQueryChange(); // Инициализация при монтировании компонента
    
            return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
        
    }, []);

    return (
        <main className={classes.MainComponents}>
            <Modal visible={modal} setVisible={setModal} />

            <div>
                <h1>Создаю условия для вашего успеха</h1>
                <p className={classes.description}>{descriptionText.description}</p>

            </div>
            <div className={classes.blockBtn}>
                <Btn onClick={() => setModal(true)} style={{ background: 'rgba(255, 255, 255, 1)', color: 'rgba(7, 48, 93, 1)' }} border={{ borderLeft: '1px solid rgba(19, 52, 87, 1)' }}>
                {descriptionText.textBtnOne}
                </Btn>
                <Btn onClick={() => setModal(true)} border={{ borderLeft: '1px solid rgba(255, 255, 255, 1)' }}>
                  {descriptionText.textBtnTwo}
                </Btn>
            </div>
            <ImagesComponents src={Mentor} className={classes.mentor} />
            <ImagesComponents src={MentorMobil} className={classes.MentorMobil} />
            <div className={classes.blockData}>
                <div className={classes.numberGBP}>
                    <h3>{data} +</h3>
                    <p>{descriptionText.dataText}</p>
                </div>
                <div className={classes.numberGBP}>
                    <h3>{date}%</h3>
                    <p>{descriptionText.dateText}</p>
                </div>
            </div>
        </main >
    );
}