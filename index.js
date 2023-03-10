const prompt = require('prompt-sync')();
const str = prompt('USERNAME:');
const str1 = prompt("PASSWORD:");
var validRegex = /^([a-zA-Z0-9\._]+)@([[a-zA-Z0-9]+).([a-z]{2,20})$/;
        
        if(str.match(validRegex) && str1.length>=6)
        {
            let s=str.substring(0,str.indexOf("@"));
            let u=s.toUpperCase();
            console.log("SUCCESSFULLY LOGGED IN "+ u+"\nUSERNAME :"+str+"\nPASSWORD :"+str1);
        }
        else 
        {
            console.log("INVALID");
        }
    
