import { Teacher, TeacherCourse, Student, CourseStatistics } from "../types/teacher";

export const teacherData: Teacher = {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    department: "Computer Science",
    coursesCount: 3,
    totalStudents: 150
  };
  
  export const courseData: TeacherCourse = {
    id: 1,
    title: "Advanced Web Development",
    code: "CS-301",
    enrolledStudents: 50,
    averageGrade: 78.5,
    completionRate: 85,
    failingStudents: 5,
    graduatingStudents: 42,
    startDate: "2024-01-15",
    endDate: "2024-05-30"
  };
  
  export const studentData: Student[] = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@student.edu",
      grade: 92.5,
      progress: 95,
      status: "graduating",
      lastActive: "2024-03-10T15:30:00Z"
    },
    {
      id: 2,
      name: "Emma Davis",
      email: "emma.davis@student.edu",
      grade: 45.8,
      progress: 60,
      status: "at-risk",
      lastActive: "2024-03-09T10:15:00Z"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@student.edu",
      grade: 88.3,
      progress: 85,
      status: "on-track",
      lastActive: "2024-03-10T14:45:00Z"
    }
  ];
  
  export const courseStatistics: CourseStatistics = {
    totalEnrolled: 50,
    averageGrade: 78.5,
    completionRate: 85,
    failingCount: 5,
    graduatingCount: 42,
    weeklyEngagement: [85, 90, 87, 92, 88, 85, 89, 91],
    gradeDistribution: {
      A: 15,
      B: 20,
      C: 10,
      D: 3,
      F: 2
    }
  };