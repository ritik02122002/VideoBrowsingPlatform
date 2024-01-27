const API_KEY=process.env.REACT_APP_API_KEY

export const convertData = (views) => {
    views = Number(views)
    if (views >= 1000000) {
        views = Math.round(views / 100000)
        views /= 10
        return views + "M"
    }
    if (views >= 1000) {
        views = Math.round(views / 100)
        views /= 10
        return views + "K"
    }
    return views
}
export const convertVideoDuration = (timeString) => {
    if (timeString == "")
        return null;
    const hrPos = timeString.search("H");
    const minPos = timeString.search("M");
    const secPos = timeString.search("S");
    let ans = ""
    if (hrPos != -1) {
        ans += (timeString.substring(2, hrPos))
        ans += ":"

    }
    if (minPos != -1) {
        if ((minPos === hrPos + 2 && hrPos != -1))
            ans += "0"
        if (hrPos != -1)
            ans += (timeString.substring(hrPos + 1, minPos))
        else
            ans += (timeString.substring(2, minPos))
        ans += ":"

    }
    else if (hrPos != -1) {
        ans += "00:"
    }
    else if (minPos == -1 && hrPos == -1) {
        ans += "0:"
    }
    if (secPos != -1) {
        if ((minPos != -1 || hrPos != -1) && (secPos === minPos + 2 || secPos == hrPos + 2))
            ans += "0"
        if (minPos != -1)
            ans += (timeString.substring(minPos + 1, secPos))
        else if (hrPos != -1)
            ans += (timeString.substring(hrPos + 1, secPos))

        else
            ans += (timeString.substring(2, secPos))

    }
    else {
        ans += "00"
    }
    return ans;





}

export const convertDateTime = (dateTime) => {
    const d1 = new Date(dateTime);
    const d2 = new Date();
    let diff = Math.floor((d2.getTime() - d1.getTime()) / 1000);

    if (diff == 1)
        return diff + " second ago";
    if (diff < 60)
        return diff + " seconds ago";

    diff = Math.floor(diff / 60);

    if (diff == 1)
        return diff + " minute ago";
    if (diff < 60)
        return diff + " minutes ago";

    diff = Math.floor(diff / 60);

    if (diff == 1)
        return diff + " hour ago";
    if (diff < 24)
        return diff + " hours ago";

    diff = Math.floor(diff / 24);

    if (diff == 1)
        return diff + " day ago";
    if (diff < 30)
        return diff + " days ago";

    diff = Math.floor(diff / 30);

    if (diff == 1)
        return diff + " month ago";
    if (diff < 12)
        return diff + " months ago";

    diff = Math.floor(diff / 12);

    if (diff == 1)
        return diff + " year ago";
    return diff + " years ago";






}
export const getCompleteUrl = (url, dataObj) => {
    console.log(dataObj["pageToken"])
    for (const key in dataObj) {
        if (dataObj.hasOwnProperty(key) && dataObj[key] != null) {
            const value = dataObj[key];
            url += ("&" + String(key) + "=" + value)
        }
    }
    url += ("&key=" + API_KEY);
    return url;
}

export const randomNumberLessThanN = (N) => {
    return Math.floor(Math.random() * N)

}

export const mergeSearchResults = (arr1, arr2) => {

    const arry = [...(arr1), ...(arr2)];
    const mergedObject = arry.reduce((acc, obj) => {
        const key = obj.id.videoId;
        if (!acc[key]) {
            acc[key] = obj;
        } else {
            acc[key] = { ...acc[key], ...obj };
        }
        return acc;
    }, {});
    console.log(mergedObject);
    return Object.values(mergedObject);
}

export const decodeHtmlEntities = (encodedString) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedString;
    return textarea.value;
}