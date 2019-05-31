import {database} from './firebase'


export const fetchPosts=()=> new Promise((resolve,reject)=>{
    let data=[]
    database.child('/posts').on('value',(snap)=>{
        snap.forEach((doc)=>{
            data.push({
                id:doc.key,
                title:doc.val().title,
                intro:doc.val().intro,
                image:doc.val().image,
                to:doc.val().to,
                from:doc.val().from,
                where:doc.val().where
            })
        })
        resolve(data);
    })
   
})

export const  fetchPostsWithID=(id)=> new Promise((resolve,reject)=>{
    database.child('/posts/'+id).on('value',(snap)=>{
        resolve(snap.val())
    })

})