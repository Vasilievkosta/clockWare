import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: '',
            email: '',
            size: '',
            sity: 'Днепр',
            time: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <>
                <div className="field">
                    <h2 className="field__title">Cklock Ware</h2>
                    <p className="field__text">Для выбора мастера заполните пожалуйста данные</p>

                    <form className="field__form">
                        <label for="client" hidden>Имя</label>
                        <input className="field__input" id="client" name="client" type="text"
                            placeholder="Ваше имя не менее трех букв" onChange={this.onChangeHandler} />

                        <label for="email" hidden>Email</label>
                        <input className="field__input" id="email" name="email" type="tel"
                            placeholder="Ваш e-mail" onChange={this.onChangeHandler} />

                        <div className="field__size">
                            <label className="field__radio">Размер часов: </label>
                            <label className="field__radio">Маленькие
                                <input id="size" name="size" type="radio" value="small"
                                    checked={this.state.size === "small"}
                                    onChange={this.onChangeHandler}
                                />
                            </label>

                            <label className="field__radio">Средние
                                <input id="size" name="size" type="radio" value="medium"
                                    checked={this.state.size === "medium"}
                                    onChange={this.onChangeHandler}
                                />
                            </label>

                            <label className="field__radio">Большие
                                <input id="size" name="size" type="radio" value="big"
                                    checked={this.state.size === "big"}
                                    onChange={this.onChangeHandler}
                                />
                            </label>
                        </div>




                        <label for="sity" hidden>Город</label>
                        <select className="field__input" id="sity" name="sity" type="text" value={this.state.sity}
                            onChange={this.onChangeHandler}>
                            <option className="field__sity" value="Днепр">Днепр</option>
                            <option className="field__sity" value="Ужгород">Ужгород</option>
                            <option className="field__sity" value="Киев">Киев</option>
                            <option className="field__sity" value="Одесса">Одесса</option>
                        </select>

                        <label for="time" hidden>Дата</label>
                        <input className="field__input" id="size" name="time" type="tel"
                            placeholder="Введите дату" onChange={this.onChangeHandler} />
                    </form>

                    <a className="field__link" href="#">Выбор мастера</a>
                </div>
                <br />
                <hr />
                <div className="state">
                    <p>State of Component</p>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                </div>



            </>

        );
    }
};


export default Form;