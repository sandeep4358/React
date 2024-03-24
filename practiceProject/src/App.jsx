import GithubLogin from "./compnents/githubLogin/GithubLogin";
import Layout from "./compnents/Layout/Layout";
import LinkPage from "./compnents/secureRoutes/LinkPage";
import Unauthorized from "./compnents/secureRoutes/Unauthorized";
import Missing from "./compnents/secureRoutes/Missing";
import Lounge from "./compnents/secureRoutes/Lounge";
import Home from "./compnents/secureRoutes/Home";
import Editor from "./compnents/secureRoutes/Editor";
import Admin from "./compnents/secureRoutes/Admin";
import RequireAuth from "./compnents/secureRoutes/RequireAuth";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<GithubLogin />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Home />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={["ROLE_EDITOR"]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            element={
              <RequireAuth allowedRoles={["ROLE_EDITOR", "ROLE_ADMIN"]} />
            }
          >
            <Route path="lounge" element={<Lounge />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
