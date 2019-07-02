import {database} from './firebase'


export const fetchPosts=()=> new Promise((resolve,reject)=>{
    let data=[]
    database.child('/trienlam').on('value',(snap)=>{
        snap.forEach((doc)=>{
            data.push({
                id:doc.key,
                key:doc.key,
                diadiem:doc.val().diadiem,
                from:doc.val().from,
                to:doc.val().to,
                logo:doc.val().logo,
                noidung:doc.val().noidung,
                quymo:doc.val().quymo,
                sanpham:doc.val().sanpham,
                tentrienlam:doc.val().tentrienlam,
                tieude:doc.val().tieude,
                noitochuc:doc.val().noitochuc,
                phamvi:doc.val().phamvi
            })
        })
        resolve(data);
    })
   
})

export const  fetchPostsWithID=(id)=> new Promise((resolve,reject)=>{
    database.child('/trienlam/'+id).on('value',(snap)=>{
        resolve(snap.val())
    })

})
export const submitPro=(data)=>new Promise((resolve,reject)=>{
    database.child('/display').push(data)
})