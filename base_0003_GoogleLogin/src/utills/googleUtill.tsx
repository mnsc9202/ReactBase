// Google Cloud Platform OAuth 2.0 Client ID
export const googleClientId = `${process.env.REACT_APP_CLIENT_ID}`;

// 구글 token 저장하기 (sessionStorage)
export const setGoogleToken = (token: string) => {
  sessionStorage.setItem("mnsc", token);
};

// 구글 token 불러오기 (sessionStorage)
export const getGoogleToken = (): string | null => {
  return sessionStorage.getItem("mnsc");
};
