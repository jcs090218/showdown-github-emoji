/**
 * $File: index.js $
 * $Date: 2020-09-06 00:23:17 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */

"use strict";

const Http = new XMLHttpRequest();
const url='https://api.github.com/emojis';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  try {
    var data = JSON.parse(Http.responseText);
  console.log(data);
  } catch (error) {
    console.log(error);
  }
};
