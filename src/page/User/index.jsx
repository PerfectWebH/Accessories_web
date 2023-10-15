import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const User = () => {
  return (
    <div className="w-[1330px] h-[1000px] mx-[96px] py-[60px]">
      <form>
        <h1 className="heading-01 text-center mt-[68px]">My account</h1>
        <Tabs>
          <TabList>
            <Tab></Tab>
            <TabPanel>Hello</TabPanel>
          </TabList>
        </Tabs>
      </form>
    </div>
  );
};

export default User;
