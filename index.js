const request = require('request');
const convert = require('xml-js');

// AddInteger
request('https://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1=1&Arg2=1', function (error, response, body) {
    const convertedBody = JSON.parse(convert.xml2json(body, {compact: true, spaces: 1}));
    const addIntegerResponse = convertedBody["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["AddIntegerResponse"]["AddIntegerResult"]._text;
    console.log("\n\nAddIntegerResponse: " + addIntegerResponse);
});

// DivideInteger
request('https://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=DivideInteger&Arg1=1&Arg2=1', function (error, response, body) {
    const convertedBody = JSON.parse(convert.xml2json(body, {compact: true, spaces: 1}));
    const addIntegerResponse = convertedBody["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["DivideIntegerResponse"]["DivideIntegerResult"]._text;
    console.log("\n\nDivideIntegerResponse: " + addIntegerResponse);
});

// FindPerson
request('https://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=FindPerson&id=50', function (error, response, body) {
    const convertedBody = JSON.parse(convert.xml2json(body, {compact: true, spaces: 1}));
    const addIntegerResponse = convertedBody["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["FindPersonResponse"]["FindPersonResult"];
    console.log("\n\nFindPersonResponse: " + JSON.stringify(addIntegerResponse));
});