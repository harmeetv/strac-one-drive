exports.createSubscription = async (req, res) => {
    const { userId, plan } = req.body;
    // Logic to create a subscription
    try {
        await axios.post(
          "https://graph.microsoft.com/v1.0/subscriptions",
          {
            changeType: "updated",
            // notificationUrl: `${DOMAIN}/webhooks/one-drive`,
            notificationUrl: `https://play.svix.com/in/e_4iqFIpkZ97sx7rjGoUhe86OfU4p/`,
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
        res.status(201).send({message: "Subscription created successfully"});
      } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
      }
  };
  