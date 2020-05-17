import React from 'react';
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from "antd-mobile";
import {login} from '../../reducers/login'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import formhoc from '../../components/form-hoc/form-hoc'
import './login.css'
import loginbackimg from './loginbg.png';

@connect(
  state => state.user, {
    login
  }
)

@formhoc
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  register() {
    this.props.history.push("/register");
  }

  handleLogin() {
    this.props.history.push("/index");
    this.props.login(this.props.state)
  }

  render() {
    return <div className="container">
        {this.props.redirectTo&&this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <p className="welcome">WELCOME</p>
        <span className="welcomelabel">
        The labels you love
discover over 850 world-class fashion brands here.
        </span>
        <div className="conimg">
          <div  className="mask">
          </div>
        <img src={loginbackimg} className="App-logo" alt="logo" />
       </div>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.props.handleChange("user", v)}>
              Username
            </InputItem>
          </List>
          <WhiteSpace />
          <List>
          <InputItem onChange={v => this.props.handleChange("pwd", v)} type="password" >
              Password
            </InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type="primary" style={{ color: "#fff", marginTop: "20px"}}>
          Sign in
          </Button>
          <WhiteSpace />
          <Button onClick={this.register} type="ghost" style={{ color: "#fff"}}>
          Sign up
          </Button>
        </WingBlank>
      </div>;
  }
}
export default Login
