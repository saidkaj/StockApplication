import { decode as atob, encode as btoa } from 'base-64';
import axios from 'axios';

const userData = {
    typReport: "Catalogs",
    Usr: { Name: "Admin" },
};


const PersonData = () => {
    axios.post("http://46.32.169.71/DEMO/hs/MobileApi/Connect/", userData, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: 'Basic ' + btoa('sa:abc')
        }
    }).then((resp) => {
        console.log(resp.data);
        setData(resp.data);
    }).catch((error) => {
        console.log(error);
    });
};
