const axios = require("axios");

const homeWork = async () => {
    try {
        const data = await axios.get("https://students-api.up.railway.app/movies");
        console.log("Promesa exitosa")
        console.log(data.data);
    } catch (error) {
        console.log("La promesa fue invalidada")
        console.log(error.message)
    }
}

homeWork();