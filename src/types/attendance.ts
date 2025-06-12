interface AttendanceRecord {
  id: number;
  date: string;
  fullName: string;
  email: string;
  arrivalTime: string;
  departureTime: string;
  lateMinutes: number;
  isAbsent: boolean;
  isLate: boolean;
}