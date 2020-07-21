/* global SOCKET_HOST */
import io from 'socket.io-client';
import {apiUrls} from '../redux/api/constants';
const socket = io(apiUrls.BASE_URL);

export default socket;
