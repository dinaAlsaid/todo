import { useState, useEffect, useContext } from "react";
import { SettingsContext } from "context/settings";
import { ascend, descend } from "Util/sort";

export const useFilter = (storageData) => {
  const [FilteredData, setFilteredData] = useState(storageData);
  const Settings = useContext(SettingsContext);

  useEffect(() => {
    setFilteredData(storageData);
  }, [storageData]);

  useEffect(() => {
    if (Settings.sorted) {
      setFilteredData([..._sort(FilteredData, Settings.sorted)]);
    }

    if (!Settings.sorted) {
      setFilteredData(storageData);
    }
  }, [storageData, Settings.sorted]); //eslint-disable-line

  useEffect(() => {
    if (Settings.showCompleted) {
      setFilteredData([..._filter(storageData)]);
    }
    if (!Settings.showCompleted) {
      setFilteredData(storageData);
    }
  }, [storageData, Settings.showCompleted]); //eslint-disable-line
  const _filter = (data) => {
    return data.filter((item) => item.status !== "done");
  };

  const _sort = (data, direction = 1) => {
    //direction 1=> ascend
    // -1=> descend
    // 0=> not sorted
    if (direction === 0) {
      return storageData;
    }
    return data.sort(direction === -1 ? descend : ascend);
  };

  return {
    // _filter,
    //  _sort,
    FilteredData,
  };
};
