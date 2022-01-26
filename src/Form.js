import React from 'react';
import './form.css';


function Form(props) {
    return (
        <div className="field">
            <h2 className="field__title">Cklock Ware</h2>
            <p class="field__text">Для выбора мастера заполните пожалуйста данные</p>

            <form class="field__form">
                <label for="name" hidden>Имя</label>
                <input class="field__input" id="name" type="text" placeholder={props.linkData.name} />

                <label for="email" hidden>Email</label>
                <input class="field__input" id="email" type="tel" placeholder={props.linkData.email} />

                <label for="size" hidden>Размер часов</label>
                <input class="field__input" id="size" type="tel" placeholder={props.linkData.size} />

                <label for="sity" hidden>Город</label>
                <input class="field__input" id="sity" type="tel" placeholder={props.linkData.sity} />

                <label for="time" hidden>Дата</label>
                <input class="field__input" id="size" type="tel" placeholder={props.linkData.time} />
            </form>

            <a class="field__link" href="#">Выбор мастера</a>
        </div>
    )
}

export default Form;