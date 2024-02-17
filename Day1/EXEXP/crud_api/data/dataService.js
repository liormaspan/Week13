import axios from "axios";

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export { fetchPosts };