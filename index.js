/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP857256";
    // e.g. return "UP654321";
}

function fn() {
    return "Sam";
}

function sn() {
    return "Riches";
}

function replaceText(element, string) {
    element.textContent = string;
}

function addTextTo(element, string) {
    element.textContent = element.textContent.concat(string)
}

function moreBears() {
    const element = document.getElementById("animals");
    element.src = "http://placebear.com/400/200";
    element.alt = "A bear.";
    element.title = "A BEAR!"
}

function setId(element, string){
    element.id = string;
    return element
}

function setClass(element, string){
    element.className = string;
    return element
}

function addAClass(element, string){
    element.classList.add(string);
    return element
}

function removeAClass(element, string){
    element.classList.remove(string);
    return element
}

function newElement(name){
    return document.createElement(name)
}

function findElementById(id){
    return document.getElementById(id);
}

function findElementsByQuery(query){
    return document.querySelectorAll(query)
}

function reverseList(selector){
    const element = document.querySelector(selector);
    let length = element.childNodes.length;
    while (length--){
        element.appendChild(element.childNodes[length]);
    }
    return element
}

function mover(selector, move_to_selector){
    const element = document.querySelector(selector);
    const move_to = document.querySelector(move_to_selector);
    move_to.appendChild(element)
}

function filler(list_element, array){
    for (const property of array){
        const li = document.createElement("li");
        li.textContent = property;
        list_element.appendChild(li);
    }
    return list_element
}

function dupe(selector){
    const element = document.querySelector(selector);
    const new_element = document.createElement("p");
    new_element.textContent = element.textContent;
    element.parentNode.appendChild(new_element);
}

function removeAll(selector){
    console.log(selector);
    const elements = document.querySelectorAll(selector);
    for (const element of elements){
        element.parentElement.removeChild(element)
    }
}

function getUserData(){
    const username = document.querySelector("#username");
    const speed = document.querySelector("#speed");
    const student = document.querySelector("#student");
    return {name: username.value,
            speed: parseInt(speed.value),
            student: student.checked}
}