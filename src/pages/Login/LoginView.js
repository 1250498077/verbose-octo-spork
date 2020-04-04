import React from 'react';
import { Component } from 'react';
import { parse } from 'qs';
import { get } from 'lodash';
import { withRouter } from 'react-router-dom';
import {  } from 'antd';

@withRouter
class loginView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
  }

  // //准备：即将被重新渲染，状态未变化
  // componentWillMount() { }
  // //准备：即将被重新渲染，状态未变化
  // componentWillUpdate(nextProps, nextState) { }
  // //完成：正在被重新渲染，状态已变化
  // componentDidUpdate(prevProps, prevState) { }
  // // 已加载组件，收到新属性时调用
  // componentWillReceiveProps(nextProps) { }
  // // 已插入真实DOM
  // componentDidMount() {

  // }

  // 初始状态或状态变化会触发render
  render() {
    return (
      <div>
        登录页
      </div>
    )
  }
}

export default loginView
