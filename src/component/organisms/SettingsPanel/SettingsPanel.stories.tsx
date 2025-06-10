import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SettingsPanel } from "./../../organisms";
import { Button } from "../../atoms";

const meta: Meta = {
  title: "organisms/SettingsPanel",
  // You can skip component: ... for a composite "page" story
};
export default meta;

export const MultiPanelSettings: StoryObj = {
  render: () => {
    // Panel 1: Notifications
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);

    const notificationItems = [
      {
        key: "email_alerts",
        label: "Email alerts",
        type: "toggle",
        value: emailAlerts,
        onChange: setEmailAlerts,
        tooltip: "Get emails about important updates.",
        helpText: "We recommend keeping this on.",
      },
      {
        key: "sms_alerts",
        label: "SMS alerts",
        type: "toggle",
        value: smsAlerts,
        onChange: setSmsAlerts,
        tooltip: "SMS are sent only for critical actions.",
        disabled: true,
        helpText: "Enable in your profile to use.",
      },
      {
        key: "sms_alerts",
        label: "SMS alerts",
        type: "checkbox",
        value: smsAlerts,
        onChange: setSmsAlerts,
        tooltip: "SMS are sent only for critical actions.",
        disabled: false,
        helpText: "Enable in your profile to use.",
      },
    ];

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 700,
          margin: "0 auto",
          padding: "2.5rem 1rem",
          gap: "20px",
        }}
      >
        <SettingsPanel title="Notifications" items={notificationItems} />
      </div>
    );
  },
};
