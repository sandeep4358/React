import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import GithubLogin from "./components/githubLogin/GithubLogin";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<GithubLogin />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/login" element={<GithubLogin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
