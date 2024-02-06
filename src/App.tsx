import { Col, Input, Row, StyleProvider } from '../lib/main';
import './App.css';

function App() {
    return (
        <StyleProvider>
            <Row gutter={12} cols={2}>
                <Col span={1}>
                    <Input scale="md" placeholder="Какой-то текст" />
                </Col>
                <Col span={1}>test</Col>
            </Row>
        </StyleProvider>
    );
}

export default App;
