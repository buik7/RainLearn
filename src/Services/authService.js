import { DOMAIN } from "../Util/constants/systemConstant";
import request from "./request";

export const signInService = (data) => {
  return () => {
    return request({
      method: "POST",
      url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`,
      data,
    });
  };
};

export const signUpService = (data) => {
  return () => {
    return request({
      method: "POST",
      url: `${DOMAIN}/QuanLyNguoiDung/DangKy`,
      data,
    });
  };
};

// No need to provide accessToken because request already did that.
export const getUserDetailService = () => {
  return request({
    method: "POST",
    url: `${DOMAIN}/QuanLyNguoiDung/ThongTinNguoiDung`,
  });
};
