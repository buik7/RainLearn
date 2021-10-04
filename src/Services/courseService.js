import { DOMAIN } from "../Util/constants/systemConstant";
import request from "./request";

export const getCourseListService = () => {
  return request({
    method: "GET",
    url: `${DOMAIN}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
  });
};

export const getCourseCategoryListService = () => {
  return request({
    method: "GET",
    url: `${DOMAIN}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
  });
};

export const getCourseByCategoryService = (categoryId) => {
  return () => {
    return request({
      method: "GET",
      url: `${DOMAIN}/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryId}&MaNhom=GP01`,
    });
  };
};

export const getCourseDetailService = (courseId) => {
  return () => {
    return request({
      method: "GET",
      url: `${DOMAIN}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`,
    });
  };
};
