import decode from 'jwt-decode';

const tokenDecoder = () => {
  let token = localStorage.getItem('token');
  if (typeof token !== 'undefined' && token !== null) {
    let decoded = decode(token);
    return decoded;
  } else {
    let decoded = 'no token';
    return decoded;
  }
};

export default tokenDecoder;
