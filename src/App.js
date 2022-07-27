
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

import {
  Routes,
  Route,
} from "react-router-dom";

import { AppState } from './AppState'



function App() {
 
    return (
        <AppState>
            <Routes>
                <Route path="/" element={
                    <Layout>
                        <HomePage/>              
                    </Layout>
                }/>

                <Route path="/login" element={ <Login/>}/>

                <Route path="/register" element={ 
                    <Layout>
                        <Signup/>
                    </Layout>
                }/>

                
            </Routes>
        </AppState>
    )
  
}

export default App;
