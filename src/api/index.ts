// NOTE: This is a simulation of an api request you can use the fetch() function
// or a thrid party package like Axios to hanlde api requests
export function sendMessage(values: any): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 500); // half a second delay for request simulation
  });
}
