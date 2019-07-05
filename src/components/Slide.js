import React, { Component,} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button
} from 'reactstrap';
import {fetchPosts} from '../databases/logicCode';
import { Link } from "react-router-dom";
const items = [
    {
        title:'VIETNAM LAS',
        time:'Từ ngày 2/7/2019 - 5/7/2019',
        location:'QL50 Bình Chánh, Tp. HCM'

    },
    {
        title:'VIETNAM LAS',
        time:'Từ ngày 2/7/2019 - 5/7/2019',
        location:'QL50 Bình Chánh, Tp. HCM'
    },
    {
        title:'VIETNAM LAS',
        time:'Từ ngày 2/7/2019 - 5/7/2019',
        location:'QL50 Bình Chánh, Tp. HCM'
    }
];

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0,
        posts:[] };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    componentDidMount(){
        fetchPosts().then((posts)=>{
            this.setState({posts})
        }).catch((error)=>{
            console.log('Loi fecthPosts'+`${error}`)
        });
    }
    render() {
        const { activeIndex } = this.state;

        const slides = this.state.posts.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <div>
                        <img src='https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-watercolor-purple-blue-gradient-image_7007.jpg' alt={item.altText} style={{ width: '100%', height: '100%' }} />
                        <h2  className='text-over-image' style={{  color:'#FF4F4F',textAlign:'center' }}>{item.tieude}</h2>
                        <h4  className='text-over-image' style={{ color:'#56575D',top:'35%' }}>{`Từ ngày ${item.from} đến ${item.to}`}</h4>
                        <hr className='text-over-image' style={{top:'40%',height:'1px',width:'70%',border:'none',background:'#56575D'}}/>
                        <h2  className='text-over-image' style={{ color:'white',top:'45%' }}>{item.time}</h2>
                        <h5  className='text-over-image' style={{ color:'#56575D',top:'60%' }}>{`${item.diadiem},${item.noitochuc}`}</h5>

                        <Link to={`/trien-lam/nuoc-ngoai/${item.key}/thong-tin`}><Button className='text-over-image' 
                        style={{ color:'white',top:'80%' }}
                       
                        >Xem chi tiết</Button></Link>

                    </div>

                  

                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default Slide;