import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import Avatar from "../Avatar";
import Logout from "../Icons/Logout";
import SunHigh from "../Icons/SunHigh";
import Breadcrumbs from "../Breadcrumbs";
import ArrowLeft from "../Icons/ArrowLeft";
import BellRinging from "../Icons/BellRinging";
import cls from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const breadcrumbs = useBreadcrumbs();
  const navigate = useNavigate();

  return (
    <nav className={cls.navbar}>
      <div className={cls.left}>
        <img
          className={cls.logo}
          src={`${import.meta.env.BASE_URL}assets/logo.svg`}
          alt="OneIP"
        />
        <button>
          <SunHigh />
        </button>
        <button className={cls.profile}>
          <Avatar /> <span>Profil</span>
        </button>
      </div>
      <div className={cls.center}>
        {breadcrumbs.length > 1 && (
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
        )}
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <div className={cls.right}>
        <button className={cls.bellBtn}>
          <BellRinging />
          <span className={cls.bellDot} />
        </button>
        <button className={cls.logoutBtn}>
          <Logout />
        </button>
      </div>
    </nav>
  );
}
