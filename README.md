# Simple-Model-View-Controller
Manage Single Web App vues without using Angular. This is a Jquery exemple to install a simple Model–view–controller in JavaScript.

The goal of this snippet is to use divs as pages and link them to the url'anchor. You will then be able to navigate in your project using simple href="#nameofyourview".

#How to use it in your project? 
First, you need to wrap all your content in divs. In this example we have 5 divs:

"0": "#bulk-search",
"1": "#simple-search",
"2": "#export-validation",
"3": "#bulk-search-results",
"4": "#simple-search-results"

And list them in the anchorPages object. 

Next, add a case for each of your "pages" like this: 

//if hash is #export-validation
        case 'export-validation':
            var exceptionArray = [
                '#export-validation' //list all divs to show 
            ];
            hideAllExcept(exceptionArray);
            break;

The snippet will hide all divs in the page except the divs you specified in the exceptionArray. 

Let me know if you have feedback and if you find this usefull! 
