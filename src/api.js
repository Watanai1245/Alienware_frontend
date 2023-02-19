import axios from "axios";
const baseURL = "http://localhost:3000/MOCK_DATA.json"

function fetchProducts(callBack, setSearchAPIData) {
    axios.get(baseURL)
        .then((res) => {
            callBack(res.data)
            setSearchAPIData(res.data)
        });
}

export { fetchProducts };