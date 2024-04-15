import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contextApi/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

/* eslint-disable react/no-unescaped-entities */
function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  const [checkbox, setCheckbox] = useState(false);
  const [edit, setEdit] = useState(true);

  const [name, setName] = useState(displayName);
  const [photo, setPhoto] = useState(photoURL);

  useEffect(() => {
    setEdit(!checkbox);
  }, [checkbox]);

  const validation = (name, photo) => {
    if (name.length < 6) {
      toast.error("Invalid Name!");
      return false;
    }
    if (photo.length < 6) {
      toast.error("Invalid photo URL!");
      return false;
    }
    return true;
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!validation(name, photo)) {
      return;
    }

    updateUserProfile(name, photo);
    setCheckbox(!checkbox);
    toast.success("Profile Successfully Updated!");
  };

  return (
    <div className="py-20 container mx-auto px-4">
      <Helmet>
        <title>Profile || FILA 2029</title>
      </Helmet>
      <div className="shadow-lg lg:w-[600px] mx-auto bg-slate-100 pt-10 px-4">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-3xl text-center font-bold text-gray-600">
            <span className="border-b px-6">Your Profile Info</span>
          </h1>

          <label className="flex cursor-pointer gap-2">
            <span className="label-text">Edit</span>
            <input
              onChange={(e) => setCheckbox(e.target.checked)}
              type="checkbox"
              className="toggle theme-controller checked:text-primary"
            />
          </label>
        </div>
        <form onSubmit={handleUpdate} className=" py-10">
          <div className="flex gap-10 items-center">
            <div className="text-center w-1/3">
              <img
                className="mx-auto border-blue-200 rounded-full w-full border-2 p-2 animate__animated animate__pulse"
                src={photoURL}
                alt={displayName || "null"}
              />
            </div>
            <div className="flex gap-2 flex-col w-2/3">
              <input
                className="input shadow-lg"
                type="text"
                value={name || "null"}
                onChange={(e) => setName(e.target.value)}
                readOnly={edit}
              />
              <input
                readOnly
                className="input shadow-lg font-bold  focus:border-transparent focus:shadow-lg focus:outline-none text-gray-500"
                type="text"
                value={email}
              />
              <input
                type="text"
                className="input"
                value={photo || "null"}
                onChange={(e) => setPhoto(e.target.value)}
                readOnly={edit}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end items-center pt-4">
            <input
              disabled={edit}
              className="btn bg-primary border-transparent hover:bg-primary text-white"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
