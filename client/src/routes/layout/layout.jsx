import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <Navbar />

      <section>
        <Outlet />
      </section>
    </main>
  );
};
export default Layout;
