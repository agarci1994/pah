import { Nav } from "./nav";
import DataTable from "./table";
import { useAuth } from "../context/AuthContext";
import { ModalForm } from "./modal";
import { LOGIN } from "../utils/routes.constant";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export const Main = () => {
  const { logOut } = useAuth();
  const [type, setType] = useState("fichas")


  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      await logOut();
      toast.success("You are now logged out", { id: toastId });
      router.push(LOGIN);
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div
        style={{
          width: "20%",
          "background-color": "rgb(100, 174, 114)",
        }}
      >
        <div>
          <h1 style={{ padding: "20px" }}>PAH VK Admin</h1>
        </div>
        <Nav set={setType} />
        <button onClick={handleLogout} style={{ margin: "10px" }}>
          Logout
        </button>
      </div>
      <DataTable type={type} />
    </div>
  );
};
