import { useState, useRef } from "react";

function InputComponent() {
  const [inputText, setText] = useState("Hello, World!");
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    setText("")
  };

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} ref={inputEl} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("Good By!")}>Reset</button>
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukeJones@sculpture.com",
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <p>Exemple 1</p>
      <InputComponent />

      <br />
      <hr />
      <br />

      <p>Exemple 2</p>

      <TextInputWithFocusButton />
      <br />
      <hr />
      <br />

      <p>Exemple 3</p>
      <RegisterForm />
    </>
  );
}
