import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/user/auth",
});
const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: null,

      register: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post("/register", credentials);
          set({
            isLoading: false,
          });
        } catch (err) {
          set({
            error: err.response?.data?.message || err.message,
            isLoading: false,
          });
        }
      },
      // 🔐 Login (Async)
      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post("/login", credentials);

          set({
            user: res.data.user,
            isLoggedIn: true,
            isLoading: false,
          });
        } catch (err) {
          set({
            error: err.response?.data?.message || err.message,
            isLoading: false,
          });
        }
      },

      // 🔄 Update User (Async)
      updateUser: async (updatedData) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post("/update-data", updatedData);
          set({
            user: res.data.user,
            isLoading: false,
            isLoggedIn: true,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || error.message,
            isLoading: false,
          });
        }
      },
      // 🚪 Logout
      logout: () => set({ user: null, isLoggedIn: false }),
      registerStudents: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post("/register_student", credentials);
          set({ isLoading: false });
        } catch (err) {
          set({
            error: err.response?.data?.message || err.message,
            isLoading: false,
          });
        }
      },
    }),
    { name: "auth-store" }
  )
);

export default useAuthStore;
