import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import List from './components/ListItems';
import { axiosInstance } from './api/axios.api';

class App extends React.Component {
  async componentDidMount(): Promise<void> {
    const { data } = await axiosInstance.get<[]>('');

    console.log('DATA >>', data);
  }

  render() {
    return (
      <div>
        <NavBar />
        <List />
      </div>
    );
  }
}

export default App;
