import { useState } from "react";

export const useFilter = (storageData) => {

    const [FilteredData, setFilteredData] = useState(storageData)
    const _filter=()=>{}
    const _sort=(direction="ascend")=>{}

    return {_filter,_sort,FilteredData};
  };
  
  