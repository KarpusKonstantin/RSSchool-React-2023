import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import List from './components/ListItems';
import { axiosInstance } from './api/axios.api';
import { ISwapi, ISwapiData } from './types/types';

class App extends React.Component<ISwapiData> {
  state = {
    swData: [],
    isLoading: true,
  };

  async componentDidMount(): Promise<void> {
    const { data } = await axiosInstance.get<ISwapi>('');

    this.setState({
      swData: data.results,
      isLoading: false,
    });
  }

  handleClick = async (value: string): Promise<void> => {
    this.setState({
      isLoading: true,
    });

    if (value !== '') {
      const { data } = await axiosInstance.get<ISwapi>(`?search=${value}`);

      this.setState({
        swData: data.results,
        isLoading: false,
      });
    }
  };

  render() {
    return (
      <div>
        <NavBar getValue={this.handleClick} />
        {this.state.isLoading ? (
          <h2>Загрузка данных!</h2>
        ) : (
          <List swData={this.state.swData} />
        )}
      </div>
    );
  }
}

export default App;
