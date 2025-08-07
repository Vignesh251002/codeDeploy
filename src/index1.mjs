export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda via CodeDeploy! index1"),
  };
};
