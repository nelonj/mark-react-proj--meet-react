import React from "react";
import ReactDOM from "react-dom";

const adjective = "exciting";
const noun = "wood";
const verb = "chuck";

/**
 * This is a TypeScript function - but a special one! It's a React function component.
 *
 * React function components are JavaScript/TypeScript functions that return something that:
 *  - looks a bit like an HTML element (e.g. in /public/index.html)
 *  - can be written mostly like HTML
 *  - ultimately renders to HTML elements
 *  - _isn't technically_ HTML.
 *
 * This function is returning a 'JSX element'.
 *
 * For now, it's enough to think of it like HTML, but bear in mind that it isn't technically HTML that you're writing - you're writing JSX (which is an extension of JavaScript and TypeScript which makes it easier to write React code).
 */
function MyFirstReactComponent() {
  const yesYouCanUseVariablesHereToo = "hakuna matata";
  const names = ["Timone", "Pumba"];
  const doObjectsWorkToo = {
    answer: "yes",
    even: {
      when: {
        arbitrarily: {
          deep: "woah",
        },
      },
    },
  };

  return (
    <div>
      <h1>Hello world from React!</h1>
      <h2>Evaluating expressions</h2>
      <p>
        I'm written in React code into a target HTML element (and I'll happily
        obliterate anything in my way).
      </p>
      <p>
        But I get to do <b>cool things</b> when I use a React app! How many?
        Lots: over {2 * (3 + 1)} of them, but who's counting?
      </p>
      <p>
        (Well, my HTML isn't counting - it's not very clever, it doesn't
        understand 2 * (3 + 1). But JavaScript can understand my expressions, so
        "hoo" + "ray" = {"hoo" + "ray"}!)
      </p>
      <p>Maybe you want to just evaluate a string, too:</p>
      <ul>
        <li>But it probably won't give you any discernible difference?</li>
        <li>{"But it probably won't give you any discernible difference?"}</li>
        <li>"But it probably won't give you any discernible difference?"</li>
      </ul>
      <p>
        <i>Hmm, that last one is a bit different, I wonder why...</i>
      </p>
      <p>Oh, it helps with the curly brace stuff, though.</p>
      <p>
        Like: {"this is a curly brace pair: {}"} which lets me have my '{"{}"}'
        as text because React is going to use normal curly brackets to evaluate
        TypeScript code instead.
      </p>
      <p>
        e.g. I can't see these curly braces, {}, because they get evaluated
        away... so I evaluate <i>to</i> some curly braces instead, {"{}"}, and
        now I can see them!
      </p>
      <h2>Variable expressions too!</h2>
      <p>
        But, <b>even better</b>, I can use variables to make things way easier
        to change! Isn't that {adjective}?
      </p>
      <p>
        For example: how much {noun} could a {noun}
        {verb} {verb} if a {noun}
        {verb} could {verb} {noun}?
      </p>
      <p>
        <i>
          But make sure you're using variables correctly in your JSX or else
          you'll look as foolish as a nounverb that tries to verb noun
        </i>
      </p>
      <p>
        P.S. Because they're variables, I can even manipulate them like normal
        TypeScript expressions.
      </p>
      <ol>
        <li>Random padding: {noun.padStart(40, "> pad >")}</li>
        <li>SHOUTING MUCH?: {verb.toUpperCase() + "!!!!!"}</li>
        <li>
          Does {verb} contain the letter Q? {String(verb.includes("Q"))}
        </li>
        <li>
          So, as the saying goes:{" "}
          {`"${yesYouCanUseVariablesHereToo}" (credits: ${names.join(", ")})`}
        </li>
      </ol>
      <p>So, go on, make all your noises of admiration:</p>
      <ul>
        <li>{doObjectsWorkToo.answer}</li>
        <li>{doObjectsWorkToo.even.when.arbitrarily.deep}</li>
      </ul>
    </div>
  );
}

/**
 * Having defined a React component, we target an element in our HTML document and *render* our React component into it
 */
ReactDOM.render(
  <MyFirstReactComponent />,
  document.getElementById("arbitrarily-named-target")
);