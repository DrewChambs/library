<<<<<<< HEAD

# Library Application - The Odin Project Application

Part of a series of applications, and various web projects, from The Odin Project.

# Table of contents

• Overview
• The challenge
• Links
• My process
• Built with
• What I learned
• Continued development
• Author - Andrew Chambers
• Project Link:
https://drewchambs.github.io/library/

• Personal Website - [andrewchambersweb.com](https://andrewchambersweb.com/)

# Overview

=======

## Library Application - The Odin Project

> > > > > > > test_user_i

- Odin Project library application:
- Application is to have:
  - An object with "author", "title", "pages", and
    a "read" property that designates whether or not the book has been read by the user.
  - A form to allow the user to enter the information needed.

<<<<<<< HEAD

# The challenge

- The "Book" object allows the user to add a new book to a library collection.
  - Each new book is to be added to an array.
  - Function to loop through array and display each book on the page.
  - "NEW BOOK" button to display a form for the new book entry.
  - Button is to be added to change the "read" status of each book.
  - Delete button for each book to remove it from the library.
  - Each book needs to be identitiable so the correct book is removed.
  - An id of some sort needs to be associated with each book.

=======

> > > > > > > test_user_i

# Link to project

https://drewchambs.github.io/library/

# My process

My initial approach was to create the intended layout in HTML and the move on to have the display render dynamically. A foray into the type of elements needed to display the library led to the Implementation of a table. Employing a table would allow for the categories to show in tabular format.
After capturing values from input elements, the information was recorded in the “addBookToLibrary” function and subsequently display through a function that delivered dynamic renderings for each book.
To synchronize each book with the correct heading, an array of the headings was created and loaded into the table with a function since the heading only needed to be displayed one time for the entire table.
Each book included dynamically created buttons to delete and switch book status to “Yes” or “No” depending on whether the book was read or not. This allowed the user to change the book status after the book was already loaded into the library.
Although the project specs didn’t call for the library to remain after a browser was closed, I felt the need to add data retention. Functions to load, retrieve, and remove were added to achieve this application feature.

# Built with

VS Code using HTML, CSS, and JavaScript.

• HTML5 markup
• CSS custom properties
• JavaScript
• ES6
• Flexbox
. Grid

# What I learned

• To create dynamic elements rapidly
• How used “localStorage’
• Dynamically generate content
• How to create well-defined forms
• How to capture information from forms

My speed of creation in regards to elements increased immensely.
Time well-spent learning how to manipulate localStorage added to the delivery-time of the application.
This process involved learning about how storage could be used on a temporary basis yet still maintain data when returning to the application at a later time.

# Continued development

I intend to move on to learning how to store data on a server as opposed to storing locally within the browser.
A refactor of this project moves the focus to being able to display the data on multiple divices, so there is a need to move the headings to display for each individual book as it is viewed on mobile.

- Update:
  \*\* Project is now optimzed for mobile view.
  To make this project complete a opening welcome screen needs to be added to welcome the user initially to the application.
  Minor adjustments include:
- User display notice as new book added
- Clear all items functionality
- Full dashboard for user

# Author

Andrew Chambers

# Website

andrewchambersweb.com
