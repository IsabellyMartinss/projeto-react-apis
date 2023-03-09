import GlobalState from "./GlobalState/GlobalState";
import { GlobalStyled } from "./GlobalStyle";
import  Router  from "./Router/Router";

export default function App() {
  return (
    <GlobalState>
      <GlobalStyled />
      <Router />
    </GlobalState>
  );
}