export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello Lambda via CodeDeploy!ddd**** index1 version"),
  };
};
