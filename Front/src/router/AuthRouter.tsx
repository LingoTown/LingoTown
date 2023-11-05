import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue } from 'recoil';
// import { useCustomAlert } from "../component/util/ModalUtil";

export const AuthRouter= () => {

  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  // const customAlert = useCustomAlert();
  console.log(user);

  useEffect(() => {
    if (user.email == "") {
      // customAlert("Notice", "로그인 후 이용가능합니다.");
      alert("로그인 후 이용가능합니다.")
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};
