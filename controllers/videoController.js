import {videos} from "../db"
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", {pageTitle : 'Home', videos});
}

export const search = (req, res) => {
  const { query: { term:searchingBy } } = req;
  // == const searchingBy = req.query.term;
  res.render("search", {pageTitle : 'Search', searchingBy, videos});
  // searchingBy == searchingBy(입력값) : searchingBy(출력값==실제값)
}

export const getUpload = (req, res) => res.render("upload", {pageTitle : 'Upload'});
export const postUpload = (req, res) => {
  const {
    body: {file, title, description}
  } = req;
  // to do :: 비디오 업로드랑 저장
  res.redirect(routes.videoDetail(324393));
};


export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : 'Video Detail'});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle : 'Edit Video'});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : 'Delete Video'});