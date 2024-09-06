import { useEffect, useRef } from "react";

const useClickTracker = (apiKey, website) => {
  const visitDataSent = useRef(false);

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
      platform: navigator.platform,
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

  const sendVisitData = async () => {
    if (!document.referrer) {
      console.log("Referrer is empty, not sending visit data.");
      return;
    }
    const visitData = {
      websiteName: website,
      referrer: document.referrer,
    };

    const visitEndpoint = "http://localhost:8080/api/click-data/visits";

    try {
      const response = await fetch(visitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(visitData),
      });

      const data = await response.json();
      console.log("Visit data sent successfully:", data);
    } catch (error) {
      console.error("Error sending visit data:", error);
    }
  };

  useEffect(() => {
    if (!visitDataSent.current) {
      sendVisitData();
      visitDataSent.current = true;
    }

    assignIds();
    document.addEventListener("click", sendClickData);

    return () => {
      document.removeEventListener("click", sendClickData);
    };
  }, []);
};

export default useClickTracker;
