import { create } from "zustand";

export const useData = create((set) => ({
  data: [],
  setData: (newData) => set((state) => ({ ...state, data: [...newData] })),
  page: 1,
  setPage: (page) => set((state) => ({ ...state, page })),
  setPrevPage: () => set((state) => ({ ...state, page: state.page - 1 })),
  setNextPage: () => set((state) => ({ ...state, page: state.page + 1 })),
  maxItems: 5,
  setMaxItems: (maxItems) => set((state) => ({ ...state, maxItems })),
}));
