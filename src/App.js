export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <State />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function State() {
  return (
    <footer className="stats">
      <em> 💼 You have X intems on your list, and you already packed X (X%)</em>
    </footer>
  );
}
