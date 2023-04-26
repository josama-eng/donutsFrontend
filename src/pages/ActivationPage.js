import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { activateAccount } from "../services/auth.service";
import { toast } from "react-toastify";

const ActivationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  console.log(id);
  useEffect(() => {
    if (id) {
      activateAccount(id)
        .then((response) => {
          console.log(response);
          setMessage("Successfully activated account.");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Not valid user for activation");
      navigate("/");
    }
  });
  return (
    <div className="actvationPage">
      <h2>Activate account</h2>
      <p>{message}</p>
    </div>
  );
};

export default ActivationPage;
