
const fs = require("fs");

//Declaring arrays globally.
 let posts=[];
 let categories=[];

module.exports.initialize=function(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./data/posts.json', 'utf8', (err, data) => {
            if (err){
                reject('unable to read file');
            }
            else{
                posts=JSON.parse(data);
            fs.readFile('./data/categories.json', 'utf8', (err, data) =>{
                if(err){
                     reject('unable to read file');
                    }else{
                        categories=JSON.parse(data);
                        resolve();
                    }
            });
                
            }
       });
       
    })
}

module.exports.getAllPosts=function() {
    return new Promise((resolve,reject)=>{
        if(posts.length==0){
            reject("no message");
        }
        else{
            resolve(posts);
        }
    });
}


module.exports.getCategories=function() {
    return new Promise((resolve,reject)=>{
        if(categories.length==0){
            reject("no message");
        }
        else{
            resolve(categories);
        }
    });
}

module.exports.getPublishedPosts=function(){
    return new Promise((resolve,reject)=>{
        let publisheedPosts = posts.filter(post => post.published === true);
        if(posts.length==0){
            reject("no message");
        }
        else{
            resolve(publisheedPosts);
        }

    })
}

