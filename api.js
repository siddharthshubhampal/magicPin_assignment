exports.handler = async (event, context, callback) => {
    console.log(event)
    
    const regex1 = new RegExp("^(?=.{6,})");
    const regex2 = new RegExp("^.{6,12}$");
    const regex3 = new RegExp("^(?=.*[a-z])");
    const regex4 = new RegExp("^(?=.*[A-Z])");
    const regex5 = new RegExp("^(?=.*[0-9])");
    const regex6 = new RegExp("^(?=.*[*$_#=@])");
    const regex7 = new RegExp("^(?=.*[!%()])");
  	let pwd = event.password;
  	let pwdArray = pwd.split(',');
  	var response=[];
    pwdArray.forEach(function(key){
    	key=key.trim();
    	let flag = false;
    	let reason='';
    	if(!regex1.test(key)){
            reason = "Password must be at least 6 characters long."
        } else if (!regex2.test(key)){
            reason = "Password must be at max 12 characters long."
        } else if(!regex3.test(key)){
            reason = "Password must contain at least one letter from a-z."
        } else if(!regex4.test(key)){
            reason = "Password must contain at least one letter from A-Z."
        } else if(!regex5.test(key)){
            reason = "Password must contain at least one letter from 0-9";
        } else if(!regex6.test(key)) {
            reason = "Password must contain at least one letter from *$_#=@";
        } else if(regex7.test(key)) {
            reason = "Password cannot contain %!)(.";
        } else {
            flag = true;
        }
        if (flag){
        	response.push({
        	    "key":key,
        	    "Result":"Success",
        	    "Reason": ''
        	})
        }else{
        	response.push({
        	    "key": key,
        	    "Result": "Failure",
        	    "Reason": reason
        	})
        }
       
    })
callback(null, response);
}
