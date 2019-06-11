import React, { Component } from 'react';
import {  Box, Grommet,Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import {customTheme} from '../groomet-themes';



export default class Statistic extends Component {



    render() {

        const {history, admin, allHistory} = this.props;

        let historyList = history.map((item, i) => {


            return (
                <TableRow>
                    <TableCell scope="row">
                        {item.date}
                    </TableCell>
                    <TableCell>{item.score}</TableCell>
                </TableRow>
            );
        });

        let adminHistoryList = allHistory.map((item, i) => {


            return (
                <TableRow>
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

        if (admin) {
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
                                        <TableCell scope="col" border="bottom">
                                            User
                                        </TableCell>
                                        <TableCell scope="col" border="bottom">
                                            Date
                                        </TableCell>
                                        <TableCell scope="col" border="bottom">
                                            Score
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    {adminHistoryList}

                                </TableBody>
                            </Table>

                        </Box>
                    </Box>
                </Grommet>
            )
        } else {
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
                                        <TableCell scope="col" border="bottom">
                                            Date
                                        </TableCell>
                                        <TableCell scope="col" border="bottom">
                                            Score
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    {historyList}

                                </TableBody>
                            </Table>

                        </Box>
                    </Box>
                </Grommet>
            )
        }


    }
}


