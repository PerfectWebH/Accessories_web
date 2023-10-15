import { useState } from "react";

export const useTabs = (initialTab = 0) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTabs, setActiveTabs] = useState(
    new Array(2).fill(false).map((_, index) => index === initialTab)
  );

  const handleChange = (index) => {
    setTabIndex(index);
  };

  const tabChange = (index) => {
    setTabIndex(index);

    const newActiveTabs = activeTabs.map((_, i) => i === index);
    setActiveTabs(newActiveTabs);
  };

  return {
    tabIndex,
    setTabIndex,
    activeTabs,
    handleChange,
    tabChange,
  };
};
