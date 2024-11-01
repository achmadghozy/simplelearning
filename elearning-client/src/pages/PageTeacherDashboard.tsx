import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  courseData,
  studentData,
  courseStatistics,
} from "../dummydata/teacherDummy";
import { Student } from "../types/teacher";

ChartJS.register(ArcElement, Tooltip, Legend);

const TeacherDashboard: FC = () => {
  // Chart data for weekly engagement
  const engagementChartData = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
    ],
    datasets: [
      {
        label: "Student Engagement (%)",
        data: courseStatistics.weeklyEngagement,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
      },
    ],
  };

  // Chart data for grade distribution
  const gradeDistributionData = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
      {
        label: "Number of Students",
        data: Object.values(courseStatistics.gradeDistribution),
        backgroundColor: [
          "rgba(34, 197, 94, 0.6)",
          "rgba(59, 130, 246, 0.6)",
          "rgba(250, 204, 21, 0.6)",
          "rgba(249, 115, 22, 0.6)",
          "rgba(239, 68, 68, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course Dashboard</h1>
          <div className="mt-2 flex items-center text-gray-600">
            <span className="font-medium">{courseData.title}</span>
            <span className="mx-2">•</span>
            <span>{courseData.code}</span>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          <StatCard
            title="Enrolled Students"
            value={courseStatistics.totalEnrolled}
            trend="+5% from last term"
            trendUp={true}
          />
          <StatCard
            title="Average Grade"
            value={`${courseStatistics.averageGrade}%`}
            trend="+2.3% from last week"
            trendUp={true}
          />
          <StatCard
            title="Completion Rate"
            value={`${courseStatistics.completionRate}%`}
            trend="+1.5% from target"
            trendUp={true}
          />
          <StatCard
            title="At Risk Students"
            value={courseStatistics.failingCount}
            trend="-2 from last week"
            trendUp={false}
          />
          <StatCard
            title="Graduating Soon"
            value={courseStatistics.graduatingCount}
            trend="On track"
            trendUp={true}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Weekly Engagement
            </h2>
            <div className="h-[300px]">
              <Line
                data={engagementChartData}
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
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Grade Distribution
            </h2>
            <div className="h-[300px]">
              <Bar
                data={gradeDistributionData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Student Activity
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {studentData.map((student) => (
              <StudentRow key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number | string;
  trend: string;
  trendUp: boolean;
}

const StatCard: FC<StatCardProps> = ({ title, value, trend, trendUp }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
    <p
      className={`mt-2 text-sm ${trendUp ? "text-green-600" : "text-red-600"}`}
    >
      {trend}
    </p>
  </div>
);

const StudentRow: FC<{ student: Student }> = ({ student }) => (
  <div className="px-6 py-4 flex items-center justify-between">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-600 font-medium">
            {student.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-sm font-medium text-gray-900">{student.name}</h4>
        <p className="text-sm text-gray-500">{student.email}</p>
      </div>
    </div>
    <div className="flex items-center space-x-6">
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">{student.grade}%</p>
        <p className="text-sm text-gray-500">Grade</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">{student.progress}%</p>
        <p className="text-sm text-gray-500">Progress</p>
      </div>
      <div>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            student.status === "graduating"
              ? "bg-green-100 text-green-800"
              : student.status === "at-risk"
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {student.status.replace("-", " ")}
        </span>
      </div>
    </div>
  </div>
);

export default TeacherDashboard;
