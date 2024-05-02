import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const id = crypto.randomUUID();

const useSessionId = create<UseSessionId>()(
  persist(
    (set) => ({
      id: null,
      setSessionId: () => set({ id }),
    }),
    {
      name: "uuid-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useSessionId;
