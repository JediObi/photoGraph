import React, {Component} from 'react';
import './ImageFigure.css';


class ImageFigure extends Component{

    //处理点击事件
    //当点击时调用属性中的inverse方法
    //inverse会调用父组件的方法，父组件的方法会重新设置父组件中的状态值，然后重新渲染
    //重新渲染就会执行render方法，在render中判断新的状态值，根据状态值管理class，给组件新的状态

    handleClick(){
        if(this.props.position.isCenter){
            this.props.inverse();
        }else{
            this.props.center();
        }
    }

    render(){
        let styleObj = {};
        
        if (this.props.position.pos){
            styleObj = this.props.position.pos;
        }
        if(this.props.position.rotate) {
            styleObj['transform'] = 'rotate('+this.props.position.rotate+'deg)';
        }
        //根据属性中isInverse的状态来添加翻转
        let imgFigureClassName = 'img-figure';
        imgFigureClassName += this.props.position.isInverse ? ' img-inverse':'';
        return(
            <figure className={imgFigureClassName} style={styleObj} onClick={()=>this.handleClick()}>
                <img src={this.props.data.imageURL} alt={this.props.data.title}/>
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                    <div className="img-back">
                        <p>
                            {this.props.data.desc}
                        </p>
                    </div>
                </figcaption>
            </figure>
        );
    }
}

export default ImageFigure;