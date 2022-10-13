import { ResponsiveDrawer } from "./nav";
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
      <ResponsiveDrawer setType={setType} handleLogout={handleLogout} />
      <DataTable type={type} />
    </div>
  );
};
