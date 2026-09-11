# 🚀 DevStack - Custom Tech Stack Builder

DevStack is a modern React web application that allows developers to explore various frontend, backend, database, and DevOps technologies, select their preferred tools, and build a custom tech stack in real time.

---

## ✨ Features

- 🔍 **Browse & Compare Technologies**: Explore a curated collection of frontend, backend, database, language, styling, DevOps, and tools technologies — each with ratings, difficulty levels, badges, and descriptions.
- ➕ **Build Your Custom Stack**: Add technologies to a personal stack sidebar with duplicate prevention, individual removal, and a one-click "Remove All" — all with real-time toast notifications via React Toastify.
- 📱 **Fully Responsive Design**: A polished, mobile-first UI built with Tailwind CSS and DaisyUI featuring a sticky navbar, gradient brand theme, and smooth interactions across all devices.

---

## 🛠️ Technologies Used

- **React 19**
- **Vite**
- **Tailwind CSS v4 & DaisyUI v5**
- **React Toastify**
- **JavaScript (ES6+)**

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
Answer:
JSX means JavaScript XML. It lets us write HTML-like code inside JavaScript. React converts JSX into JavaScript code that creates elements. React then uses these elements to update the webpage when something changes.


---

### 2. What is the difference between props and state?
Answer:
**Props** are data that a parent component passes down to a child. The child just receives them and uses them — it can't change them. Think of props like arguments you pass to a function.

**State** is data that lives inside a component and can change over time. When state changes, the component re-renders automatically.


---

### 3. What does the `useState` hook do, and where did you use it in this project?
Answer:
`useState` lets us create a piece of state inside a functional component. It gives us back two things: the current value and a function to update it.

In `App.jsx`, I used it in three places:

```jsx
const [technologies, setTechnologies] = useState([]);  // stores all tech items from JSON
const [stack, setStack] = useState([]);                 // stores the user's selected stack
const [loading, setLoading] = useState(true);           // tracks if data is still loading
```

Whenever I call `setStack([...prev, tech])` to add a new item, React sees the state changed and re-renders the component so the UI stays in sync.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
Answer:
`useEffect` is for running code that has "side effects" — things like fetching data, setting up timers, or interacting with the browser — stuff that doesn't belong in the normal render flow.

I needed it to load `data.json` because I can't just do a `fetch()` call at the top level of the component — that would run on every single re-render and keep firing network requests non-stop. With `useEffect` and an empty `[]` dependency array, the fetch runs only once when the component first loads:

```jsx
useEffect(() => {
  fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
Answer:
When React renders a list, it needs a way to tell which item is which. The `key` prop is like an ID card for each list element. Without it, if we add, remove, or reorder items, React can't figure out what actually changed — so it might re-render everything from scratch or even mix up the wrong items.

In `YourStack.jsx`, each stack item gets its unique `id` as the key:

```jsx
{stack.map((item) => (
  <StackItem key={item.id} item={item} onRemove={onRemove} />
))}
```

This way React knows exactly which `<StackItem>` was added or removed and only updates that one.

---

### 6. What is conditional rendering? Show one place you used it.
Answer:
Conditional rendering means showing different UI based on some condition — like an `if/else` but inside JSX. We usually do it with ternary operators (`? :`) or the `&&` operator.

A clear example is in `YourStack.jsx` — when the stack is empty, it shows an "empty" message, and when there are items, it shows the list with a Remove All button:

```jsx
{stack.length === 0 ? (
  <div className="border border-dashed ...">
    <p>Your stack is empty.</p>
  </div>
) : (
  <>
    {stack.map((item) => (
      <StackItem key={item.id} item={item} onRemove={onRemove} />
    ))}
    <button onClick={onRemoveAll}>Remove All</button>
  </>
)}
```

Another example is in `App.jsx` — while data is loading, it shows a spinner instead of the technology cards.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:
**Parent → Child:** We pass data through **props**. In `App.jsx`, I pass the `stack` array and handler functions down to child components:

```jsx
<Technologies
  technologies={technologies}
  stack={stack}
  onAddToStack={handleAddToStack}
  onRemove={handleRemove}
  onRemoveAll={handleRemoveAll}
/>
```

**Child → Parent:** Since a child can't directly change the parent's state, we use **callback functions**. The parent defines a function like `handleAddToStack`, passes it as a prop, and the child calls it when something happens. For example, in `TechCard.jsx`, when the user clicks "Add to Stack":

```jsx
<button onClick={() => onAddToStack(tech)}>Add to Stack</button>
```

This calls the parent's `handleAddToStack` function and sends the `tech` object back up, so the parent can update its `stack` state. This pattern is called **"lifting state up"**.

---


