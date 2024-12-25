<<<<<<< HEAD
### Next.js is a flexible React framework that gives you building blocks to create fast, full-stack web applications.

## Building blocks of a web application

There are a few things you need to consider when building modern applications. Such as:

1. User Interface - how users will consume and interact with your application.
2. Routing - how users navigate between different parts of your application.
Data Fetching - where your data lives and how to get it.
3. Rendering - when and where you render static or dynamic content.
Integrations - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.
4. Infrastructure - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).
Performance - how to optimize your application for end-users.
5. Scalability - how your application adapts as your team, data, and traffic grow.
6. Developer Experience - your team's experience building and maintaining your application.


----

# What is React?

> React is a JavaScript library for building interactive user interfaces.

- By user interfaces (UI), we mean the elements that users see and interact with on-screen.

- By library, we mean React provides helpful functions (APIs) to build UI, but leaves it up to the developer where to use those functions in their application.

---

# What is Next.js?
> Next.js is a React framework that gives you building blocks to create web applications.

- By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

```js
You can use "ReactJs" to build your UI, then incrementally adopt 'NextJs' features to solve common application requirements such as routing, data fetching, and caching - all while improving the developer and end-user experience.
```

---

# What is the DOM?

- The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

- You can use DOM methods and JavaScript, to listen to user events and manipulate the DOM by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

> HTML represents the initial page content, whereas the DOM represents the updated page content which was changed by the JavaScript code you wrote.
![DOM & HTML](learn-dom-and-source.avif)


---

# Imperative vs. Declarative Programming

## Overview
- **Imperative Programming**: Focuses on *how* tasks are accomplished by providing step-by-step instructions.
- **Declarative Programming**: Focuses on *what* the outcome should be without specifying the exact steps.

---

## Imperative Programming
In imperative programming, you explicitly define the steps to achieve a result.

### Example:
```js
const h1 = document.createElement("h1");
h1.textContent = "Hello, World!";
document.body.appendChild(h1);
```

- Here’s what happens:

1. Create an h1 element.
2. Set its text content to "Hello, World!".
3. Append it to the document's body.

This approach requires managing every detail of the DOM update.

## Declarative Programming
In declarative programming, you describe the desired outcome, and the implementation details are abstracted.

### Example (React):
```js
const App = () => <h1>Hello, World!</h1>;
```
- React takes care of:

1. Creating the h1 element.
2. Updating and managing the DOM for you.

This approach is more concise and easier to maintain.

***so...***

### React: A declarative UI library
- As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of how to update the DOM on your behalf.


## What is JSX?

JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. The nice thing about JSX is that apart from following [three JSX rules](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx), you don't need to learn any new symbols or syntax outside of HTML and JavaScript.

But browsers don't understand JSX out of the box, so you'll need a JavaScript compiler, such as a [Babel](https://babeljs.io/), to transform your JSX code into regular JavaScript.


# From React to Next.js

While React excels at building UI, it does take some work to independently build that UI into a fully functioning scalable application. There are also newer React features, like Server and Client Components, that require a framework. The good news is that Next.js handles much of the setup and configuration and has additional features to help you build React applications.

Next, we'll migrate the example from React to Next.js, discuss how Next.js works, and introduce you to the differences between Server and Client Components.

```js
ReactJs in HTML
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react fondatios</title>
  </head>
  <body>
    <!--  HTML represents the initial page content, whereas the DOM (u can check it in the dev tools) represents the updated page content which was changed by the JavaScript code you wrote. -->
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById("app");

      // Create a new H1 element
      const header = document.createElement("h1");

      // Create a new text node for the H1 element
      const text = "Develop. Preview. Ship.";
      const headerContent = document.createTextNode(text);

      // Append the text to the H1 element
      header.appendChild(headerContent);

      // Place the H1 element inside the div
      app.appendChild(header);
    </script> -->

    <script type="text/babel">
      const app = document.getElementById("app");

      function Header({ title }) {
        // console.log(props);
        // const { title } = props;

        return (
          <>
            <h1>{title}</h1>
            <h2>Develop. Preview. Ship.</h2>
          </>
        );
      }

      function HomePage() {

         const [likes, setLikes] = React.useState(0); 

        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
        function handleClick() {
          // console.log("increment like count");
          setLikes(likes + 1)
        }
        return (
          <div>
            <Header title="React" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <button onClick={handleClick}>Like {likes}</button>
          </div>
        );
      }

      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);
    </script>
  </body>
</html>

```

# And Now From React to Next.js

## Server and Client Components:

The `client` refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.

The `server` refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.

=======
# react-basics
>>>>>>> f45a79afc48cc4fef70e399941771245dc01d1c7
