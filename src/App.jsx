import { Outlet } from "react-router-dom";
import { AppProvider } from "./utils/pkmnContext";
import './components/FieldStyle.scss';

function App() {

  return (
    <>
      <AppProvider>
        <Outlet />
      </AppProvider>
    </>
  )
}

export default App
