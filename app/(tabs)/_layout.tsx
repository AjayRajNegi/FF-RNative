import { Redirect, Slot } from "expo-router";

const _layout = () => {
  const isAuthenticated = false;
  if (!isAuthenticated) return <Redirect href="/sign_in" />;
  return <Slot />;
};

export default _layout;
