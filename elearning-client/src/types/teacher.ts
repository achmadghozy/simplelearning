export interface Teacher {
    id: number;
    name: string;
    email: string;
    department: string;
    coursesCount: number;
    totalStudents: number;
  }
  
  export interface TeacherCourse {
    id: number;
    title: string;
    code: string;
    enrolledStudents: number;
    averageGrade: number;
    completionRate: number;
    failingStudents: number;
    graduatingStudents: number;
    startDate: string;
    endDate: string;
  }
  
  export interface Student {
    id: number;
    name: string;
    email: string;
    grade: number;
    progress: number;
    status: 'at-risk' | 'on-track' | 'graduating' | 'failed';
    lastActive: string;
  }
  
  export interface CourseStatistics {
    totalEnrolled: number;
    averageGrade: number;
    completionRate: number;
    failingCount: number;
    graduatingCount: number;
    weeklyEngagement: number[];
    gradeDistribution: {
      A: number;
      B: number;
      C: number;
      D: number;
      F: number;
    };
  }