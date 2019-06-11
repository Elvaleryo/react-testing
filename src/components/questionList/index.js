import React, { Component } from 'react';
import { Box, Grommet, Button, RadioButton } from 'grommet';
import { FormClose} from 'grommet-icons';

import {customTheme} from '../groomet-themes';
import './index.scss';
import * as ROUTES from "../../constants/routes";
import uuidv4 from 'uuid/v4';


export default class Questions extends Component {

    constructor(props) {
        super(props);
        this.submitAnswers = this.props.submitAnswers;
    }

    render() {


        const { questions, history, delQuestion } = this.props;

        let _onClick = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            history.push(ROUTES.ADD_QUESTIONS);
        };

        let answList = questions.map((question, i) => {
            let answs = question.answers.map((item) => {
                let key = uuidv4();
                return (
                    <div key={key} className="questions__answer">
                        <RadioButton
                            name='prop'
                            checked={item.correct}
                            label={item.value}
                            disabled={true}
                        />
                    </div>
                );
            });
            let key = uuidv4();
            return (
                <div key={key} className="questions__wrap">
                    <FormClose className="questions__del-ico" onClick={() => delQuestion(question.title)}/>
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

                            {answList}

                            <Button primary
                                    type="submit"
                                    label="Add new"
                                    margin="small"
                                    onClick={(e) => _onClick(e)}
                            />
                    </Box>
                </Box>
            </Grommet>
        )
    }
}


