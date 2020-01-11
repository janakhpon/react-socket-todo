import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import axios from 'axios'
import { URL } from '../../Const'

const PageListItem = () => {
    const [task, setTask] = React.useState("")
    const formData = new FormData()


    const onChange = (e) => {
        setTask(e.target.value)
        formData.set("task", e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell textAlign='center'>
                    <Modal trigger={<Button primary>CREATE</Button>} basic size='small'>
                        <Header icon='archive' content='Archive Old Messages' />
                        <Modal.Content>
                            <Input focus placeholder='Your task' value={task} name="task" onChange={onChange} />
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='red' inverted>
                                <Icon name='remove' /> No
                            </Button>
                            <Button color='green' inverted onClick={onSubmit}>
                                <Icon name='checkmark' /> SAVE
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <Button primary>UPDATE</Button>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <Button primary>DELETE</Button>
                </Table.Cell>
            </Table.Row>
        </>
    )
}

export default PageListItem
