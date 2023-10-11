# real-time-character-checker

Hosting Link : https://trishadas13.github.io/real-time-character-checker/

<hr>

<h2> 🟡 HTML Code Description </h2>
The provided HTML structure represents a real-time character counter. It includes a title, a text input area with a placeholder and maximum character limit, character count information (total characters and remaining characters), and a "Clear All" button. This structure can be used to allow users to input text and keep track of the number of characters they have entered in real-time. JavaScript can be used to update the character count and handle the "Clear All" functionality.
<hr>
<h2> 🟡 CSS Code Description </h2>
The code begins with an @import statement that links to a Google Fonts stylesheet to import the "Comic Neue" font family in different weights and styles.

The universal selector (*) resets margins and padding to zero and sets the box-sizing property to border-box for all HTML elements. This ensures consistent spacing and sizing of elements in the document.

The body is styled to create a full-width and full-height container with a background color of "rgb(210, 145, 188)," giving it a pale, pinkish hue. The "Comic Neue" font family is applied to the entire document with an italic font style.

The h1 element within the body is given a font weight of 700 for bold text and centered text alignment.

A container with the class .container is defined with padding, box-shadow, border-radius, and a background color of "rgb(254, 200, 216)," providing a light, peachy background for the content. The container has a flex layout with a column direction and a gap of 1rem between its child elements.

Inside the container, there is an element with the class .counts that uses flex properties to arrange its children with space between them. It also wraps its children to a new line when the available space is limited.

A textarea element is styled with padding, a font size of 16px, the inability to resize, a font weight of 700, and a border with dotted lines. The background-image property is used to display an image from the 'assets/bg.jpg' URL, which is repeated, scaled to cover the entire area, and centered. The "Comic Neue" font family is applied with an italic font style.

span elements are styled with a font size of 25px, and the #first and #last IDs are assigned specific colors, "rgb(0, 214, 0)" and "red," respectively.

The button element is styled with padding, border-radius, font-family, font style, font size, a background color of "rgb(238, 191, 162)," a border with dotted lines, and a box-shadow for a 3D effect.

Finally, a media query is used to adjust the container's size when the screen width is less than or equal to 540px, making it full-height and full-width, ensuring a responsive design for smaller screens.
<hr>
<h2> 🟡 JavaScript Code Description </h2>
1.	It selects the following elements on the web page and stores them in variables:
      •	text: Represents a textarea element.
      •	count: Represents a collection of span elements (presumably for character count display).
      •	btn: Represents a button element.
2.	It adds an event listener to the textarea element, specifically listening for the "keyup" event. This event is triggered every time a key is released within the textarea.
3.	Inside the "keyup" event listener, it calculates the length of the text entered in the textarea using e.target.value.length, where e is the event object. It updates the content of the first span element (count[0]) with the current character count.
4.	It also calculates the remaining character count (assuming a maximum of 50 characters) and updates the content of the second span element (count[1]) with the remaining characters.
5.	It adds another event listener to the button element (btn), listening for a click event.
6.	Inside the button's click event listener, it resets the character count and remaining character count to their initial values (0 and 50) and clears the text content of the textarea by setting text.value to an empty string.

<hr>
<h2> 🟡 Summary </h2>
In summary, this code provides a basic character counter for a textarea element, displaying the current character count and the remaining characters, and allowing users to clear the text input with the provided button.
<hr>
<h2> 🟡 UI</h2>

[screen-capture.webm](https://github.com/trishaDas13/real-time-character-checker/assets/126088849/aa7f455c-ac0c-4b41-996d-80118364b944)
