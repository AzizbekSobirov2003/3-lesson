import { create } from "zustand";
import { StudentStoreType } from "../types/Student.type";

const useStudent = create<StudentStoreType>((set) => ({
  loading: false,
  students: [],
  error: null,
  getStudents: async () => {
    try {
      set(() => ({
        loading: true,
      }));
      const res = await fetch("http://localhost:3000/students");
      const data = await res.json();
      set(() => ({
        loading: false,
        students: data,
        error: null,
      }));
    } catch (err: any) {
      set(() => ({
        loading: false,
        error: err.message,
      }));
    }
  },
}));

export default useStudent;
