# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge
The chanllenge of the interactive rating component was to style and incorpate a rating system where the user can leave a quick review by selecting a value rating. The challenge contain HTML CSS and Javascript.


### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: https://github.com/jovanydev/frontend-mentor-challenges/tree/main/2-interactive-rating-component

- Live Site URL: https://jovanydev.github.io/frontend-mentor-challenges/2-interactive-rating-component/

## My process

I started with the HTML by hardcoding every detail. At first I added a div for the selection of the value the user decide to input. However, I overdid the section and instead opted for a radio selector for the form. After researching form input, I was able to remove the default radio and added a circle with a number. The radio input made the javascript easier because selecting the radio marked gave me the value to input for the post form. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript 

### What I learned

I learned to use radio button and how to style inputs. 
```
<div class="rating-list flex flex-center">
     <input type="radio" name="rate" value="1" id="rate-1">
     <label for="rate-1" class="circle-rate flex flex-center">1</label>
```

```
.rating-card .rating-list input:not(:checked) + label:hover {}

.rating-card .rating-list input[type="radio"]:checked + label {}

```

## Author

- Website - Jovany Gomez (jovany.dev)
- Frontend Mentor - @jovanydev
(https://www.frontendmentor.io/profile/jovanydev)
- Twitter - @itsjovany
(https://twitter.com/itsjovany)
