export default function handleLogIn(login, password, setUser) {
  const authSend = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: login,
          password: password,
          expiresInMins: 30,
        }),
      });
      if (!response.ok) {
        throw new Error("Ошибка авторизации");
      }
      const json = await response.json();
      console.log(json);
      setUser(json);
      localStorage.setItem("accessToken", json.accessToken);
      localStorage.setItem("refreshToken", json.refreshToken);
    } catch (error) {
      console.error("Ошибка при авторизации", error);
    }
  };
  authSend();
}
