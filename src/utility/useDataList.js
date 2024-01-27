import { getCompleteUrl } from "../helper";
import { useState, useEffect } from "react";

const useDataList = (API_URL, dataObj, depedencyArray) => {
    const [dataList, setDataList] = useState(null);

    const getData = async () => {

        const url = getCompleteUrl(API_URL, dataObj);

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