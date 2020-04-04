import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { HashRouter as Router, withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Login from './Login/LoginView'

// @inject('AppStore')
@observer
// 在组件中可通过this.props.history.push跳转路由，根组件不能加@withRouter，这里只是做示例
// @withRouter
class AppView extends  Component {
 constructor(props, context) {
    super(props, context);
    this.state = {
        isLoaded: true
    }
    // this.store = this.props.AppStore;
  }
  //完成：插入真实 DOM前
  componentWillMount (){
    // 设置全局路由表配置
    // this.store.setRouterCfg()
  }
  render() {
    console.log('app view render');
    return (
      <div className="app">
        <Router>
          {
            this.state.isLoaded && (
              <Switch>
                {/* <Route path="/login" exact render={Login} /> */}
                {/* <Route path="/register" exact render={(({location}) => (<h2>注册页</h2>)) } /> */}
              </Switch>
            )
          }
        </Router>
      </div>
    )
  }
}

export default AppView;