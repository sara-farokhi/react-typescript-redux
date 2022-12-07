import Header from "./components/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutProject from "./components/Pages/about/AboutProject";
import PostsRouter from "../src/routes/PostsRouter/PostsRouter";
import { Provider } from "react-redux"
import store from "./redux/store"


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div className="container my-5">
            <Routes>
              <Route path="/" element={<AboutProject />} />
              <Route path="/posts/*" element={<PostsRouter />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
