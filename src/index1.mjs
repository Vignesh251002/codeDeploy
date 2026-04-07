export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda via CodeDeploy!ddd**** index1 version"),
  };
};
