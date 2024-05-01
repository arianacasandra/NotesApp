# NotesApp 
https://arianacasandra.github.io/NotesApp/

NotesApp is a simple web application for creating, editing, and deleting notes. It utilizes JavaScript to dynamically manage notes within the browser.

![Alt text](https://raw.githubusercontent.com/arianacasandra/Javascript/main/Notes/doc/pics.png)


## Features

- Create new notes by clicking the "Create" button.
- Edit notes by clicking on the note text and typing.
- Delete notes by clicking on the delete icon.
- Automatic saving of notes to local storage.

## Usage
Open the index.html file in your web browser.
Start creating, editing, and deleting notes.

## JavaScript Code Explanation
The JavaScript code utilizes the DOMContentLoaded event to ensure the DOM content is fully loaded before executing any JavaScript code. It initializes variables and event listeners for managing notes.

showNotes()
This function retrieves notes from local storage and displays them in the note container.

uptadeStorage()
This function updates the local storage with the current notes whenever there is a change.

createBtn.addEventListener("click", ...)
This event listener triggers the creation of a new note when the "Create" button is clicked. It adds a new editable paragraph element (<p>) to the note container.

noteContainer.addEventListener("click", ...)
This event listener handles click events within the note container. If the clicked element is an image (delete icon), it removes the corresponding note. If the clicked element is a paragraph, it updates the local storage whenever the note is edited.

document.addEventListener("keydown", ...)
This event listener captures the "Enter" key press event and inserts a line break instead of submitting the form.
