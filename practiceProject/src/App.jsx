import { Route, Routes } from "react-router-dom";
import GithubLogin from "./compnents/githubLogin/GithubLogin";
import Layout from "./compnents/Layout/Layout";
import LinkPage from "./compnents/secureRoutes/LinkPage";
import Unauthorized from "./compnents/secureRoutes/Unauthorized";
import Missing from "./compnents/secureRoutes/Missing";
import Lounge from "./compnents/secureRoutes/Lounge";
import Home from "./compnents/secureRoutes/Home";
import Editor from "./compnents/secureRoutes/Editor";
import Admin from "./compnents/secureRoutes/Admin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<GithubLogin />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          {/* we want to protect these routes */}
          <Route path="lounge" element={<Lounge />} />
          {/* catch all */}
          <Route path="*" element={<Missing />} />
          <Route path="/" element={<Home />} />
          <Route path="editor" element={<Editor />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
