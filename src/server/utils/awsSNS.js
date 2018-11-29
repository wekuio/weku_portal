import AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-1'});

const awsSNS = {
    verifyAndSend: function* (phone, code){
        var params = {
            Message: 'WEKU register confirmation code: ' + code, /* required */
            PhoneNumber: phone,
        };

        try{
            yield new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
            return {};
        } catch (error) {
            console.log('-- aws SNS error -->', error);
            return { error: 'Unable to send message, please try again later.' };
        }
    }
};

export default awsSNS;
