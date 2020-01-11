import React from 'react'
import { Table } from 'semantic-ui-react'
import PageListItem from '../ListItem'

const PageList = () => (
    <>
        <Table celled inverted selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>DATE</Table.HeaderCell>
                    <Table.HeaderCell>TASK</Table.HeaderCell>
                    <Table.HeaderCell>CREATE</Table.HeaderCell>
                    <Table.HeaderCell>UPDATE</Table.HeaderCell>
                    <Table.HeaderCell>DELETE</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <PageListItem />
            </Table.Body>
        </Table>
    </>
)

export default PageList
