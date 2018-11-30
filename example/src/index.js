import React from "react";
import ReactDOM from "react-dom";
import {
  Balloon,
  Button,
  Checkbox,
  Container,
  Controller,
  Icon,
  Octocat,
  Radio,
  TextInput
} from "react-nes.css";

import "nes.css/css/nes.css";
import "./styles.css";

function Link({ href, children, ...props }) {
  return (
    <a
      href={href}
      {...props}
      onClick={event => {
        event.preventDefault();
        window.open(href);
      }}
    >
      {children}
    </a>
  );
}

function GithubLink() {
  return (
    <Link
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 999,
        display: "flex",
        color: "#333"
      }}
      href="https://github.com/jimmed/react-nes.css"
    >
      <Balloon
        style={{
          padding: "0.2rem 0.5rem",
          alignSelf: "flex-start",
          fontSize: "0.8rem",
          textDecoration: "none"
        }}
        fromRight
      >
        Fork me
        <br />
        on GitHub!
      </Balloon>
      <Octocat style={{ alignSelf: "flex-end" }} animate />
    </Link>
  );
}

function Demo() {
  return (
    <main>
      <GithubLink />
      <header>
        <h1>
          <Controller type="snes" /> React-NES.css
        </h1>
        <p>
          A React UI library, based on{" "}
          <Link href="https://npmjs.com/package/nes.css">NES.css</Link>.
        </p>
      </header>
      <main>
        <Container title="Buttons">
          <div>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <Button warning>Warning</Button>
            <Button success>Success</Button>
            <Button error>Error</Button>
          </div>
        </Container>
        <Container title="Containers">
          <Container title="With Title">
            <p>Some content</p>
          </Container>
          <Container>Without Title</Container>
          <Container title="What" dark>
            <p style={{ color: "white" }}>Dark without title</p>
          </Container>
          <Container title="Needs title" center>
            Centre-aligned content
          </Container>
          <Container rounded>Rounded corners</Container>
        </Container>
        <Container title="Radio">
          <Radio name="radio" defaultChecked>
            Yes
          </Radio>
          <Radio name="radio">No</Radio>
        </Container>
        <Container title="Checkbox">
          <Checkbox defaultChecked>This</Checkbox>
          <Checkbox>That</Checkbox>
        </Container>
        <Container title="TextInput">
          <TextInput name="default" label="Default text field" />
          <TextInput
            name="placeholder"
            label="Also available with"
            placeholder="placeholder text"
          />
          <TextInput inline label="With inline label" name="inline" />
          <TextInput success label="Success" />
          <TextInput warning label="Warning" />
          <TextInput error label="Error" />
        </Container>
        <Container className="balloon" title="Balloons">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <Balloon fromLeft>Hello NES.css!</Balloon>
            <Balloon style={{ alignSelf: "flex-end" }} fromRight>
              Hello world!
            </Balloon>
          </div>
        </Container>
        <Container title="Icons">
          {Object.entries({
            Reactions: ["heart", "star", "like"],
            Social: ["twitter", "github", "facebook"],
            Close: ["close"]
          }).map(([title, icons]) => (
            <Container key={title} title={title}>
              {icons.map(iconName => (
                <div key={iconName}>
                  <Icon name={iconName} /> <Icon name={iconName} medium />{" "}
                  <Icon name={iconName} large />
                </div>
              ))}
            </Container>
          ))}
          <Container title="Others">
            <Octocat animate />
            <br />
            <Controller />
          </Container>
        </Container>
      </main>
      <footer>
        Built with love by <Link href="https://github.com/jimmed">Jim</Link>
      </footer>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Demo />, rootElement);
