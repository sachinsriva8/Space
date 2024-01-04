import { useNavigate } from "react-router-dom";

const Header = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: "5px",
        marginTop: "2px",
        marginBottom: "2px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div>
          <button
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              color: "LightBlue",
              background: "none",
            }}
            onClick={() => navigate("/dashboard")}
          >
            SpaceVue
          </button>
        </div>
        <div>
          <button
            style={{ background: "none", border: "none", fontWeight: "bolder" }}
            onClick={() => navigate("/statistics", { state: data })}
          >
            Statistics
          </button>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ color: "green" }}>{localStorage.getItem("user")}</div>
        <div>
          <button style={{ background: "none" }} onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
