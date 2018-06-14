/**
 * this file defined global functions used in controllers, models, templates
 */
'use strict';

/*******functions library*******/

// date format
global.liFormatDate = function(formatStr) {
  let newdate = formatStr.split(' ')[0].replace(/-/g, "/");
  return newdate;
};

// trim former and end space
global.trimStr = function(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
};

global.getContent = function(filePath) {
  let fs = require("fs");
  let readFilePromise = think.promisify(fs.readFile, fs);
  return readFilePromise(filePath, "utf8");
};

// timestamp format
global.formatDate = function(formatStr, fdate) {
  let fTime, fStr = 'ymdhis';
  if (!formatStr) {
    formatStr = "y-m-d h:i:s";
  }
  if (fdate) {
    fTime = new Date(parseInt(fdate) * 1000); // 10位数时间戳
  } else {
    fTime = new Date();
  }
  //getMonth() + 1,是因为月份函数getMonth是从0开始的
  var month = (fTime.getMonth()>8)?(fTime.getMonth() + 1): "0"+(fTime.getMonth() + 1);
  var date = (fTime.getDate()>9)?fTime.getDate():"0"+fTime.getDate();
  var hours = (fTime.getHours()>9)?fTime.getHours():"0"+fTime.getHours();
  var minutes = (fTime.getMinutes()>9)?fTime.getMinutes():"0"+fTime.getMinutes();
  var seconds = (fTime.getSeconds()>9)?fTime.getSeconds():"0"+fTime.getSeconds();
  var formatArr = [
    fTime.getFullYear().toString(),
    month.toString(),
    date.toString(),
    hours.toString(),
    minutes.toString(),
    seconds.toString()
  ];
  for (var i = 0; i < formatArr.length; i++) {
    formatArr = formatStr.replace(fStr.charAt(i), formatArr[i]);
  }
  return formatArr;
}

// 获取10位数时间戳
global.time = function(str) {
  var date;
  if (str) {
    date = new Date(Date.parse(str.replace(/-/g, "/")));
    date = (date.getTime())/ 1000;
  } else {
    date (new Date().getTime()) / 1000;
  }

  return parseInt(date);
}

// 中文字符串截取
global.subStr = function(str, len, hasDot) {
  var newLength = 0;
  var newStr = "";
  var chineseRegex = /[^\x00-\xff]/g;
  var singleChar = "";
  var strLength = str.replace(chineseRegex, "**").length;

  for (var i = 0; i < strLength; i++) {
    singleChar = str.charAt(i).toString();
    if (singleChar.match(chineseRegex) != null) {
      newLength += 2;
    } else {
      newLength++;
    }
    if (newLength > len ) {
      break;
    }
    newStr += singleChar;
  }

  if (hasDot && strLength > len) {
    newStr += "..."
  }
  return newStr;
}

// filter html label
global.removeTag = function(str) {
  str = str.replace(/<\/?[^>]*>/g, ''); // 去除html tag
  str = str.replace(/[ | ]*\n/g, '\n'); // 去除行尾空白
  str = str.replace(/&nbsp;/ig, ''); // 去掉&nbsp;
  str = str.replace(/ /ig, '');
  return str;
};

// read file
global.readFile = function(file) {
  var fs = think.require('fs'); // 引入fs处理文件
  var data = fs.readFileSync(file);
  return data;
};

// write to file
/**
 * async
 * 会将其后的函数(函数表达式或Lambda)的返回值封装成一个promise对象
 *  
 */
global.writeFile = async function(file, data) {
  var fs = think.require('js'); //
  fs.writeFile(file, data, function(err) {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
};

// 去掉首尾空格
global.trimStr = function(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
};

// 判断是否为数字
global.isNum = function(s) {
  if (s != null) {
    var r, re;
    re = //\d*/i; // \d表示数字，*表示匹配多个数字
    r = s.match(re);
    return (r === s) ? true : false;
  }
  return false;
};

// 判断是否存在数组中
global.inArray = function(arr, str) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
};