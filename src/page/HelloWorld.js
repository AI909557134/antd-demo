import React from 'React';
import List from '../component/list.js';
import { Card } from 'antd';

class HelloWorld extends React.Component {
//	constructor(props) {
//  super(props);
//  this.state = {
//    value: 0,
//  };
//}
	state = {
		value:0
	}
	
	componentDidMount(){
		console.log("组件挂载后自动调用");
	}
	
	componentWillUnmount(){
		console.log("组件卸载前自动调用")
	}	
	
	componentDidUpdate(){
		console.log("UI每次更新后调用")
	}
	
  render() {
  	const style = {
	    width: '400px',
	    margin: '30px',
	    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
	    border: '1px solid #e8e8e8',
	  };
	  return (
      <List name="张三">
      	<p>test</p>
      	<button onClick={() => this.setState({value:this.state.value+1})}>{this.state.value}</button>
      	<Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
      	 <Card.Meta
	        avatar={<img 
	          alt=""
	          style={{ width: '64px', height: '64px', borderRadius: '32px' }}
	          src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
	        />}
	        title="Alipay"
	        description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
	      />
    		</Card>
      </List>      
    );
  }
}

export default HelloWorld;