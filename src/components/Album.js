import React, { Component } from 'react';

class Album extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }
    renderImages() {

    }
    render() {
        return (
            <div>
                <div className="home_products photoimg">
                <div className="prev disabled"><a><img src="/images/pre1.png" alt title /></a></div>
                <div className="scrollable">
                    <div style={{ left: '-37014px' }} className="list_items"><div className="item cloned">
                    </div>
                        <div className="item">
                            <div className="img"><a href="/uploads/images/gallery/0.99053300155391063556420987_1223447571163780_2211030729981165568_n.jpg" className="group1"><img src="/uploads/images/gallery/0.99053300155391063556420987_1223447571163780_2211030729981165568_n.jpg" alt height={120} width={180} /></a></div>
                        </div><div className="item cloned">
                        </div>
                        <div className="item">
                            <div className="img"><a href="/uploads/images/gallery/0.94189400155391062456226051_1223448111163726_8089546339098034176_n.jpg" className="group1"><img src="/uploads/images/gallery/0.94189400155391062456226051_1223448111163726_8089546339098034176_n.jpg" alt height={120} width={180} /></a></div>
                        </div>
                        <div className="item">
                            <div className="img"><a href="/uploads/images/gallery/0.82780300155391062456225998_1223447831163754_5780570825551773696_n.jpg" className="group1"><img src="/uploads/images/gallery/0.82780300155391062456225998_1223447831163754_5780570825551773696_n.jpg" alt height={120} width={180} /></a></div>
                        </div>
                        <div className="item">
                            <div className="img"><a href="/uploads/images/gallery/0.72885500155391062456209498_1223447677830436_6707070557780705280_n.jpg" className="group1"><img src="/uploads/images/gallery/0.72885500155391062456209498_1223447677830436_6707070557780705280_n.jpg" alt height={120} width={180} /></a></div>
                        </div>
                        <div className="item">
                            <div className="img"><a href="/uploads/images/gallery/0.60842600155391062456171722_1223448274497043_6195988875693785088_n.jpg" className="group1"><img src="/uploads/images/gallery/0.60842600155391062456171722_1223448274497043_6195988875693785088_n.jpg" alt height={120} width={180} /></a></div>
                        </div>
                        
                    </div>
                </div>
                <div className="next"><a><img src="/images/next1.png" alt title /></a></div>
                <div className="clear" />
            </div>
            </div>

        );
    }
}

export default Album;