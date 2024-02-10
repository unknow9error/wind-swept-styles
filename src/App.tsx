import { Table } from '../lib/Table';
import { Card, Col, Input, Row, Select, SideBar, icons } from '../lib/main';
import './App.css';

function App() {
    return (
        <SideBar
            logo={
                <img src="https://pngfre.com/wp-content/uploads/nike-logo-19-1024x1024.png" />
            }
            items={[
                {
                    title: 'test',
                    key: 'test',
                },
            ]}
            activeKey="test"
        >
            <div className="h-full p-6">
                <Row gutter={12} cols={2}>
                    <Col span={1}>
                        <Card>
                            <Input
                                label="test"
                                placeholder="Тестовый инпут"
                                className="my-3"
                            />
                            <Input
                                label="test"
                                prefix={icons()['address-book']}
                                scale="sm"
                                placeholder="Тестовый инпут"
                            />
                            <Input
                                className="mt-4"
                                suffix={icons()['address-book']}
                                scale="md"
                                placeholder="Тестовый инпут"
                            />
                            <Input
                                className="mt-4"
                                suffix={icons()['address-book']}
                                scale="lg"
                                placeholder="Тестовый инпут"
                            />
                        </Card>
                    </Col>
                    <Col span={1}>
                        <Card>
                            <Select
                                options={[
                                    {
                                        label: 'test',
                                        value: 'test',
                                    },
                                    {
                                        label: 'test2',
                                        value: 'test2',
                                    },
                                ]}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table
                            dataSource={[
                                {
                                    sum: 23131,
                                    str: 'hello world',
                                    render: "console.log('test')",
                                },
                            ]}
                            columns={[
                                {
                                    title: 'TEST SUM',
                                    dataIndex: 'sum',
                                },
                                {
                                    title: 'TEST STRING',
                                    dataIndex: 'str',
                                },
                                {
                                    title: 'TEST RENDER',
                                    dataIndex: 'render',
                                    render: (value) => {
                                        return <code>{value}</code>;
                                    },
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </div>
        </SideBar>
    );
}

export default App;
