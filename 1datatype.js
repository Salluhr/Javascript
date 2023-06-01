var a ="iuiui"
var b = 10
var c = true

typeof(a)
'string'

typeof(b)
'number'

typeof(c)
'boolean'
   // Here we can perform basic math operation
var a =3
var b = 10
a+b
13
a-b
-7
a*b
30
a/b
0.3

3%5
3
2%5
2
/* When we try to find modulus of smaller to larger the answer always be smaller always be smaller Number
ex. modulus of 3%5 is 3
*/

// string
a="hi"
b="js"
a+b             // here it concat the string
'hijs'
a-b
NaN
a*b
NaN
a/b
NaN
rest of all shows nan means " not a number"

a="hi"
b=10
a+b
'hi10'
a-b
NaN
// Here also string minus no. is Nan Not A number

/*  Rules fir data types
     String + String= String
     String + Number= String
     Number + String= String
     Number + Number =Number
 */

10+'20'+30
'102030'    // here no. + string is string and + no. is equal to string
10+20+"30"
'3030'      // here no. + no. is no.  and + string is equal to string
"10"+20+30
'102030'    // here string  + no.  is string and + no. is equal to string


/* Here if both the side of operator have a pure no. then the operation work and plus will make operation of concatination.
and other perform there operation like minus multiply and divide. example := */

10+'20'+30-1
102029

10+20+"30"-1
3029

"10"+20+30-1
102029

// Boolean
var a=true
var b=false 
var c=true

a+b
1

a+c
2

b+b
0

a/0
Infinity

b/0
NaN