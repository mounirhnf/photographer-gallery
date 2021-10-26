//------------------------------------------------------------------------------
// This function determines if the user agent is a mobile device or a desktop
//------------------------------------------------------------------------------

export default function userAgent(): 'desktop' | 'mobile' {
  let uAgent: 'desktop' | 'mobile' = 'desktop';

  for (const term of ['Android', 'iPhone', 'iPad']) {
    navigator.userAgent.includes(term) && (uAgent = 'mobile');
  }
  
  return uAgent;
}
