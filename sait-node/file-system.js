const fs=require("fs");
fs.appendFile("newFile.txt", "Hello World! (again)", err=>{
    if (err) throw err;
    console.log("File saved.");
});

fs.open('newFile2.txt', 'w', (err, file)=>{
    if (err) throw err;
    console.log('File saved.');
});

fs.writeFile("newfile3.txt", "Hello world!", err=> {
    if (err) throw err;
    console.log("Filesaved.");
});

fs.unlink("newfile2.txt", err=> {
    if (err) throw err;
    console.log("File deleted.");
});