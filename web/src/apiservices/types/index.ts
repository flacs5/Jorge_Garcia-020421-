export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: string | null;
  message: string | null;
}

export interface ToDo {
  description: string;
  status: boolean;
  _id?: string;
}
