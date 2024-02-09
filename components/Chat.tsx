import React, { useEffect } from "react";
import { withWebChat } from "@ibm-watson/assistant-web-chat-react";

const Watson = ({ createWebChatInstance }) => {
  useEffect(() => {
    function onWebChatLoad(instance) {
      instance.updateHomeScreenConfig({
        is_on: false,
        greeting: "",
        starters: {
          is_on: false,
          buttons: [
            {
              label: "Turn home screen off",
            },
            {
              label: "Add conversation starters",
              url: "/contact",
            },
            {
              label: "Add custom content",
            },
          ],
        },
      });

      instance.render();
    }

    // A web chat configuration options object as documented at https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration#configurationobject
    console.debug("process.env")
    console.debug(process.env.INTEGRATIONID)
    const webChatOptions = {
      integrationID: process.env.NEXT_PUBLIC_INTEGRATIONID,


      region: "us-south",
      serviceInstanceID: "197df995-cf7a-42ac-87fb-58690b656407",
      onLoad: onWebChatLoad,
      showLauncher: true,
      openChatByDefault: true,
      element: document.querySelector(".chatElement"),
    };

    createWebChatInstance(webChatOptions);
  }, []);

  return <div></div>;
};

// Wrap the component with the method returned by `withWebChat`.
export default withWebChat()(Watson);