# Emergency Service Project

Live Link: [https://nozibuddowla.github.io/emergency-service/](https://nozibuddowla.github.io/emergency-service/)

---

## 📌 Q&A

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

The primary difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll` lies in their selection methods, and return types.

- **`getElementById("id")`** → Selects a single element based on its unique id attribute. This method is highly efficient because IDs are designed to be unique within a document. Return a single Element object (or null if no match is found).

    `const element = document.getElementById('myId');`
  
- **`getElementsByClassName("class")`** → Selects all elements with the given class. Returns a live HTMLCollection. This means the collection automatically updates if the DOM changes (e.g., elements are added or removed with that class).

    `const elements = document.getElementsByClassName('myClass');`

- **`querySelector("selector")`** → Selects the **first element** that matches a CSS selector (id, class, tag, etc.).  

    `const firstElement = document.querySelector('.myClass');`

- **`querySelectorAll("selector")`** → Selects **all elements** matching a CSS selector. Returns a static NodeList. This means the collection is a snapshot at the time of the query and does not automatically update with subsequent DOM changes.

    `const allElements = document.querySelectorAll('.myClass'); `


### 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM using JavaScript, we have to follow these steps:

The `document.createElement()` method is used to create a new HTML element. It takes a string representing the tag name of the element we want to create as its argument. 

After creating the element, we can set its properties, such as `textContent`, `innerHTML`, `id`, `className`, or add attributes using `setAttribute()`.

Steps:
```js
// 1. Create element
const newDiv = document.createElement("div");
const newParagraph = document.createElement('p'); // Creates a new <p> element
const parentElement = document.getElementById('container'); // Get an existing parent element
const referenceElement = document.getElementById('existingChild'); // Get a child element to insert before

// 2. Add content or attributes
newDiv.innerText = "Hello World!";
newDiv.className = "my-box";
newDiv.textContent = 'This is a new div.';
newParagraph.id = 'myNewParagraph';
newParagraph.classList.add('highlight');
newDiv.setAttribute('data-info', 'some-value');

// 3. Insert into DOM
document.body.appendChild(newDiv); // adds at the end of <body>
parentElement.appendChild(newDiv); // Appends newDiv as the last child of 'container'
parentElement.insertBefore(newParagraph, referenceElement); // Inserts newParagraph before 'existingChild'
parentElement.append(newDiv, newParagraph); // Appends both newDiv and newParagraph
parentElement.prepend(newDiv, newParagraph); // Prepends both newDiv and newParagraph
```
Once the element is created and configured, we have to append or insert it into an existing element within the DOM. Common methods for this include:

- **`appendChild()`** : This method appends a node as the last child of a parent node
- **`insertBefore()`** : This method inserts a node before a specified reference node as a child of a parent node.
- **`append()`** : This method allows to append multiple nodes or DOMStrings as the last children of a parent node.
- **`prepend()`** : This method allows to prepend multiple nodes or DOMStrings as the first children of a parent node.


### 3. What is Event Bubbling and how does it work?

**`Event Bubbling`** is the default JavaScript mechanism in the DOM event system where an event triggered on a child element propagates (or "bubbles up") through its ancestors in the DOM tree, all the way up to the root (document).

Example: Clicking a `<button>` inside a `<div>` will first trigger the button’s click event, then the div’s, then the body’s, and so on, up the DOM hierarchy.

#### How Event Bubbling Works

1. When an event (like a click) occurs on an element, the event first triggers on the target element itself.
2. Then, the event bubbles up to the target's parent element, triggering any event listeners for that event type on the parent.
3. This continues up through each ancestor element, all the way to the document and window objects.


### 4. What is Event Delegation in JavaScript? Why is it useful?

**`Event Delegation`** is a technique in JavaScript where instead of attaching event listeners to multiple child elements individually, you attach a single event listener to a common ancestor (parent) element. This listener uses event bubbling to catch events from its child elements using `event.target` and handle them appropriately.

- Instead of attaching listeners to every button individually, you attach one to their parent container. It reduces the number of event listeners attached to the DOM.
- It is very useful for performance (fewer listeners) and for dynamic elements (works even if new children are added later). No need to attach listeners to new elements individually.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

Here's the difference between `preventDefault()` and `stopPropagation()` methods in JavaScript event handling:

- **`event.preventDefault()`**
    It is a method present in the event interface. This method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable. 
    
    For example, there are some events that can not be prevented, such as the scroll and wheel event. This method does not accept any parameter. Preventing a form submission when a button is clicked. Preventing a link `<a>` from navigating to its `href`.

- **`event.stopPropagation()`**
    This method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called. 

    For eg,  we have a button element inside a div tag and there is an onclick event on both of them, then whenever we try to activate the event attached to the button element, then the event attached to the div element also gets executed because div is the parent of the button element. We can solve this problem by using the stopPropagation() method because this will prevent the parent from accessing the event.

