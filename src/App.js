import logo from './logo.svg';
import './App.css';
import { LabelStudioReact, LabelStudioReact2 } from './components/LabelStudio';
import React from 'react';
import sample from "./sample.jpeg";

const labelinConfig = `
  <View>
    <Image name="img" value="$image"></Image>
    <RectangleLabels name="tag" toName="img">
      <Label value="Hello"></Label>
      <Label value="World"></Label>
    </RectangleLabels>
  </View>
`

const task = {
  annotations: [],
  predictions: [
    {
      created_ago: '3 hours',
      model_version: 'model 1',
      result: [{
        id: "abc",
        source: "$image",
        from_name: "tag",
        to_name: "img",
        type: "rectanglelabels",
        value: {
          height: 1,
          width: 1,
          x: 1,
          y: 1
        }

      }]
    }
  ],
  id: 1,
  data: {
    image: sample
  }
}

function App() {
  return (
    // <React.Fragment>
    <div class="app-root">
      <LabelStudioReact2
        config={labelinConfig}
        task={task}
        interfaces={[
          "infobar",
          "topbar",
          "instruction",
          "side-column",
          "annotations:history",
          "annotations:tabs",
          "annotations:menu",
          "annotations:current",
          // "annotations:add-new",
          "annotations:delete",
          "annotations:view-all",
          "predictions:tabs",
          "predictions:menu",
          // "auto-annotation",
          "edit-history",
        ]}
        user={{
          pk: 1,
          firstName: "James",
          lastName: "Dean"
        }}
      />
      <LabelStudioReact
        config={labelinConfig}
        task={task}
        interfaces={[
          "infobar",
          "topbar",
          "instruction",
          "side-column",
          "annotations:history",
          "annotations:tabs",
          "annotations:menu",
          "annotations:current",
          // "annotations:add-new",
          "annotations:delete",
          "annotations:view-all",
          "predictions:tabs",
          "predictions:menu",
          // "auto-annotation",
          "edit-history",
        ]}
        user={{
          pk: 1,
          firstName: "James",
          lastName: "Dean"
        }}
      />
    </div>

    // </React.Fragment>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
