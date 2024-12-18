import { Layout } from "@app/layouts/layout";
import { CalendarTab } from "@shared/ui/CalendarTab/calendar-tab";
import React from "react";

export const HomeScreen = () => {
  return (
    <Layout isHeader>
      <CalendarTab />
    </Layout>
  );
};
