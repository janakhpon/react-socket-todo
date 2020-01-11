import React, { useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import axios from 'axios'
import { URL_ID } from '../../Const'

// const INIT_STATE = {
//     _id: "",
//     date: "",
//     text: ""
// }
const PageListItem = ({ item, key }) => {

    const { _id, text, date } = item
    const key_val = key

    const INIT_STATE = {
        text: text
    }
    const [ textval, setTextval ] = React.useState(INIT_STATE)




    const onChange = (e) => {
        setTextval({ text: e.target.value })
    }


    const onUpdate = async (e) => {
        e.preventDefault()
        let url = `${URL_ID}${_id}`
        let data = {
            text: textval.text
        }

        try {
            let response = await axios({
                method: 'put',
                url: url,
                data: data,
                config: { headers: { 'Content-Type': 'application/json' } }
            })

            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    const onDelete = async (e) => {
        e.preventDefault()
        let url = `${URL_ID}${_id}`

        try {
            let response = await axios({
                method: 'delete',
                url: url,
                config: { headers: { 'Content-Type': 'application/json' } }
            })

            console.log(response)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Table.Row key={key_val}>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{text}</Table.Cell>
            <Table.Cell textAlign='center'>
                <Modal trigger={<Button primary>UPDATE</Button>} basic size='small'>
                    <Header icon='archive' content='Create your task' />
                    <Modal.Content>
                        <Input focus  value={textval.text} name="text" onChange={onChange} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' inverted onClick={onUpdate}>
                            <Icon name='checkmark' /> SAVE
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <Button primary onClick={onDelete}>DELETE</Button>
            </Table.Cell>
        </Table.Row>
    )
}

export default PageListItem
