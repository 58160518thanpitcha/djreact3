import React, { Component } from 'react';
import 'antd/dist/antd.css'
import CustomLayout from './containers/Layout';
import CustomerList from './containers/CustomerListView';


class App extends Component {
  render(){
  return (
    <div className="App">
     <CustomLayout>
      <CustomerList />
     </CustomLayout>

    </div>
  );
}
}
export default App;
