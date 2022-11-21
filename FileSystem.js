var fs = require('fs');

// let dir = './folder1';    //name of the directory/folder

// if (!fs.existsSync(dir)){    //check if folder already exists
//     fs.mkdirSync(dir);    //creating folder
// }

// fs.writeFile('folder1/bio.txt', "My name is swadhin", (err) =>{
//     if(err) {
//         return console.log(err);
//     }
    
    
//     let info = fs.readFile('folder1/bio.txt', 'utf8', (err, data) =>{
//         if(err) {
//             return console.log(err);
//         }
        
//         //console.log(data)
//     });
    
//     fs.appendFile('folder1/bio.txt', " I am a computer engineer", () =>{
//         if(err) {
//             return console.log(err);
//         }
        
//     })
   
//    fs.rename('folder1/bio.txt', 'folder1/mybio.txt', (err) =>{
//     if(err) {
//         return console.log(err);
//     }
    
//     });
    
    fs.unlink('folder1/mybio.txt', (err) =>{
        if(err) {
            return console.log(err);
        }
    
    });
    
    fs.rmdir('folder1', (err) =>{
        if(err) {
            return console.log(err);
        }
    })
    


