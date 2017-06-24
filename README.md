# _Ping Pong_

#### _A generally pointless website, utilizing looping and arrays, 6-23-2017_

#### By _**Nathan E. M. Mayer**_

## Description

A web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

1. Numbers divisible by 3 are replaced with "ping"
2. Numbers divisible by 5 are replaced with "pong"
3. Numbers divisible by 15 are replaced with "pingpong"
4. A user should be able to enter a new number and see new results over and over again.

## Specifications

| Rank  | Behavior   | Input  | Output |
|---|---|---|---|
| 1 | Receive userInput & set var  | 15  | 15  |
| 2 | Generate array of numbers from 1 - userInput  | 5  | [1,2,3,4,5]  |
| 3 | Replace values divisible by 3 with string "ping"  | [1,2,3,4,5]  | [1,2,"ping",4,5,"ping"]  |
| 4 | Replace values divisible by 5 with string "pong"  | [1,2,3,4,5]  | [1,2,"ping",4,"pong","ping"]  |
| 5 | Replace values divisible by 3 & 5 with string "pingpong"  | [1,2,3,4,5...,15]  | [1,2,"ping",4,5,"ping"...,"pingpong"]  |
| 6 | Use HTML form to collect input | | |
| 7 | Reset form and hide result to allow cycling process without reloading the page | click on button or input | hide result|
| 8 | clear arrays and var's | click on button or input | userInput; , numbers [];|
| 9 | input gathering in HTML | 5 | 5|
| 10 | manipulate DOM by adding li with index val | [1,2,"ping"...] | <li>1 <br> <li>2 <br><li>"ping" |

## Setup/Installation Requirements

* _Open the site in a web browser_
* _Enter a number in the input field_
* _Marvel at the complexity_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_Please email {support} if you run into any issues or have questions, ideas or concerns.  We encourage you to contact us with suggestions or contributions to the code._

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2017 **_{List of contributors or company name}_**
