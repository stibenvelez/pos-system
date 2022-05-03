const formatDate = (date) => {
    let newDate = new Date(date);
    const result = newDate.toLocaleString("en-GB", { timeZone: "UTC" });
    console.log(result);
    return result
};

export default formatDate;