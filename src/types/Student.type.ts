export type StudentType = {
  id: string;
  name: string;
  username: string;
  email: string;
  group: string;
  index: number;
};

export type StudentStoreType = {
  loading: boolean;
  students: StudentType[];
  error: any;
  getStudents: () => void;
};

export type Item {
  id: string;
  name: string;
  username: string;
  email: string;
  group: string;
  index: number;
}