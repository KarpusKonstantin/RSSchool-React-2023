import React from 'react';
import { ISwapiData } from '../types/types';

interface IListProps {
  swData: ISwapiData[];
}

export default class List extends React.Component<IListProps> {
  constructor(props: IListProps) {
    super(props);
  }

  render() {
    return (
      <div className="ListItems">
        Список!
        <ul>
          {this.props.swData.map((item, idx) => {
            return <li key={idx}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
