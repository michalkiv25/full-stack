import axios from 'axios';
import { axios as a } from './vars';

export default axios.create({
  baseURL: a.baseUrl,
  timeout: a.timeout,
});
