exports.handler = async (event, context) => {
    
    var inputs = event;
    console.log("Handler running ..");
    console.log("Input:", inputs);
    
    if ("error" in inputs){
        throw("Expected Error");
    }

    if ("sleep" in inputs){
        console.log("sleep");
        await new Promise(resolve => setTimeout(resolve, inputs.sleep * 1000));
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from: AwsFixtureTest'),
        log: context.logStreamName,
    };
    return response;
};