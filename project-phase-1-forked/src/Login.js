import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const submitForm = () => {
    navigate("/success", { replace: true });
  };

  const formStyle = {
    color: "green",
    fontStyle: "italic"
  };

  return (
    <div>
      <h1 style={{ color: "blue", backgroundColor: "black" }}>Login</h1>
      <form onSubmit={submitForm} style={formStyle}>
        {/* ... form contents ... */}
      </form>
    </div>
  );
};

export default Login;
