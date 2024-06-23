exports.createSubscription = async (req, res) => {
    const { userId, plan } = req.body;
    // Logic to create a subscription
    try {
        const response = await axios.post(
          "https://graph.microsoft.com/v1.0/subscriptions",
          {
            changeType: "updated",
            notificationUrl: `${process.env.DOMAIN}/webhooks/one-drive`,
            resource: "/me/drive/root/children",
            expirationDateTime: new Date(new Date().getTime() + 3600 * 1000).toISOString(), // 1 hour expiration
            clientState: "secretClientValue",
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("ad", response.data);
        res.status(200).send({message: "Subscription created successfully"});
      } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
      }
  };
  