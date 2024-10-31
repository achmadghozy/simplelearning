import { useQuery } from "@tanstack/react-query";
import { studentApi } from "../services/api";
import type {
  Course,
  StudentProfile,
  ProgressData,
  CourseStats,
} from "../types/student";

export const useStudentProfile = () => {
  return useQuery<StudentProfile>({
    queryKey: ["studentProfile"],
    queryFn: studentApi.getProfile,
  });
};

export const useStudentCourses = () => {
  return useQuery<Course[]>({
    queryKey: ["studentCourses"],
    queryFn: studentApi.getCourses,
  });
};

export const useProgressData = () => {
  return useQuery<ProgressData>({
    queryKey: ["progressData"],
    queryFn: studentApi.getProgressData,
  });
};

export const useCourseStats = () => {
  return useQuery<CourseStats>({
    queryKey: ["courseStats"],
    queryFn: studentApi.getCourseStats,
  });
};
