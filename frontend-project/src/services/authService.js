import axios from 'axios';

const API_URL = 'http://localhost:5001/api/users';

// Login user
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || 'An error occurred';
    }
};
