function JSXExample() {
  const topic = "JSX";
  const description = "JSX allows writing HTML inside JavaScript.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>
        {topic} is used in React. {description}
      </p>
    </div>
  );
}

export default JSXExample;
