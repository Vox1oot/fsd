import axios from 'axios';

import { ENV_CONFIG } from '../config/env.config';

export const http = axios.create({
    baseURL: ENV_CONFIG.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
