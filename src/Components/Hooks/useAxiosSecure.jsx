import axios from 'axios';


const useAxiosSecure = () => {

    const axiosSecure =axios.create({
        baseURL:"https://scic-task-server-six.vercel.app"
    })
    return axiosSecure;
};

export default useAxiosSecure;