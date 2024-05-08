import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import ContactPage from "./pages/ContactPage";
import ChartAndMapsPage from "./pages/ChartsAndMapsPage";

import Sidebar from "./components/Sidebar";
import ContactForm from "./components/ContactForm";

// Main App component that renders everything you see on page
function App() {
  return (
    <>
      <div className="flex">
        <div className="basis-[10%] h-[70vh]">
          <Sidebar />
        </div>
        <div className="basis-[90%]">
          <Routes>
            <Route path="/">
              <Route index={true} element={<ContactPage />} />{" "}
              {/* Lists all currently saved contacts and shows button to add one */}
              <Route path="create-contact" element={<ContactForm />} />{" "}
              {/* Generic form to add/edit contact, depending on the route */}
              <Route path="edit-contact/:id" element={<ContactForm />} />
              <Route path="charts" element={<ChartAndMapsPage />} />{" "}
              {/* Shows Chart and Map component */}
            </Route>
          </Routes>
          {process.env.ENV !== "production" && (
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          )}
          {/* Only visible in dev mode */}
        </div>
      </div>
    </>
  );
}

export default App;
