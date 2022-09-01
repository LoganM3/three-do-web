import { useState,useEffect } from 'react';
import AddTask from './components/AddTask';
import { Layout,Menu} from 'antd';
import TodoList from './components/TodoList';
import './App.css';
import { Header } from 'antd/lib/layout/layout';
import { Content } from 'antd/lib/layout/layout';
import { Footer } from 'antd/lib/layout/layout';
import { SignUp } from './components/SignUp';

// const {Header, Content, Footer} =Layout
function App() {
  const [tasklist, setTasklist] = useState()
   const [token, setToken] = useState()

   useEffect(()=>{
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
   },[setToken])

  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Three-Do</Menu.Item>
        <Menu.Item key="2">Login</Menu.Item>
        <Menu.Item key="3">Sign Up</Menu.Item>
      </Menu>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <div className="site-layout-content">
        <h1>Three-do</h1>
        <TodoList token={token} tasklist={tasklist} setTasklist={setTasklist} />
        <AddTask token={token} setTasklist={setTasklist} />
        {!token && <SignUp setToken={setToken}/>}
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Three-Do ©2022 Created by Boca Code
    </Footer>
  </Layout>
  );
}

export default App;
