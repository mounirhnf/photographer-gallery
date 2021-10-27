//------------------------------------------------------------------------------
// In this file define all the api middlewares you can use any library and
// alter the response as you like
//------------------------------------------------------------------------------

import {Store} from 'store/types';

//------------------------------------------------------------------------------

// NOTE: This is a simulation of an api request you can use the fetch() function
// or a thrid party plugin like Axios to hanlde api requests
export function sendMessage(
  values: Store.State['contactForm']['values']
): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 500); // half a second delay for request simulation
  });
}
