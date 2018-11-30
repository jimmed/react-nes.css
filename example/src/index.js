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

function Demo() {
  return (
    <main>
      <header>
        <h1>
          <Controller type="snes" /> React-NES.css
        </h1>
        <p>
          A React UI library, based on{" "}
          <Link href="https://npmjs.com/packages/nes.css">NES.css</Link>.
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
