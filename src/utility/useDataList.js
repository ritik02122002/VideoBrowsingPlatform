import { API_KEY } from "../constants";
import { useState,useEffect } from "react";

const useDataList = (API_URL, dataObj, depedencyArray) => {
    const [dataList, setDataList] = useState(null);

    const getData = async () => {

        let url = API_URL;
        for (const key in dataObj) {
            if (dataObj.hasOwnProperty(key) && dataObj[key] != null) {
                const value = dataObj[key];
                url += ("&" + String(key) + "=" + value)
            }
        }
        url += ("&key=" + API_KEY);

        const data = await fetch(url);
        const jsonObj = await data.json();
        console.log(jsonObj);
        setDataList(jsonObj);
    }
    useEffect(() => { getData() }
        , depedencyArray)

    return [dataList, setDataList];
}
export default useDataList;