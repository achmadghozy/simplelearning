export interface Course {
    id: number;
    title: string;
    progress: number;
    grade: number;
    status: 'completed' | 'in-progress';
    modules: number;
    completedModules: number;
    instructor: string;
    deadline: string;
  }
  
  export interface StudentProfile {
    id: number;
    name: string;
    email: string;
    overallProgress: number;
    averageGrade: number;
    completedCourses: number;
    totalCourses: number;
  }
  
  export interface ProgressData {
    labels: string[];
    values: number[];
  }
  
  export interface CourseStats {
    totalHoursSpent: number;
    assignmentsCompleted: number;
    upcomingDeadlines: number;
  }