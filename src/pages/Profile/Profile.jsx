import { Helmet } from "react-helmet";

/* eslint-disable react/no-unescaped-entities */
function Profile() {
  return (
    <div className="py-20 container mx-auto px-4">
        <Helmet>
            <title>Profile || FILA 2029</title>
        </Helmet>
      <h1 className="text-3xl">This is Profile page</h1>
      <h1>User Name</h1>
      <h1>User Image</h1>
      <h1>Other's Information of user</h1>
    </div>
  );
}

export default Profile;
