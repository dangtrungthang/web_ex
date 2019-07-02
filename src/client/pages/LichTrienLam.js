import React, { Component } from 'react';
import {Table} from 'reactstrap';
import {database} from '../../databases/firebase';
import {fetchPosts} from '../../databases/logicCode';
class LichTrienLam extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[] // luu du lieu trien lam
        }
    }
    componentDidMount(){
        fetchPosts().then((posts)=>{
            this.setState({posts})
        }).catch((error)=>{
            console.log('Loi fecthPosts'+`${error}`)
        });
    }
    renderData(){ // render trien lam ra bang
        const {posts}=this.state;
        return posts.map((value,index)=>(
          <tr>
             <td>{`${value.from}-${value.to}`}</td>
              <td>{value.tieude}</td>
             
              <td>{`${value.diadiem}, ${value.noitochuc}`}</td>
          </tr>  
        ))
    }
    render() {
        return (
            <div className='main wrapper'>
               <div className='container'>
               <h1 className="title"> Lịch triễn lãm</h1>
               <Table bordered>
                    <thead>
                        <tr>
                            <th>Thời gian</th>
                            <th>Tên triễn lãm</th>
                          
                            <th>Địa điểm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan='4' className='info-lich'>
                                <h3>AUGUST, 2019</h3>
                            </td>
                        </tr>
                        {this.renderData()}
                    </tbody>
                </Table>
               </div>
            </div>
        );
    }
}

export default LichTrienLam;