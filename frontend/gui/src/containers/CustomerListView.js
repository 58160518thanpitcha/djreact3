import React from 'react';
import Customers from '../components/Customer';
import axios from 'axios';

const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  
class CustomerList extends React.Component {
    state = {
    Customers: []
}
componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => {
        this.setState({
            Customers: res.data
        });
        console.log(res.data)
    })
}
    render(){
        return(
            <Customers data={data} />
        )
    }
    
}
export default CustomerList;