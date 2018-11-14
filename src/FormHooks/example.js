import * as React from "react";
import { View, Text } from "react-native";
import FormHooks from "./index.js";
import Input from "../Input";
import { validateEmail } from "../utils";

const config = {
  initialValues: { email: null, password: null },
  validation: {
    email: validateEmail,
    password: password => password.length > 5
  }
};

function Example(props) {
  return (
    <FormHooks {...config}>
      {state => {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>Form Hooks</Text>
            <Input
              type="email"
              value={state.values.email}
              onChangeText={state.setValue}
              error={state.errors && state.errors.email && "Email is not valid"}
            />
            <Input
              type="password"
              value={state.values.password}
              onChangeText={state.setValue}
              error={
                state.errors &&
                state.errors.password &&
                "Password is not strong"
              }
            />
          </View>
        );
      }}
    </FormHooks>
  );
}

export default Example;
