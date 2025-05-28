import { Header } from "components";
import React from "react";

const AllUsers = () => {
    const user = {
    name: "John Doe",
    email: "contact@jsmastery.pro",
    imageUrl: "/assets/images/david.webp",
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Check out our current users in real time"
      />

      All users Page contents
    </main>
  );
};

export default AllUsers;
