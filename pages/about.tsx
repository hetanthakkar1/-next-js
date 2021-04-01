import { View, PropTypes } from "react-view";
import { Button } from "../Layout/button";

const App = () => (
  <View
    componentName="Button"
    props={{
      children: {
        value: "Hello",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
      onClick: {
        value: '() => alert("click")',
        type: PropTypes.Function,
        description: "Function called when button is clicked.",
      },
      disabled: {
        value: false,
        type: PropTypes.Boolean,
        description: "Indicates that the button is disabled",
      },
    }}
    scope={{
      Button,
    }}
    imports={{
      "your-button-component": {
        named: ["Button"],
      },
    }}
  />
);
export default App;
