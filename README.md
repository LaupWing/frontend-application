# Risico Indicator
> Vue.js code based project
***
<br>

## Introduction
For this project we have to improve the Jeugdhulp Risico indicator(jri) app. This web app was built for the social workers to calculate the chance of the youth of being placed into a foster care. The actual app right work but isnt easy to navigate through. Click in the [link](http://174.138.1.153/kindveiligthuis) for the web app. We have to change this app by the framework of our choice to make it easier for the social worker to fill in the data.
***
<br>

### The proces
The proces for this project has been very frustrating i dont go in to much detail here. For the whole story of how it went click on this [link](https://locnguyen.gitbook.io/vue-project/)
NOTE: the proces in the link is written in dutch!
***
<br>

### How did i learned Vue
My usual best practice for a project is by first learning everything then applying what i have learned on the project. So i have watched over 3 courses of Vue from diffrent sources. The sources are from Youtube.com and lynda.com. The actual courses i have used  can be found below with the links attached so you can check them out by yourself.

**Source links:**
<br>
Youtube NetNinja:
<br>
*Link courses: [Vue Beginners course by NetNinja](https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa)*

Youtube Acedemind:
<br>
*Link courses: [Vue Getting Started courses by Acedemind](https://www.youtube.com/watch?v=nyJSd6V2DRI&list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07)*

Lynda Vue:
<br>
*Link courses: [Learning Vue.js(2017)](https://www.lynda.com/JavaScript-tutorials/Welcome/562924/594465-4.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3avue.js%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)*

I have watched all the courses to expand my basic knowledge about Vue and seeing diffrent people explaining the basics. Because everyone codes in their own way and i wanted to see how these people explain the Vue basics diffrently.
***
<br>

### What should i have done diffrently?
I have completed and watched a lot of courses first before applying it to my project. That was a huge mistake, because before i finished the course i forgot what the instructor explained in the first few chapters so i have to rewatch those chapters. That took up a whole lot of time. The second problem with this approach of first learning all than applying is that i also have to rewatch some parts because i forgot how it acutally works and how it benifits my project. So what i will definitly do diffrent next time is applying the knowledge right away when i learn something in the world of coding. **You will learn more by practicing than learning!**
***
<br>

### What have i learned about Vue?
I have learned a lot of how the Vue framework works and the syntaxes that Vue uses. In this chapter im gonna describe all the synthaxes i have learned about Vue and how Vue works.

**How Vue works**<br>
Vue works with diffrent components that will load in the page that you declare it to load. That gives us the ability to separate the diffrent components in diffrent files. Each component has template tag with only **one root element** more elements gives an error. Each components also have their own styling and script tag. In the script tag we can export our vue instance(see below for the explaination of vue instance) to the template to make use of the data in the components. In the templates (which represents the html element) we can use the vue syntaxes to use some javascript in the html document to take control over the lay out. Because we can use javascript in the template we can load in the elements dynamicly.

**_Vue components_**<br>
The components are the diffrent parts of the website which we can declare everywhere we want. The components in this project are all declared in the main.js file. We import in our main.js file the diffrent vue files and than make components of them. _See below what the syntaxes are for importing vue files and making components of them_

``` js
// ____ main.js ____
// import the title.vue as Title
import Title from './titel.vue';

// making vue component with the name off app-title from Title
Vue.component('app-title', Title);

```
``` html
<!-- ____ name.vue_____ -->
 <!-- now we can use the component in every other vue file by declaring as a basic html tag -->
<app-title> </app-title>
```
***
<br>

### Build Setup
``` bash
# Open your command prompt
# navigate in your command promt to this folder
# CD ~this file

# type npm install to install the neccersary packages
npm install

# Type npm run dev to open this file the default browser
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
