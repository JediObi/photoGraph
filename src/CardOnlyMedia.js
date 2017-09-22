import React, {Component} from 'react';
import imageDatas from './imageDatas.json';
import './CardOnlyMedia.css';

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

const ImageFigure = (props) => {
    return (
        <figure className="img-figure">
            <img src={props.data.imageURL} alt={props.data.title}/>
            <figcaption>
                <h2 className="img-title">{props.data.title}</h2>
            </figcaption>
        </figure>
    );
}

class CardOnlyMedia extends Component {

    let
    Constant = {
        centerPos: {
            left: 0,
            top: 0
        },
        hPosRange: {
            leftSecX: [0, 0],
            rightSecX: [0, 0],
            y: [0, 0]
        },
        vPosRange: {
            x: [0, 0],
            topY: [0, 0]
        }
    };

    constructor() {
        super();
        this.state = {
            /* imgsArrageArr:[{
                 pos:{
                     left: '0',
                     top: '0'
                 }
             }]*/
        }
    }

    componentDidMount() {
        let stageDOM = React.findDOMNode(this.refs.stage);
        let stageW = stageDOM.scrollWidth,
            stageH = stageDOM.scrollHeight;
        let halfStageW = Math.ceil(stageW / 2),
            halfStageH = Math.ceil(stageH / 2);

        let imgFigureDOM = React.findDOMNode(this.refs.imageFigure0);
        let imgW = imgFigureDOM.scrollWidth,
            imgH = imgFigureDOM.scrollHeight;
        let halfImgW = Math.ceil(imgW / 2),
            halfImgH = Math.ceil(imgH / 2);

        //计算中心图片的坐标
        this.Constant.centerPos = {
            left: halfStageW - halfImgW,
            top: halfStageH - halfImgH
        };
        //计算水平方向的坐标范围
        this.Constant.hPosRange.leftSecX[0] = -halfImgW;
        this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
        this.Constant.hPosRange.rightSecX[0] = stageW + halfImgW;
        this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
        this.Constant.hPosRange.y[0] = -halfImgH;
        this.Constant.hPosRange.y[1] = stageH - halfImgH;

        //计算上部坐标范围
        this.Constant.vPosRange.topY[0] = -halfImgH;
        this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
        this.Constant.vPosRange.x[0] = halfStageW - imgW;
        this.Constant.vPosRange.x[1] = halfStageW;

        this.reArrange(0);

    }

    reArrange(centerIndex) {
        //获取状态中的图片坐标数组，获取坐标分布范围
        let imgsArrangeArr = this.state.imgsArrangeArr,
            Constant = this.Constant;
        //从坐标分布范围中取出具体的坐标块
        let centerPos = Constant.centerPos,
            hPosRange = Constant.hPosRange,
            vPosRange = Constant.vPosRange;
        //从坐标块中取出具体的边界值
        let hPosRangeLeftSecX = hPosRange.leftSecX,
            hPosRangeRightSecX = hPosRange.rightSecX,
            hPosRangeY = hPosRange.y,
            vPosRangeTopY = vPosRange.topY,
            vPosRangeX = vPosRange.x;

         let   imgsArrangeTopArr = [],      //上部图片的位置信息
            topImageNumber = Math.ceil(Math.random() * 2),  //上部的图片数量，0或1
            tomImgSpliceIndex = 0,          //上部图片的索引
            imgsArrangeCenterArr = imgsArrangeArr.splice(); //居中图片的位置信息
    }

    render() {

        let controllerUnits = [],
            imgFigures = [];

        imageDataArr.forEach(function (value, index) {
            if (!this.state.imgsArrangeArr[index]) {
                this.state.imgsArrangeArr[index] = {
                    pos: {
                        left: 0,
                        top: 0
                    }
                }
            }
            imgFigures.push(<ImageFigure data={value} ref={'imgFigure' + index}/>);
        }.bind(this));

        return (
            <section className="stage" ref="stage">
                <section className="img-sec">
                    {imgFigures}
                </section>
                <nav className="controller-nav">
                    {controllerUnits}
                </nav>
            </section>
        );
    }
}


export default CardOnlyMedia;