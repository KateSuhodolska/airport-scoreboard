import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import SearchFlights from "./components/SearchFlights/SearchFlights";
import SearchResults from "./components/SearchResults/SearchResults";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Header className="header" />
      <main className="page">
        <SearchFlights />
        <SearchResults />
      </main>
    </Provider>
  );
};

export default App;
