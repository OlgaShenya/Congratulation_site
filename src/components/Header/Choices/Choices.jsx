import style from './Choices.module.css';
import { useState, useContext } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';



const Choices = () => {
    const [IsOpenChoices, setIsOpenChoices] = useState(false)
    const { holiday, holidays, changeHoliday } = useContext(holidaysContext);




    const toggleChoices = () => {
        setIsOpenChoices(!IsOpenChoices)
    };

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>
                {holidays[holiday] || 'Выбрать праздник'}
            </button>
            {IsOpenChoices && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                        <li
                            className={style.item}
                            key={item[0]}
                            onClick={() => {
                                changeHoliday(item[0])
                                toggleChoices()
                            }}
                        >
                            {item[1]}
                        </li>))}
                </ul>)
            }
        </div >)
}

export default Choices;