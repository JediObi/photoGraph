import React, {Component} from 'react';
import './ImageFigure.css';

class ImageFigure extends Component{

    handleClick(){
        this.props.inverse();
    }

    render(){
        let styleObj = {};
        
        if (this.props.position.pos){
            styleObj = this.props.position.pos;
        }
        if(this.props.position.rotate) {
            styleObj['transform'] = 'rotate('+this.props.position.rotate+'deg)';
        }
        return(
            <figure className="img-figure" style={styleObj} onClick={this.handleClick}>
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