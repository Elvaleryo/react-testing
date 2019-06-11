import React, { Component } from 'react';
import {Box, Grommet, Button, RadioButton} from 'grommet';
import {customTheme} from '../groomet-themes';
import uuidv4 from "uuid/v4";

import './index.scss';


export default class Score extends Component {



    render() {

        const { score , onClick,questions, userAnswers, history } = this.props;

        let answList = questions.map((question, i) => {
            let answs = question.answers.map((item) => {
                let key = uuidv4();
                let userChoose = userAnswers[userAnswers.length-1].answers[0][i].answerIndex;
                let userClassName = userChoose === item.key;
                let correctClassName = item.correct ? 'correct': '';
                return (
                    <div key={key} className="questions__answer">
                        <div className={correctClassName}>
                            <RadioButton
                                name='prop'
                                checked={userClassName}
                                label={item.value}
                                disabled={true}
                            />
                        </div>

                    </div>
                );
            });
            let key = uuidv4();
            return (
                <div key={key} className="questions__wrap">
                    <h1 className="questions__title">{question.title}</h1>
                    {answs}
                </div>
            );
        });

        return (

            <Grommet theme={customTheme}>
                <Box
                    direction="row-responsive"
                    justify="center"
                    align="center"
                    pad="xlarge"
                    background="light"
                    gap="medium"
                >
                    <Box align='center'
                         width='medium'
                         justify='center'
                         pad='large'
                         alignContent='center'
                         background="light-2">

                            <h1>YOUR SCORE</h1>
                            <h2>{score} </h2>

                            {answList}


                            <Button primary
                                    type="submit"
                                    label="Try again"
                                    margin="small"
                                    onClick={(e) => {onClick(e,history)}}
                            />
                    </Box>
                </Box>
            </Grommet>
        )
    }
}


