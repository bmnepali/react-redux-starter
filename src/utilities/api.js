import axios from 'axios';
import Config from '../../app.config';

const instance = axios.create({
  baseURL: Config.basePath,
});

/**
 * Catch the AunAuthorized Request
 */
instance.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    const errorMsg = handleError(error);

    return Promise.reject(errorMsg);
  },
);

/**
 * Handles the response and prepares the proper error message
 * @param {Object} error
 * @return {String}
 */
const handleError = error => {
  let message = null;
  if (typeof error.response !== 'undefined') {
    switch (error.response.status) {
      case 400:
        message = error.hasOwnProperty('message') ? error.message : 'Bad Request';
        break;

      case 401:
        message = error.hasOwnProperty('message') ? error.message : 'Un-Authorized Request';
        break;

      case 403:
        message = error.hasOwnProperty('message') ? error.message : 'API Server refused to handle the request properly';
        break;

      case 404:
        message = error.hasOwnProperty('message') ? error.message : 'API Route is Missing or Undefined or Incorrect';
        break;

      case 405:
        message = error.hasOwnProperty('message') ? error.message : 'API Route Method Not Allowed';
        break;

      case 408:
        message = error.hasOwnProperty('message')
          ? error.message
          : 'Request could not be fulfilled at this time hence timed out';
        break;

      case 414:
        message = error.hasOwnProperty('message') ? error.message : 'Request-URI Too Long';
        break;

      case 422:
        message = error.hasOwnProperty('message') ? error.message : 'Form Validation Messages';
        break;

      case 429:
        message = error.hasOwnProperty('message') ? error.message : 'Too Many Reruests';
        break;

      case 500:
        message = error.hasOwnProperty('message') ? error.message : 'Internal Server Error';
        break;

      case 503:
        message = error.hasOwnProperty('message') ? error.message : 'API Service Unavailable';
        break;

      case 599:
        message = error.hasOwnProperty('message') ? error.message : ' Network connect timeout';
        break;

      default:
        message = error.hasOwnProperty('message') ? error.message : '';
        break;
    }
  }

  return message;
};

export default instance;
