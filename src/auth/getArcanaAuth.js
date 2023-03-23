import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider('xar_test_382fae8ddebe3b7205d6dd32990ef52cc7400df5', {
  theme: "light",
  
});

const getAuth = () => {
  return auth;
};

export { getAuth };