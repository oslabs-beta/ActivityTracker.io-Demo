import { useEffect } from "react";

const useClickTracker = (apiKey,website) => {
  function assignIds() {
    const everything = document.querySelectorAll("button");
    let count = 0;
    for (const el of everything) {
      el.dataset.activity = count;
      count++;
    }
  }

  const sendClickData = async (event) => {
    const clickData = {
      x_coord: event.clientX,
      y_coord: event.clientY,
      websiteName: website,
      element: event.target.tagName.toLowerCase(),
      elementName: event.target.innerHTML.toLowerCase(),
      activityId: event.target.dataset.activity,
      userAgent: navigator.userAgent,
      platform: navigator.userAgent.platform,
      pageUrl: window.location.href,
      created_at: new Date().toISOString(),
    };

    const apiEndpoint = "http://localhost:8080/api/click-data";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(clickData),
      });

      const data = await response.json();
      console.log("Click data sent successfully:", data);
    } catch (error) {
      console.error("Error sending click data:", error);
    }
  };

  useEffect(() => {
    assignIds();

    document.addEventListener("click", sendClickData);

    return () => {
      document.removeEventListener("click", sendClickData);
    };
  }, []);
};

export default useClickTracker;
