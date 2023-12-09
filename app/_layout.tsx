import "expo-dev-client";
import React from "react";
import { Stack } from "expo-router";
import { store } from "../store/store.";
import { Provider } from "react-redux";
import App from "./navigation";

export default function Layout() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
