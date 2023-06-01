var a ="10"
var b= "20"
var c ="fab"

a+b
'1020'
// here it concatinate the string

parseInt(a)+parseInt(b)
30

parseInt(c)
NaN

/*parseint convert the string that contain numbers in double quotes into the pure integer no.
   but here in var c ="fab" it contain string and letter so it gives nan */

var a ="10.4"
var b= "20.7"

parseInt(a)+parseInt(b)
30
// here we see it doesnt give decimal value and only give pure integer no.
    To overcome this problem we come with the method of ES6
ES6//

Number(a)+Number(b)
31.1

var a="21c"
var b ="43g66"
var c= "v42m77"
parseInt(a)
21
parseInt(b)
43
parseInt(c)
NaN
// here when we pass no. and letter in the string, the parseint function get the no. till the string found, when string detected it stops

// but if we use Number() then it will give us nan

var a="21c"
var b ="43g66"
var c= "v42m77"
Number(a)
NaN
Number(b)
NaN
Number(c)
NaN