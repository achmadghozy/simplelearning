import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface propsStdDashboard {}

// Dummy course data
const courseData = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 100,
    grade: 85,
    status: "completed",
    modules: 12,
    completedModules: 12,
    instructor: "Dr. Sarah Johnson",
    deadline: "2024-03-15",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    progress: 60,
    grade: 78,
    status: "in-progress",
    modules: 15,
    completedModules: 9,
    instructor: "Prof. Michael Chen",
    deadline: "2024-04-01",
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    progress: 30,
    grade: 92,
    status: "in-progress",
    modules: 10,
    completedModules: 3,
    instructor: "Dr. Emily Williams",
    deadline: "2024-05-15",
  },
];

const StudentDashboard: FC = () => {
  // Progress chart data
  const progressChartData: ChartData<"line"> = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Course Completion Progress",
        data: [20, 45, 75, 90],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, Student!
          </h1>
          <p className="mt-2 text-gray-600">
            Track your progress and manage your courses.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Overall Progress
            </h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">63%</p>
            <p className="text-sm text-gray-500 mt-1">Across all courses</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Average Grade</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">85%</p>
            <p className="text-sm text-gray-500 mt-1">Current performance</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Completed Courses
            </h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">1/3</p>
            <p className="text-sm text-gray-500 mt-1">Total completion rate</p>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Learning Progress
          </h2>
          <div className="h-[300px]">
            <Line
              data={progressChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Course List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Courses
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {courseData.map((course) => (
              <div key={course.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {course.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {course.status === "completed"
                      ? "Completed"
                      : "In Progress"}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Progress</p>
                    <div className="mt-1 relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                        <div
                          style={{ width: `${course.progress}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        />
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {course.progress}%
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Grade</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {course.grade}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Modules Completed</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {course.completedModules}/{course.modules}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {new Date(course.deadline).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="text-sm font-medium text-gray-900">
                    {course.instructor}
                  </p>
                </div>
                <div className="mt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
