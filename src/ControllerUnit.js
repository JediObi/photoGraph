import React, {Component} from 'react';
import './ControllerUnit.css';

class ControllerUnit extends Component {

    handleClick() {
        
                if (this.props.position.isCenter) {
                    //如果图片是居中的，则翻转图片
                    this
                        .props
                        .inverse();
                } else {
                    //如果图片不居中，则把该图片居中
                    this
                        .props
                        .center();
                }
    }

    render() {
        let controllerUnitClassName = 'controller-unit';
        
        //点击图片或指示器都会重新渲染对应的指示器，所以会在此回到此处触发判断
        if(this.props.position.isCenter){
            controllerUnitClassName += ' is-center';
            controllerUnitClassName += this.props.position.isInverse? ' is-center is-inverse':'';
        }
                

        return (
            <span className={controllerUnitClassName} onClick={() => this.handleClick()}></span>
        );
    }
}

export default ControllerUnit;
