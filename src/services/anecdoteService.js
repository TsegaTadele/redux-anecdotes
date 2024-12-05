import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes' 
const getId = () => (100000 * Math.random()).toFixed(0);

const getAll=async()=>{
    const response=await axios.get(baseUrl)
    return response.data
}

const createNew=async(content)=>{
 
    const object={
        content,
        "id": getId(),
        "votes": 0
    }
    // console.log("on service create object ", object)
    const response = await axios.post(baseUrl, object)
    return response.data

}


const updateVotes = async (id, votes) => {
    const response = await axios.patch(`${baseUrl}/${id}`, { votes });
    // console.log("service file ",response)
    return response.data;
};
export default {getAll,createNew,updateVotes}