exports.handleWebhook = (req, res, io) => {
    const validationToken = req.query.validationToken;
    if (validationToken) {
        // Validate the webhook subscription
        res.status(200).send(validationToken);
    } else {
        console.log("req.body", req.body);
        const event = req.body.value[0];
        console.log("req.body", event.resourceData);
        if (event && event.resourceData && event.resourceData.id) {
            // Handle the event (e.g., user added/removed)
            console.log('Received event:', event);
            // Add logic here to update your application state based on the event
        }
        res.status(200).send();
    }
    // const event = req.body;
    // console.log("event", event);
    // // Logic to handle the webhook event
    // const { value } = req.body;
    // if (value && value[0]) {
    //     const { resource, clientState } = value[0];

    //     if (clientState === "secretClientValue") {
    //     console.log("Resource updated:", resource);
    //     io.emit("fileUpdated", resource);
    //     }
    // }
    // res.status(202).send();
};
  