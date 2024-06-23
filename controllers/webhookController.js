exports.handleWebhook = (req, res, io) => {
    const event = req.body;
    // Logic to handle the webhook event
    const { value } = req.body;
    if (value && value[0]) {
        const { resource, clientState } = value[0];

        if (clientState === "secretClientValue") {
        console.log("Resource updated:", resource);
        io.emit("fileUpdated", resource);
        }
    }
    res.status(202).send();
};
  