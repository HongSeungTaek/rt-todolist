import { observer } from 'mobx-react';
import { Button, Layout, Input, Col, Row, Divider, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../App.css';
import store from '../stores/store';

const { Header, Content, Footer } = Layout;

function AddInput() {
  return (
      <Input.Group compact>
        <Input style={{ width: 'calc(100% - 80px)' }} placeholder="할일을 적으세요" />
        <Button type="primary" icon={<PlusOutlined />} onClick={() => store.increase()}>Add</Button>
      </Input.Group>
  );
}

function ToDoList(props: any) {
  return (
    <>
    <Divider orientation="left">{props.title}</Divider>
    <List
      size="small"
      bordered
      dataSource={['1','2','3']}
      renderItem={item => <List.Item>{item}{/* 등록 삭제 기능 */}</List.Item>}
    />
    </>
  );
}

function Home() {
    return (
      <Layout className="layout">
        <Header>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <AddInput/>
            <div>
                <ToDoList title="Todo-List"/>
            </div>
          </div>
          {/* 카운팅 컴포넌트 */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Ant UED</Footer>
      </Layout>
    );
}

export default observer(Home);
