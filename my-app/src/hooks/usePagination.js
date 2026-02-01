import { useMemo } from "react";

export const usePagination = (totalPage) => {
  const pagination = useMemo(() => {
    const countPage = [];
    for (let i = 1; i <= totalPage; i++) {
      countPage.push(i);
    }
    return countPage;
  }, [totalPage]);
  return pagination;
};
