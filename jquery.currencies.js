/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/*
 * Currency tools
 *
 * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */ 

if (typeof Currency === 'undefined') {
  var Currency = {};
}

Currency.cookie = {
  configuration: {
    expires: 365,
    path: '/',
    domain: window.location.hostname
  },
  name: 'currency',
  write: function(currency) {
    jQuery.cookie(this.name, currency, this.configuration);
  },
  read: function() {
    return jQuery.cookie(this.name);
  },
  destroy: function() {
    jQuery.cookie(this.name, null, this.configuration);
  }
};

Currency.moneyFormats = {
  "USD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} USD"
  },
  "EUR":{
    "money_format":"&euro;{{amount}}",
    "money_with_currency_format":"&euro;{{amount}} EUR"
  },
  "GBP":{
    "money_format":"&pound;{{amount}}",
    "money_with_currency_format":"&pound;{{amount}} GBP"
  },
  "CAD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} CAD"
  },
  "ALL":{
    "money_format":"Lek {{amount}}",
    "money_with_currency_format":"Lek {{amount}} ALL"
  },
  "DZD":{
    "money_format":"DA {{amount}}",
    "money_with_currency_format":"DA {{amount}} DZD"
  },
  "AOA":{
    "money_format":"Kz{{amount}}",
    "money_with_currency_format":"Kz{{amount}} AOA"
  },
  "ARS":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} ARS"
  },
  "AMD":{
    "money_format":"{{amount}} AMD",
    "money_with_currency_format":"{{amount}} AMD"
  },
  "AWG":{
    "money_format":"Afl{{amount}}",
    "money_with_currency_format":"Afl{{amount}} AWG"
  },
  "AUD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} AUD"
  },
  "BBD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} Bds"
  },
  "AZN":{
    "money_format":"m.{{amount}}",
    "money_with_currency_format":"m.{{amount}} AZN"
  },
  "BDT":{
    "money_format":"Tk {{amount}}",
    "money_with_currency_format":"Tk {{amount}} BDT"
  },
  "BSD":{
    "money_format":"BS${{amount}}",
    "money_with_currency_format":"BS${{amount}} BSD"
  },
  "BHD":{
    "money_format":"{{amount}}0 BD",
    "money_with_currency_format":"{{amount}}0 BHD"
  },
  "BYR":{
    "money_format":"Br {{amount}}",
    "money_with_currency_format":"Br {{amount}} BYR"
  },
  "BZD":{
    "money_format":"BZ${{amount}}",
    "money_with_currency_format":"BZ${{amount}} BZD"
  },
  "BTN":{
    "money_format":"Nu {{amount}}",
    "money_with_currency_format":"Nu {{amount}} BTN"
  },
  "BAM":{
    "money_format":"KM {{amount_with_comma_separator}}",
    "money_with_currency_format":"KM {{amount_with_comma_separator}} BAM"
  },
  "BRL":{
    "money_format":"R$ {{amount_with_comma_separator}}",
    "money_with_currency_format":"R$ {{amount_with_comma_separator}} BRL"
  },
  "BOB":{
    "money_format":"Bs{{amount_with_comma_separator}}",
    "money_with_currency_format":"Bs{{amount_with_comma_separator}} BOB"
  },
  "BWP":{
    "money_format":"P{{amount}}",
    "money_with_currency_format":"P{{amount}} BWP"
  },
  "BND":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} BND"
  },
  "BGN":{
    "money_format":"{{amount}} лв",
    "money_with_currency_format":"{{amount}} лв BGN"
  },
  "MMK":{
    "money_format":"K{{amount}}",
    "money_with_currency_format":"K{{amount}} MMK"
  },
  "KHR":{
    "money_format":"KHR{{amount}}",
    "money_with_currency_format":"KHR{{amount}}"
  },
  "KYD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} KYD"
  },
  "XAF":{
    "money_format":"FCFA{{amount}}",
    "money_with_currency_format":"FCFA{{amount}} XAF"
  },
  "CLP":{
    "money_format":"${{amount_no_decimals}}",
    "money_with_currency_format":"${{amount_no_decimals}} CLP"
  },
  "CNY":{
    "money_format":"&#165;{{amount}}",
    "money_with_currency_format":"&#165;{{amount}} CNY"
  },
  "COP":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} COP"
  },
  "CRC":{
    "money_format":"&#8353; {{amount_with_comma_separator}}",
    "money_with_currency_format":"&#8353; {{amount_with_comma_separator}} CRC"
  },
  "HRK":{
    "money_format":"{{amount_with_comma_separator}} kn",
    "money_with_currency_format":"{{amount_with_comma_separator}} kn HRK"
  },
  "CZK":{
    "money_format":"{{amount_with_comma_separator}} K&#269;",
    "money_with_currency_format":"{{amount_with_comma_separator}} K&#269;"
  },
  "DKK":{
    "money_format":"{{amount_with_comma_separator}}",
    "money_with_currency_format":"kr.{{amount_with_comma_separator}}"
  },
  "DOP":{
    "money_format":"RD$ {{amount}}",
    "money_with_currency_format":"RD$ {{amount}}"
  },
  "XCD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"EC${{amount}}"
  },
  "EGP":{
    "money_format":"LE {{amount}}",
    "money_with_currency_format":"LE {{amount}} EGP"
  },
  "ETB":{
    "money_format":"Br{{amount}}",
    "money_with_currency_format":"Br{{amount}} ETB"
  },
  "XPF":{
    "money_format":"{{amount_no_decimals_with_comma_separator}} XPF",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} XPF"
  },
  "FJD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"FJ${{amount}}"
  },
  "GMD":{
    "money_format":"D {{amount}}",
    "money_with_currency_format":"D {{amount}} GMD"
  },
  "GHS":{
    "money_format":"GH&#8373;{{amount}}",
    "money_with_currency_format":"GH&#8373;{{amount}}"
  },
  "GTQ":{
    "money_format":"Q{{amount}}",
    "money_with_currency_format":"{{amount}} GTQ"
  },
  "GYD":{
    "money_format":"G${{amount}}",
    "money_with_currency_format":"${{amount}} GYD"
  },
  "GEL":{
    "money_format":"{{amount}} GEL",
    "money_with_currency_format":"{{amount}} GEL"
  },
  "HNL":{
    "money_format":"L {{amount}}",
    "money_with_currency_format":"L {{amount}} HNL"
  },
  "HKD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"HK${{amount}}"
  },
  "HUF":{
    "money_format":"{{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} Ft"
  },
  "ISK":{
    "money_format":"{{amount_no_decimals}} kr",
    "money_with_currency_format":"{{amount_no_decimals}} kr ISK"
  },
  "INR":{
    "money_format":"Rs. {{amount}}",
    "money_with_currency_format":"Rs. {{amount}}"
  },
  "IDR":{
    "money_format":"{{amount_with_comma_separator}}",
    "money_with_currency_format":"Rp {{amount_with_comma_separator}}"
  },
  "ILS":{
    "money_format":"{{amount}} NIS",
    "money_with_currency_format":"{{amount}} NIS"
  },
  "JMD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} JMD"
  },
  "JPY":{
    "money_format":"&#165;{{amount_no_decimals}}",
    "money_with_currency_format":"&#165;{{amount_no_decimals}} JPY"
  },
  "JEP":{
    "money_format":"&pound;{{amount}}",
    "money_with_currency_format":"&pound;{{amount}} JEP"
  },
  "JOD":{
    "money_format":"{{amount}}0 JD",
    "money_with_currency_format":"{{amount}}0 JOD"
  },
  "KZT":{
    "money_format":"{{amount}} KZT",
    "money_with_currency_format":"{{amount}} KZT"
  },
  "KES":{
    "money_format":"KSh{{amount}}",
    "money_with_currency_format":"KSh{{amount}}"
  },
  "KWD":{
    "money_format":"{{amount}}0 KD",
    "money_with_currency_format":"{{amount}}0 KWD"
  },
  "KGS":{
    "money_format":"лв{{amount}}",
    "money_with_currency_format":"лв{{amount}}"
  },
  "LVL":{
    "money_format":"Ls {{amount}}",
    "money_with_currency_format":"Ls {{amount}} LVL"
  },
  "LBP":{
    "money_format":"L&pound;{{amount}}",
    "money_with_currency_format":"L&pound;{{amount}} LBP"
  },
  "LTL":{
    "money_format":"{{amount}} Lt",
    "money_with_currency_format":"{{amount}} Lt"
  },
  "MGA":{
    "money_format":"Ar {{amount}}",
    "money_with_currency_format":"Ar {{amount}} MGA"
  },
  "MKD":{
    "money_format":"ден {{amount}}",
    "money_with_currency_format":"ден {{amount}} MKD"
  },
  "MOP":{
    "money_format":"MOP${{amount}}",
    "money_with_currency_format":"MOP${{amount}}"
  },
  "MVR":{
    "money_format":"Rf{{amount}}",
    "money_with_currency_format":"Rf{{amount}} MRf"
  },
  "MXN":{
    "money_format":"$ {{amount}}",
    "money_with_currency_format":"$ {{amount}} MXN"
  },
  "MYR":{
    "money_format":"RM{{amount}} MYR",
    "money_with_currency_format":"RM{{amount}} MYR"
  },
  "MUR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} MUR"
  },
  "MDL":{
    "money_format":"{{amount}} MDL",
    "money_with_currency_format":"{{amount}} MDL"
  },
  "MAD":{
    "money_format":"{{amount}} dh",
    "money_with_currency_format":"Dh {{amount}} MAD"
  },
  "MNT":{
    "money_format":"{{amount_no_decimals}} &#8366",
    "money_with_currency_format":"{{amount_no_decimals}} MNT"
  },
  "MZN":{
    "money_format":"{{amount}} Mt",
    "money_with_currency_format":"Mt {{amount}} MZN"
  },
  "NAD":{
    "money_format":"N${{amount}}",
    "money_with_currency_format":"N${{amount}} NAD"
  },
  "NPR":{
    "money_format":"Rs{{amount}}",
    "money_with_currency_format":"Rs{{amount}} NPR"
  },
  "ANG":{
    "money_format":"&fnof;{{amount}}",
    "money_with_currency_format":"{{amount}} NA&fnof;"
  },
  "NZD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} NZD"
  },
  "NIO":{
    "money_format":"C${{amount}}",
    "money_with_currency_format":"C${{amount}} NIO"
  },
  "NGN":{
    "money_format":"&#8358;{{amount}}",
    "money_with_currency_format":"&#8358;{{amount}} NGN"
  },
  "NOK":{
    "money_format":"kr {{amount_with_comma_separator}}",
    "money_with_currency_format":"kr {{amount_with_comma_separator}} NOK"
  },
  "OMR":{
    "money_format":"{{amount_with_comma_separator}} OMR",
    "money_with_currency_format":"{{amount_with_comma_separator}} OMR"
  },
  "PKR":{
    "money_format":"Rs.{{amount}}",
    "money_with_currency_format":"Rs.{{amount}} PKR"
  },
  "PGK":{
    "money_format":"K {{amount}}",
    "money_with_currency_format":"K {{amount}} PGK"
  },
  "PYG":{
    "money_format":"Gs. {{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"Gs. {{amount_no_decimals_with_comma_separator}} PYG"
  },
  "PEN":{
    "money_format":"S/. {{amount}}",
    "money_with_currency_format":"S/. {{amount}} PEN"
  },
  "PHP":{
    "money_format":"&#8369;{{amount}}",
    "money_with_currency_format":"&#8369;{{amount}} PHP"
  },
  "PLN":{
    "money_format":"{{amount_with_comma_separator}} zl",
    "money_with_currency_format":"{{amount_with_comma_separator}} zl PLN"
  },
  "QAR":{
    "money_format":"QAR {{amount_with_comma_separator}}",
    "money_with_currency_format":"QAR {{amount_with_comma_separator}}"
  },
  "RON":{
    "money_format":"{{amount_with_comma_separator}} lei",
    "money_with_currency_format":"{{amount_with_comma_separator}} lei RON"
  },
  "RUB":{
    "money_format":"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
    "money_with_currency_format":"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
  },
  "RWF":{
    "money_format":"{{amount_no_decimals}} RF",
    "money_with_currency_format":"{{amount_no_decimals}} RWF"
  },
  "WST":{
    "money_format":"WS$ {{amount}}",
    "money_with_currency_format":"WS$ {{amount}} WST"
  },
  "SAR":{
    "money_format":"{{amount}} SR",
    "money_with_currency_format":"{{amount}} SAR"
  },
  "STD":{
    "money_format":"Db {{amount}}",
    "money_with_currency_format":"Db {{amount}} STD"
  },
  "RSD":{
    "money_format":"{{amount}} RSD",
    "money_with_currency_format":"{{amount}} RSD"
  },
  "SCR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} SCR"
  },
  "SGD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} SGD"
  },
  "SYP":{
    "money_format":"S&pound;{{amount}}",
    "money_with_currency_format":"S&pound;{{amount}} SYP"
  },
  "ZAR":{
    "money_format":"R {{amount}}",
    "money_with_currency_format":"R {{amount}} ZAR"
  },
  "KRW":{
    "money_format":"&#8361;{{amount_no_decimals}}",
    "money_with_currency_format":"&#8361;{{amount_no_decimals}} KRW"
  },
  "LKR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} LKR"
  },
  "SEK":{
    "money_format":"{{amount_no_decimals}} kr",
    "money_with_currency_format":"{{amount_no_decimals}} kr SEK"
  },
  "CHF":{
    "money_format":"SFr. {{amount}}",
    "money_with_currency_format":"SFr. {{amount}} CHF"
  },
  "TWD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} TWD"
  },
  "THB":{
    "money_format":"{{amount}} &#xe3f;",
    "money_with_currency_format":"{{amount}} &#xe3f; THB"
  },
  "TZS":{
    "money_format":"{{amount}} TZS",
    "money_with_currency_format":"{{amount}} TZS"
  },
  "TTD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} TTD"
  },
  "TND":{
    "money_format":"{{amount}}",
    "money_with_currency_format":"{{amount}} DT"
  },
  "TRY":{
    "money_format":"{{amount}}TL",
    "money_with_currency_format":"{{amount}}TL"
  },
  "UGX":{
    "money_format":"Ush {{amount_no_decimals}}",
    "money_with_currency_format":"Ush {{amount_no_decimals}} UGX"
  },
  "UAH":{
    "money_format":"₴{{amount}}",
    "money_with_currency_format":"₴{{amount}} UAH"
  },
  "AED":{
    "money_format":"Dhs. {{amount}}",
    "money_with_currency_format":"Dhs. {{amount}} AED"
  },
  "UYU":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} UYU"
  },
  "VUV":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}}VT"
  },
  "VEF":{
    "money_format":"Bs. {{amount_with_comma_separator}}",
    "money_with_currency_format":"Bs. {{amount_with_comma_separator}} VEF"
  },
  "VND":{
    "money_format":"{{amount_no_decimals_with_comma_separator}}&#8363;",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} VND"
  },
  "XBT":{
    "money_format":"&#x0243 {{amount_bitcoin}} BTC",
    "money_with_currency_format":"&#x0243 {{amount_bitcoin}} BTC"
  },
  "XOF":{
    "money_format":"CFA{{amount}}",
    "money_with_currency_format":"CFA{{amount}} XOF"
  },
  "ZMW":{
    "money_format":"K{{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"ZMW{{amount_no_decimals_with_comma_separator}}"
  }
};

Currency.formatMoney = function(cents, format) {
/*  if (typeof Shopify.formatMoney === 'function') {
    return Shopify.formatMoney(cents, format);
  }*/
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || '${{amount}}';
  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }
  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');
    if (isNaN(number) || number == null) { return 0; }
    number = (number/100.0).toFixed(precision);
    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';
    return dollars + cents;
  }
  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_bitcoin':
      value = formatWithDelimiters(cents, 4);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }
  return formatString.replace(placeholderRegex, value);
};
  
Currency.currentCurrency = '';

Currency.format = 'money_with_currency_format';

Currency.convertAll = function(oldCurrency, newCurrency, selector, format) {
  jQuery(selector || 'span.money').each(function() {
    // If the amount has already been converted, we leave it alone.
    if (jQuery(this).attr('data-currency') === newCurrency) return;
    // If we are converting to a currency that we have saved, we will use the saved amount.
    if (jQuery(this).attr('data-currency-'+newCurrency)) {
      jQuery(this).html(jQuery(this).attr('data-currency-'+newCurrency));
    }
    else {
      // Converting to Y for the first time? Let's get to it!
      var cents = 0.0;
      var oldFormat = Currency.moneyFormats[oldCurrency][format || Currency.format] || '{{amount}}';
      var newFormat = Currency.moneyFormats[newCurrency][format || Currency.format] || '{{amount}}';
      if (oldFormat.indexOf('amount_no_decimals') !== -1) {
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)*100, oldCurrency, newCurrency);
      }
      else if (oldCurrency === 'JOD' || oldCurrency == 'KWD' || oldCurrency == 'BHD') {
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)/10, oldCurrency, newCurrency);
      }
      else { 
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10), oldCurrency, newCurrency);
      }
      var newFormattedAmount = Currency.formatMoney(cents, newFormat);
      jQuery(this).html(newFormattedAmount);
      jQuery(this).attr('data-currency-'+newCurrency, newFormattedAmount);
    }
    // We record the new currency locally.
    jQuery(this).attr('data-currency', newCurrency);
  });
  this.currentCurrency = newCurrency;
  this.cookie.write(newCurrency);
};
