import React, { Component } from 'react';
import { fetchPosts } from "../../databases/logicCode"
import CardPost from '../../components/CardPost';
import { Link } from "react-router-dom";

const menu={
    hcm:false,
    hanoi:false,
    khac:false
}
class TrongNuoc extends Component {constructor(props) {
  super(props);
  this.state={
      "posts":[
      "1","2"
      ],
      ...menu,
      hcm:true
  }
}

toggleMenu=(event,type)=>{
    event.stopPropagation();

    this.setState({
      ...menu,
      [type]: true
    });
}
componentDidMount() {

  fetchPosts().then((posts)=>{
      this.setState({posts})
  }).catch((error)=>{
      console.log('Loi fecthPosts'+`${error}`)
  });
}
renderPosts(){
  const {posts,hcm,hanoi,khac}=this.state;
  const data=posts.filter((val)=>{
      if(hcm){
          return val.noitochuc==='TP Hồ Chí Minh';
      }if(hanoi){
          return val.noitochuc==='Hà Nội'
      }if(khac) {
        return val.noitochuc!='TP Hồ Chí Minh'&&val.noitochuc!='Hà Nội'
      }
  })
  return data.map((val,index)=>(
      <CardPost key={index}
      title={val.tieude}
      intro={val.noidung}
      image={val.logo}
      to={val.to}
      from={val.from}
      where={val.diadiem}
      paramLink={val}
      />
  ))

}
render() {
    const {hcm,hanoi,khac}=this.state;
  return (
      <div className="main wrapper">
      <div className="container">
          <h1 className="title"> Triễn lãm trong nước</h1>
          <div className="mcon">
              <ul>
                  <li className={hcm?'active':''}><Link
                  onClick={event=>this.toggleMenu(event,'hcm')} 
                  > Tp. Hồ Chí Minh </Link></li>
                  <li className={hanoi?'active':''}><Link
                  onClick={event=>this.toggleMenu(event,'hanoi')} 
                  > Hà Nội </Link></li>
                  <li className={khac?'active':''}><Link 
                  onClick={event=>this.toggleMenu(event,'khac')}
                  > Các tỉnh khác </Link></li>
                

                  <div className="clear" />
              </ul>
          </div>
          <div className="content-left">
              <div className="news_detail_content c">
                  <div id="doc-content" className="doc-content">
                      <div style={{ paddingRight: 15, paddingTop: 55 }}>

                          {this.renderPosts()}
                          {/* conttn */}

                      </div>
                  </div>
                  <div>
                      <div className="clear" />
                  </div>
                  <div className="clear" />
              </div>
          </div>
          <div className="content-right ">
              <div className="btuong">
                  <div className="clear" />
              </div>
              <div className="clear" />			</div>
          <div className="clear" />
      </div>
</div>
  );
}
}

export default TrongNuoc;