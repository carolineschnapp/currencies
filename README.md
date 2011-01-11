jquery.currencies.js

## Tutorial

[How to Show Multiple Currencies](http://wiki.shopify.com/How_to_Show_Multiple_Currencies)

## Description

jquery.currencies.js expands the currencies.js library provided by Shopify and has to be used in conjunction with it. 

While currencies.js allows you to convert a money amount from one currency to another, jquery.currencies.js provides a function that converts all money amounts on a web page and shows a _formatted_ result, with currency symbol and descriptor.

## Installation

Download jquery.currencies.min.js and upload it to your Shopify theme assets.
Include the file in your theme.liquid file __before the closing body tag__ like so:

    {{ "/services/javascripts/currencies.js" | script_tag }}
    {{ "jquery.currencies.min.js" | asset_url | script_tag }}

## Usage

To save a picked currency to a cookie, use the following line of code, passing the currency code as parameter:

    Currency.cookie.write('CAD');

To read the currency code saved to your 'currencies' cookie, use the following code:
 
    var cookieCurrency = Currency.cookie.read();
 
The above will return the currency code, or will return null if the cookie does not exist.

To convert formatted money (with or without the currency code and descriptor) to formatted money in another currency use this:

    Currency.convertAll(oldCurrency, newCurrency, selector, format);

The parameters _oldCurrency_ and _newCurrency_ must be set to the 3-letter currency codes of the FROM and TO currencies.
 
The parameter _selector_ is a CSS selector that tells the function where to find the money on the page. It is optional. If it is not used, the function will look for all span elements on the page with a class attribute set to 'money', and will convert the money in those elements.

So, using it without _selector_ is the same as calling the function like so:

    Currency.convertAll('CAD', 'USD', 'span.money');
    
The parameter __format__ is optional and can take on the value 'money_format' or 'money_with_currency_format'.

Calling the function without _format_ is the same as calling the function like so:

    Currency.convertAll('CAD', 'USD', 'span.money', 'money_with_currency_format');
    
Important: the convertAll method updates the 'currencies' cookie with _newCurrency_ and it also sets a global property that remembers what the current currency is: Currency.currentCurrency. Why? The cookie needs only be read once, ie. when the page loads, and one must keep a copy of the old value to send both old and new values to the converting drone.

## Optional global settings

Add the following line of JavaScript before you own code, if you do not want the formatted money to show the currency descriptor:

    Currency.format = 'money_format';
 
If you don't use the above line of code, the formatted money will be showing both the currency symbol and descriptor, i.e. it will show $20.00 USD instead of $20.00.

If you want to use a different name for your cookie, use this:

    Currency.cookie.name = 'my_awesome_cookie_name';
 
If you don't use the above line of code, the name of your cookie will be 'currencies'.

## Dependencies

jquery.min.currencies.js requires Shopify's library currencies.js.

currencies.js must be included before jquery.currencies.min.js.

## Author

jquery.currencies.js was created and is maintained by Caroline Schnapp mllegeorgesand AT gmail DOT com.
  
## License

jquery.currencies.js and its minified version are covered by the MIT License.
http://www.opensource.org/licenses/mit-license.php