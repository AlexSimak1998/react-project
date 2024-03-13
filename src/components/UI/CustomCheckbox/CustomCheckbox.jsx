import React from 'react';
import './CustomCheckbox.scss';

// Добавляем пропсы checked и onChange для управления состоянием чекбокса из родительского компонента
const CustomCheckbox = ({ label, checked, onChange }) => {
    return (
        <label className='custom-checkbox'>
            <input 
                type="checkbox" 
                checked={checked} // Используем проп checked для управления состоянием чекбокса
                onChange={onChange} // Используем проп onChange для обработки изменений
                style={{ display: 'none' }} // Скрываем стандартный чекбокс
            />
            <span className={`checkbox-custom ${checked ? 'checked' : ''}`}></span>
            <p>{label}</p>
        </label>
    );
};

export default CustomCheckbox;