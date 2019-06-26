import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import {  Box, Grommet,Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import {customTheme} from '../groomet-themes';



export default class Statistic extends Component {



    render() {

        const {history, admin, allHistory} = this.props;

        let historyList = history.map((item, i) => {
            let key = uuidv4();
            return (
                <TableRow key={key}>
                    <TableCell scope="row">
                        {item.date}
                    </TableCell>
                    <TableCell>{item.score}</TableCell>
                </TableRow>
            );
        });

        let adminHistoryList = allHistory.map((item, i) => {
            let key = uuidv4();
            return (
                <TableRow key={key}>
                    <TableCell scope="row">
                        {item.user}
                    </TableCell>
                    <TableCell scope="row">
                        {item.date}
                    </TableCell>
                    <TableCell>{item.score}</TableCell>
                </TableRow>
            );
        });

        let statisticList = admin ? adminHistoryList : historyList;

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
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {admin && (
                                            <TableCell scope="col" border="bottom">
                                                User
                                            </TableCell>
                                        )}
                                        <TableCell scope="col" border="bottom">
                                            Date
                                        </TableCell>
                                        <TableCell scope="col" border="bottom">
                                            Score
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {statisticList}
                                </TableBody>
                            </Table>

                        </Box>
                    </Box>
                </Grommet>
            )



    }
}


