import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import store from './state';
import Container from './components/Container';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import QueueScreen from './Queue/QueueScreen';
import './index.css';
import logo from './logo.svg';
import Content from './components/Content';

const App = () =>
    <Provider store={store}>
        <Container>
            <Navigation>
                <Logo src={logo} />
            </Navigation>
            <Content>
            <QueueScreen />
            </Content>
        </Container>
    </Provider>;

ReactDOM.render(<App/>, document.getElementById('root'));
