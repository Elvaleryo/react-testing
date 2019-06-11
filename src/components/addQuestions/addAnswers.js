import React, {Component} from 'react';
import {TextInput, RadioButton} from 'grommet';
import './signin.scss';

import {FormAdd, FormClose} from 'grommet-icons';


export default class AddAnswerForm extends Component {

    constructor(props) {
        super(props);
        this.delAnswer = this.props.delAnswer;
        this.onChange = this.props.onChange;
        this.addNewAnswer = this.props.addNewAnswer;
        this.onChecked = this.props.onChecked;
    }

    render() {

        const {
            answersList,
            count,
        } = this.props;


        let answList = answersList.map((answ, index) => {
            return  (
                <div key={answ.key} className="add-question__answer-wrap">
                    <div className="add-question__check">
                        <RadioButton
                            name='checkbox'
                            checked={!!answ.correct}
                            label=''
                            onChange={(e) => this.onChecked(e, answ.key)}
                        />
                    </div>
                    <TextInput
                        className="add-question__input"
                        value={answ.value}
                        id={answ.id}
                        name={answ.id}
                        placeholder='Answers'
                        size='medium'
                        margin="small"
                        onChange={(e) => this.onChange(e, answ.key)}
                    />
                    <FormClose className="add-question__del-ico" onClick={() => this.delAnswer(index,count)}/>
                </div>
            )

        });



        return (
            <div className="add-question__cont">
                <div className="add-question__add-new" onClick={() => this.addNewAnswer(count)}>
                    <FormAdd className="add-questions__add-ico" />
                    <p>Add new answer variation</p>
                </div>
                {answList}
            </div>
        )
    }
}








