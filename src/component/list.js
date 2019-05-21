import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h1>List for {this.props.name}</h1>
        {this.props.children}
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>	
        </ul>
      </div>
    );
  }
}

export default List;