import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import axios from 'axios'
import { MAIN_URL } from '../../Const'

const PageListItem = () => {
    const [text, setText] = React.useState("")
    const formData = new FormData()


    const onChange = (e) => {
        setText(e.target.value)
        formData.set("text", e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        let data = {
            text: text
        }
        console.log(MAIN_URL)
        try {
            let response = await axios({
                method: 'post',
                url: MAIN_URL,
                data: data,
                config: { headers: { 'Content-Type': 'application/json' } }
            })

            console.log(response)
        } catch (err) {
            console.log(err)
        }
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
                            <Input focus placeholder='Your text' value={text} name="text" onChange={onChange} />
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
