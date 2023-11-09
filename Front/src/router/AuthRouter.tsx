import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue } from 'recoil';
import { useCustomAlert } from "../component/util/ModalUtil";

export const AuthRouter= () => {

  const navigate = useNavigate();
  const customAlert = useCustomAlert();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (user.email == "") {
      navigate("/");
      customAlert("Notice", "로그인 후 이용가능합니다.");
    }
  }, []);

  return (
    <div>
      {
        user.email == ""?
        null
        :
        <Outlet />
      }
    </div>
  );
};
