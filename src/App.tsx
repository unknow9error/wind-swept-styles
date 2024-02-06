import { Col, Input, Row, StyleProvider, Card, icons } from '../lib/main';
import './App.css';

function App() {
    return (
        <StyleProvider>
            <div className="bg-gray-800 h-screen p-6">
                <Row gutter={12} cols={2}>
                    <Col span={1}>
                        <Card>
                            <Input
                                prefix={icons()['address-book']}
                                scale="md"
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
                        <Card>test</Card>
                    </Col>
                </Row>
            </div>
        </StyleProvider>
    );
}

export default App;
