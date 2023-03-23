import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider('xar_test_382fae8ddebe3b7205d6dd32990ef52cc7400df5', { //assigned during app registration, see dashboard
  theme: "light", //Check SDK Reference Guide for other optional parameters
  chainConfig: {
    chainId: '0x13881',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com',
  },
});

const getAuth = () => {
  return auth;
};

export { getAuth }