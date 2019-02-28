# Magicpin Campus Drive Assignment 2019
Assignment for Magicpin campus drive (profile: Application Developer)

## Live Link: <a href="http://magicpin-assignment-jiit.s3-website.ap-south-1.amazonaws.com/" target="_blank" >http://magicpin-assignment-jiit.s3-website.ap-south-1.amazonaws.com/</a>


## API
I have developed API for this task. API supports GET and POST methods.
```
API: https://8dna95pv0e.execute-api.ap-south-1.amazonaws.com/dev
GET: https://8dna95pv0e.execute-api.ap-south-1.amazonaws.com/dev?password=asdasd....
POST: data:{"password": "asdasd..."}
```

## Problem Statement
You are writing authentication module for your first website. In order to ensure your
users are not vulnerable to brute force attacks on weak passwords you want to help
them create better passwords. Write a program to check the validity of password input
by users with respect to following rules:
* Minimum length: 6
* Maximum length: 12
* At least 1 letter in [a-z], [0-9], [A-Z] and [*$_#=@] each.
* It should not contain any letter from [%!)(]

Your program should accept a sequence of comma separated passwords and will check
them according to the above criteria. Print out each password with resulting 'Success' or
'Failure'. In case of 'Failure' also print the reason for failure in the same line.
### Example
If the following passwords are given as input to the program:
12sdA@83,a F1#,2w3E*%dg,2We3345, 1234567
Then, the output of the program should be:
```
12sdA@83 Success
a F1# Failure Password must be at least 6 characters long.
2w3E*%dg Failure Password cannot contain %!)(.
2We3345 Failure Password must contain at least one letter from *$_#=@.
1234567 Failure Password must contain at least one letter from a-z.
```

Hint: Error messages for each check:
1. Password must be at least 6 characters long.
2. Password must be at max 12 characters long.
3. Password must contain at least one letter from <set_that_failed>.
4. Password cannot contain %!)(.

## Solution
I have made an API. Frontend is hosted on AWS S3. Frontend makes AJAX request to API Gateway and fetches response. I have used styling of magicpin.com as this assignment was for Magicpin.
* Assumption: I have assumed that no password can start and end with space. In given example of problem statement, response of <b>" 1234567"</b> is <b>"1234567 Failure Password must contain at least one letter from a-z."</b>. This response trims space before " 1234567".

### File Description
| Files | Description |
| ------ | ------ |
| api.js | This is lambda function. Api is hosted using API GATEWAY. |
| index.html | This is frontend of the webapp. This makes request to API and shows all data in html. |
| _working_without_html.html | This is standalone html file. This does client side password verification and shows response in browser. |

Developer
----

Siddharth Shubham Pal

+91-7007010679 / 8765221829
