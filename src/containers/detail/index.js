import React from "react";
import SliderCon from '../../components/silder/index';
import { Drawer, List, NavBar, Icon, InputItem } from 'antd-mobile';
import './index.css'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     open: false
    };
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

//   goIndex = () => {
//     this.props.history.push("/detail");
//   }

handleClick = () => {
    this.inputRef.focus();
  }

  render() {

    return (
        <div>
            <div className="seconedGlug" >
            <img src='http://i1.fuimg.com/718574/0ff97c74185b3707.png'></img>
            <span className="title">
            West news
            </span>
            <span className="discrpt">
            Different Modern Applications of Piezoelement
            </span>
            <div className="footerInfolist" style={{ justifyContent: 'left', padding: '0', marginTop: 6}}>
                <img src='http://i2.tiimg.com/718574/3b14b18639d14fc1.png'></img>
                <span>Barbara Powell</span>
                <span className="time">
                    Yesterday at 23:00
                </span>
            </div>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              commit
            </div>
            <InputItem
            clear
            placeholder="commit"
            ref={el => this.inputRef = el}
             ></InputItem>
        </div>
        </div>
    )
  }
}

export default Index;
