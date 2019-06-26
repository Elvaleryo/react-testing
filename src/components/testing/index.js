import React, { Component } from 'react';
import { Box, Grommet, Button, RadioButton } from 'grommet';
import {customTheme} from '../groomet-themes';
import './index.scss';
import uuidv4 from 'uuid/v4';


export default class Testing extends Component {

    constructor(props) {
        super(props);
        this.submitAnswers = this.props.submitAnswers;
        this.onChecked = this.props.onChecked;
    }

    render() {

        const {answersList, selected, history} = this.props;

        let answList = answersList.map((question, i) => {


            const currentSelected = selected.length ? selected.find(item => item.questionIndex === i) : false;

            const tempChecked = currentSelected ? currentSelected.answerIndex : false;

            let answs = question.answers.map((item) => {
                let key = uuidv4();
                return (
                    <div key={key} className="add-questions__answer">
                        <RadioButton
                            name='prop'
                            checked={tempChecked === item.key}
                            label={item.value}
                            onChange={(e) => this.onChecked(i,question.key, item.key, item.correct)}
                        />
                    </div>
                );
            });
            let key = uuidv4();

            return (
                <div key={key} className="add-questions__question-wrap">
                    <h1>{question.title}</h1>
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
                        <form  onSubmit={(event) => this.submitAnswers(event,selected,answersList.length,history)}>

                            {answList}

                            <Button primary
                                    type="submit"
                                    label="Save"
                                    margin="small"
                            />
                        </form>
                    </Box>
                </Box>
            </Grommet>
        )
    }
}


