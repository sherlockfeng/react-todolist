import './App.less';
import Header from './Components/Header';
import Layout from './Components/Layout';
import TodoContent from './Components/TodoContent';
import './global.less';

function App() {
    return (
        <div className="App">
            <Layout>
                <Header />
                {/* <TodoContent /> */}
            </Layout>
        </div>
    );
}

export default App;
