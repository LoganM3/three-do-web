import {Modal, Form, Input, Button} from 'antd'

export function SignUp({setToken}){
    const handleSignUp = ({email,password}) =>{
        fetch("http://localhost:5555/users",{
            method:"POST",
            header:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email,password})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => alert(err.message))
    }

    
    return(
        <Modal title = "Create Account" visible closable={true} footer={null}>
            <Form onFinish={handleSignUp} labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <Form.Item label="Email" name="email">
                    <Input/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{ofset:8, span:16}}>
                    <Button type="primary" htmlType='submit'>Sign UP</Button>
                </Form.Item>
            </Form>

        </Modal>
    )

}