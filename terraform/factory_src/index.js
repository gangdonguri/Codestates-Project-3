const axios = require('axios').default

const consumer = async (event) => {
    console.log("evnet.Records: ", event.Records)
    for (const record of event.Records) {
        console.log("Message Body: ", record.body);
        const payload = {
            MessageGroupId: record.messageId,
            MessageAttributeRequester: record.messageAttributes.MessageAttributeRequester,
            MessageAttributeProductId: record.messageAttributes.MessageAttributeProductId,
            MessageAttributeFactoryId: record.messageAttributes.MessageAttributeFactoryId,
            MessageAttributeProductCnt: record.messageAttributes.MessageAttributeProductCnt,
            CallbackUrl: process.env.CALLBACK_URL + '/product/donut',
        }

        axios.post('http://project3-factory-api.coz-devops.click/api/manufactures', payload)
            .then(function (response) {
                console.log("response: ", response);
            })
            .catch(function (error) {
                console.log("error: ", error);
            });
    }
};

module.exports = {
    consumer,
};
