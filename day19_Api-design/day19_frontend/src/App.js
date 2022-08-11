// import "./App.css";
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import MyForm from "./MyForm";

// function App() {
//   return (
//     <div className="App">
//       <MyForm />
//     </div>
//   );
// }

// export default App;

import "antd/dist/antd.css";
import "./index.css";
import LayoutForm from "./LayoutForm";
import RegisterForm from "./RegisterForm";
// import Register_user from "./Components/Register_user"
import React from "react";


function App() {
  return (
    <LayoutForm>
      <RegisterForm />
    </LayoutForm>
  );
}

export default App;