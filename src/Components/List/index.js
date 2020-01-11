import React, { useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import PageListItem from '../ListItem'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import axios from 'axios'
import { MAIN_URL, URL_ID } from '../../Const'

const PageList = () => {
    const [values, setValues] = React.useState([])
    const [text, setText] = React.useState("")

    useEffect(() => {
        let isSubscribed = true
        const getUser = async () => {
            try {
                let cb = await axios.get(MAIN_URL)

                if (isSubscribed) {
                    console.log(cb.data)
                    setValues(cb.data)
                }
            } catch (err) {

            }
        }
        try {
            getUser()
        } catch (err) {

        }
        return () => isSubscribed = false
    }, [])

    const onChange = (e) => {
        setText(e.target.value)
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
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>DATE</Table.HeaderCell>
                        <Table.HeaderCell>TASK</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>
                            <Modal trigger={<Button primary>CREATE</Button>} basic size='small'>
                                <Header icon='archive' content='Create your task here' />
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
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>OPTIONS</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        values.map((val, key) => {
                            return <PageListItem item={val} key={key} />
                        })
                    }
                </Table.Body>
            </Table>
        </>
    )
}

export default PageList
