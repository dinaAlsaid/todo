import { useState, useEffect } from "react";

export const useFilter = (storageData) => {
  const [FilteredData, setFilteredData] = useState(storageData);
  useEffect(() => {
    setFilteredData(storageData);
  }, [storageData]);

  const _filter = () => {};
  const _sort = (direction = "ascend") => {};

  return { _filter, _sort, FilteredData };
};
