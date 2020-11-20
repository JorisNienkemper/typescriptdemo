"use strict";
//  START HIER
function demo01() {
    function foo(b) {
        var a = 10;
        return a + b + 11;
    }
    function bar(x) {
        var y = 3;
        return foo(x * y);
    }
    console.log(bar(7));
}
// demo01();
//demosRunner('demo waarbij het gebruik van de stack wordt getoond(goed te zien in debug mode)', demo01);
function demo02() {
    var getCallbackHandler = function () {
        // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
        console.log("Ran after atleast 0 seconds");
    };
    setTimeout(getCallbackHandler, 0);
    var now = new Date().getTime();
    //You are burning cycles like hell!
    while (new Date().getTime() < now + 2000) { /* do nothing */
    }
    console.log("Good, looped for 2 seconds");
}
//demo02();
function demosRunner(beschrijvingDemo, demo) {
    console.log(beschrijvingDemo);
    demo();
}
//demosRunner('demo waarbij we het asynchrone gedrag van de setInterval methode zien', demo02)
function demo03() {
    // Abnormal Reading in TS/JS
    var fs = require('fs');
    //When reading files, relative paths are evaluated relative to the root of the project
    function getJsonFromFile(filename) {
        return JSON.parse(fs.readFileSync(filename));
    }
    function happyflowNothingGoesWrong() {
        //How to read JSON synchronously from a file
        console.log('running happy!');
        console.log(getJsonFromFile('mydata.json'));
    }
    return happyflowNothingGoesWrong;
}
//demo03();
// let fs = require('fs');
//
// function getJsonFromFile(filename: string) {
//     return JSON.parse(fs.readFileSync(filename));
// }
//
// function fileDoesNotExist() {
//     try {
//         console.log(getJsonFromFile('absentfile.json'));
//     } catch (err) {
//         console.log('something went wrong:' + err.message)
//     }
// }
//
// fileDoesNotExist();
// Normal reading in TS/JS
var fs = require('fs');
function readFile() {
    console.log('start program');
    fs.readFile('words.txt', function (err, data) {
        if (err) {
            console.log("an error occured " + err);
        }
        else {
            console.log('read:' + data);
        }
    });
    console.log('end program');
}
readFile();
//# sourceMappingURL=experimenteerMetHetAsynchroneKarakterVanDeJSEngine.js.map