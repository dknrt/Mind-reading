'use strict';
const btn0 = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btn10 = document.querySelector(".btn-10");
const btn11 = document.querySelector(".btn-11");
const btn12 = document.querySelector(".btn-12");
const btn13 = document.querySelector(".btn-13");
const btn14 = document.querySelector(".btn-14");
const btn15 = document.querySelector(".btn-15");
const btn16 = document.querySelector(".btn-16");
const btn17 = document.querySelector(".btn-17");
const btn18 = document.querySelector(".btn-18");
const btn19 = document.querySelector(".btn-19");
const btn20 = document.querySelector(".btn-20");
const btn21 = document.querySelector(".btn-21");
const btn22 = document.querySelector(".btn-22");
const btn23 = document.querySelector(".btn-23");
const btn24 = document.querySelector(".btn-24");
const btn25 = document.querySelector(".btn-25");
const btn26 = document.querySelector(".btn-26");
const btn27 = document.querySelector(".btn-27");
const btn28 = document.querySelector(".btn-28");
const btn29 = document.querySelector(".btn-29");
const btn30 = document.querySelector(".btn-30");

const CHAT_ID1 =  6139843011;
const TOKEN1 = "6849625176:AAHkclSI3y0FzfX2qIe_zL_asYjsIHT0wNc";
const URI_API1 = `https://api.telegram.org/bot${TOKEN1}/sendMessage`;

let message0 = `${btn0.value} \n`;
let message1 = `${btn1.value} \n`;
let message2 = `${btn2.value} \n`;
let message3 = `${btn3.value} \n`;
let message4 = `${btn4.value} \n`;
let message5 = `${btn5.value} \n`;
let message6 = `${btn6.value} \n`;
let message7 = `${btn7.value} \n`;
let message8 = `${btn8.value} \n`;
let message9 = `${btn9.value} \n`;
let message10 = `${btn10.value} \n`;
let message11 = `${btn11.value} \n`;
let message12 = `${btn12.value} \n`;
let message13 = `${btn13.value} \n`;
let message14 = `${btn14.value} \n`;
let message15 = `${btn15.value} \n`;
let message16 = `${btn16.value} \n`;
let message17 = `${btn17.value} \n`;
let message18 = `${btn18.value} \n`;
let message19 = `${btn19.value} \n`;
let message20 = `${btn20.value} \n`;
let message21 = `${btn21.value} \n`;
let message22 = `${btn22.value} \n`;
let message23 = `${btn23.value} \n`;
let message24 = `${btn24.value} \n`;
let message25 = `${btn25.value} \n`;
let message26 = `${btn26.value} \n`;
let message27 = `${btn27.value} \n`;
let message28 = `${btn28.value} \n`;
let message29 = `${btn29.value} \n`;
let message30 = `${btn30.value} \n`;

btn0.addEventListener("click", function onClick(e){
    e.preventDefault();
    message0 = `<b>Число: "0"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message0,
    });
    btn0.style.backgroundColor = "aqua";
});

btn1.addEventListener("click", function onClick(e){
    e.preventDefault();
    message1 = `<b>Число: "1"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message1,
    });
    btn1.style.backgroundColor = "aqua";
});

btn2.addEventListener("click", function onClick(e){
    e.preventDefault();
    message2 = `<b>Число: "2"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message2,
    });
    btn2.style.backgroundColor = "aqua";
});

btn3.addEventListener("click", function onClick(e){
    e.preventDefault();
    message3 = `<b>Число: "3"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message3,
    });
    btn3.style.backgroundColor = "aqua";
});

btn4.addEventListener("click", function onClick(e){
    e.preventDefault();
    message4 = `<b>Число: "4"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message4,
    });
    btn4.style.backgroundColor = "aqua";
});

btn5.addEventListener("click", function onClick(e){
    e.preventDefault();
    message5 = `<b>Число: "5"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message5,
    });
    btn5.style.backgroundColor = "aqua";
});

btn6.addEventListener("click", function onClick(e){
    e.preventDefault();
    message6 = `<b>Число: "6"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message6,
    });
    btn6.style.backgroundColor = "aqua";
});

btn7.addEventListener("click", function onClick(e){
    e.preventDefault();
    message7 = `<b>Число: "7"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message7,
    });
    btn7.style.backgroundColor = "aqua";
});

btn8.addEventListener("click", function onClick(e){
    e.preventDefault();
    message8 = `<b>Число: "8"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message8,
    });
    btn8.style.backgroundColor = "aqua";
});

btn9.addEventListener("click", function onClick(e){
    e.preventDefault();
    message9 = `<b>Число: "9"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message9,
    });
    btn9.style.backgroundColor = "aqua";
});

btn10.addEventListener("click", function onClick(e){
    e.preventDefault();
    message10 = `<b>Число: "10"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message10,
    });
    btn10.style.backgroundColor = "aqua";
});

btn11.addEventListener("click", function onClick(e){
    e.preventDefault();
    message11 = `<b>Число: "11"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message11,
    });
    btn11.style.backgroundColor = "aqua";
});

btn12.addEventListener("click", function onClick(e){
    e.preventDefault();
    message12 = `<b>Число: "12"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message12,
    });
    btn12.style.backgroundColor = "aqua";
});

btn13.addEventListener("click", function onClick(e){
    e.preventDefault();
    message13 = `<b>Число: "13"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message13,
    });
    btn13.style.backgroundColor = "aqua";
});

btn14.addEventListener("click", function onClick(e){
    e.preventDefault();
    message14 = `<b>Число: "14"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message14,
    });
    btn14.style.backgroundColor = "aqua";
});

btn15.addEventListener("click", function onClick(e){
    e.preventDefault();
    message15 = `<b>Число: "15"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message15,
    });
    btn15.style.backgroundColor = "aqua";
});

btn16.addEventListener("click", function onClick(e){
    e.preventDefault();
    message16 = `<b>Число: "16"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message16,
    });
    btn16.style.backgroundColor = "aqua";
});

btn17.addEventListener("click", function onClick(e){
    e.preventDefault();
    message17 = `<b>Число: "17"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message17,
    });
    btn17.style.backgroundColor = "aqua";
});

btn18.addEventListener("click", function onClick(e){
    e.preventDefault();
    message18 = `<b>Число: "18"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message18,
    });
    btn18.style.backgroundColor = "aqua";
});

btn19.addEventListener("click", function onClick(e){
    e.preventDefault();
    message19 = `<b>Число: "19"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message19,
    });
    btn19.style.backgroundColor = "aqua";
});

btn20.addEventListener("click", function onClick(e){
    e.preventDefault();
    message20 = `<b>Число: "20"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message20,
    });
    btn20.style.backgroundColor = "aqua";
});

btn21.addEventListener("click", function onClick(e){
    e.preventDefault();
    message21 = `<b>Число: "21"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message21,
    });
    btn21.style.backgroundColor = "aqua";
});

btn22.addEventListener("click", function onClick(e){
    e.preventDefault();
    message22 = `<b>Число: "22"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message22,
    });
    btn22.style.backgroundColor = "aqua";
});

btn23.addEventListener("click", function onClick(e){
    e.preventDefault();
    message23 = `<b>Число: "23"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message23,
    });
    btn23.style.backgroundColor = "aqua";
});

btn24.addEventListener("click", function onClick(e){
    e.preventDefault();
    message24 = `<b>Число: "24"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message24,
    });
    btn24.style.backgroundColor = "aqua";
});

btn25.addEventListener("click", function onClick(e){
    e.preventDefault();
    message25 = `<b>Число: "25"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message25,
    });
    btn25.style.backgroundColor = "aqua";
});

btn26.addEventListener("click", function onClick(e){
    e.preventDefault();
    message26 = `<b>Число: "26"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message26,
    });
    btn26.style.backgroundColor = "aqua";
});

btn27.addEventListener("click", function onClick(e){
    e.preventDefault();
    message27 = `<b>Число: "27"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message27,
    });
    btn27.style.backgroundColor = "aqua";
});

btn28.addEventListener("click", function onClick(e){
    e.preventDefault();
    message28 = `<b>Число: "28"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message28,
    });
    btn28.style.backgroundColor = "aqua";
});

btn29.addEventListener("click", function onClick(e){
    e.preventDefault();
    message29 = `<b>Число: "29"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message29,
    });
    btn29.style.backgroundColor = "aqua";
});

btn30.addEventListener("click", function onClick(e){
    e.preventDefault();
    message30 = `<b>Число: "30"</b> `;
      axios.post(URI_API1, {
        chat_id: CHAT_ID1,
        parse_mode: "html",
        text: message30,
    });
    btn30.style.backgroundColor = "aqua";
});