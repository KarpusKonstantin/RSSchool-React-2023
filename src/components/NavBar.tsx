import React from 'react';

export interface INavBarProps {
  getValue: (value: string) => Promise<void>;
}

export default class NavBar extends React.Component<INavBarProps> {
  state = {
    value: '',
  };

  constructor(props: INavBarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(): void {
    const value = localStorage.getItem('searchValue');

    if (value !== null) {
      this.setState({
        value: localStorage.getItem('searchValue'),
      });
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value,
    });

    localStorage.setItem('searchValue', event.target.value);
  }

  handleClick() {
    this.props.getValue(this.state.value);
  }

  render() {
    return (
      <div className="navBar">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleClick}>
          Поиск
        </button>
      </div>
    );
  }
}
