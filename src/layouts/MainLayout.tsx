import { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navigationbar from "../components/Navigationbar/Navigationbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navigationbar/>
      <div className="d-flex flex-grow-1">
        <Sidebar/>
        <div className="container-fluid p-4 bg-light flex-grow-1">
        {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;