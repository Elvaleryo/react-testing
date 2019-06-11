import React, { Component } from 'react';
import { Box, TextInput, Grommet, Button } from 'grommet';
import './signin.scss';
import {customTheme} from '../groomet-themes';

import {AddAnswerPage} from '../../containers/addAnswers';


const INITIAL_STATE = {
    question: '',
};

export default class addQuestionsForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.props.onSubmit;
        this.fb = this.props.firebase;
        this.state = { ...INITIAL_STATE };

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

        const { answers, history } = this.props;



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
                        <form  onSubmit={(event) => this.onSubmit(event,this.state.question,answers,history)}>
                            <div className="add-question__question-wrap">
                                <TextInput
                                    className="add-questions__input"
                                    value={this.state.question}
                                    name='question'
                                    placeholder='Enter your question..'
                                    size='medium'
                                    margin="small"
                                    onChange={this.onChange}
                                />

                            </div>
                            <AddAnswerPage { ...this.props } />


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


