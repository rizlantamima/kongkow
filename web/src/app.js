import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./configurations/routes";
import firebaseApp from "./configurations/firebase";
import { FirebaseContext } from "./context/firebase-context";

function App() {
  // console.log(firebaseApp);

  return (
    <FirebaseContext.Provider value={firebaseApp}>
    <RouterProvider router={router} />
    </FirebaseContext.Provider>
  );
}

export default App;
