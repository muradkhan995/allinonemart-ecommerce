import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    return [];
  }
};

// Function to fetch a single product by ID
export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product', error);
    return null;
  }
};
