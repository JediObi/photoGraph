import React, {Component} from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import imageDatas from './imageDatas.json';
/*
class CardOnlyMedia extends Component{
    render(){
        return (
            <Card>
                <CardMedia overlay={<CardTitle title={"overlay title"} subtitle={"overlay subtitle"}></CardTitle>}>
                    <img src={require('./images/1.jpg')} alt=""></img>
                </CardMedia>
            </Card>
        );
    }
}
*/
function genImageURL(imageDataArr) {
    for (let i = 0, j = imageDatas.length; i < j; i++) {
        let singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('./images/' + singleImageData.fileName);
        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
}

let imageDataArr = genImageURL(imageDatas);
//alert(imageDataArr[0].imageURL);


class ImageFigure extends Component{
    render(){
        return(
            <figure>
                <img/>
                <figcaption>
                    <h2></h2>
                </figcaption>
            </figure>
        );
    }
}

class CardOnlyMedia extends Component{
    render(){

        let controllerUnits = [],
            imgFigures = [];

        imageDataArr.forEach((value)=>{
            imgFigures.push(<ImageFigure data={value}/>);
        });

        return(
            <section classname="stage">
                <section className="img-sec">
                    {imgFigures}
                </section>
                <nav className="controller-nav"></nav>
            </section>
        );
    }
}



export default CardOnlyMedia;