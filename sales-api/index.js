const consumer = async (event) => {
    console.log("evnet.Records: ", event.Records)
    for (const record of event.Records) {
        console.log("Message Body: ", record.body);
    }
};

module.exports = {
    consumer,
};