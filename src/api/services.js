import URL from "./URL";

export const USER_POST = (username, password, email) => ({
  endpoint: `${URL}/api/user`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    username,
    password,
    email,
  },
});

export const TOKEN_POST = (username, password) => ({
  endpoint: `${URL}/jwt-auth/v1/token`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    username,
    password,
  },
});

export const TOKEN_VALIDATE_POST = (token) => ({
  endpoint: `${URL}/jwt-auth/v1/token/validate`,
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const USER_GET = (token) => ({
  endpoint: `${URL}/api/user`,
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const PHOTO_POST = (img, nome, peso, idade, token) => ({
  endpoint: `${URL}/api/photo`,
  method: "POST",
  headers: {
    Authorization: "Bearer " + token,
  },
  body: {
    img,
    nome,
    peso,
    idade,
  },
});

export const PHOTOS_GET = () => ({
  endpoint: `${URL}/api/photo`,
  method: "GET",
});

// query: ?_total=1&_page=1&_user=6
export const PHOTOS_QUERY_GET = (page = 1, user = 0, total = 6) => ({
  endpoint: `${URL}/api/photo/?_total=${total}&_page=${page}&_user=${user}`,
  method: "GET",
});

export const PHOTO_GET = (id) => ({
  endpoint: `${URL}/api/photo/${id}`,
  method: "GET",
});

export const PHOTO_DELETE = (id, token) => ({
  endpoint: `${URL}/api/photo/${id}`,
  method: "DELETE",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export const COMMENT_POST = (id, comment, token) => ({
  endpoint: `${URL}/api/comment/${id}`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
  body: {
    comment,
  },
});

export const COMMENT_GET = (id) => ({
  endpoint: `${URL}/api/comment/${id}`,
  method: "GET",
});

export const STATS_GET = (token) => ({
  endpoint: `${URL}/api/stats`,
  method: "GET",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export const PASSWORD_LOST_POST = (login, url) => ({
  endpoint: `${URL}/api/password/lost`,
  method: "POST",
  body: {
    login,
    url,
  },
});

export const PASSWORD_RESET_POST = (login, password, key) => ({
  endpoint: `${URL}/api/password/reset`,
  method: "POST",
  body: {
    login,
    password,
    key,
  },
});
