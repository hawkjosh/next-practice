// import { getMonthScheduleData } from "@/lib/getMonthScheduleData";
// import TeamCalendar from "./components/TeamCalendar";

// export default async function TeamCalendarPage({ params }) {
//   const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
//   const teamId = params.teamId;

//   const data = await Promise.all(
//     months.map(async (month) => {
//       const { calendarTitle, calendarData, emptyCells } =
//         await getMonthScheduleData(teamId, month);

//       return {
//         calendarTitle,
//         calendarData,
//         emptyCells,
//         teamId: teamId,
//       };
//     }),
//   );

//   return data.map((monthData, index) => (
//     <TeamCalendar
//       key={index}
//       calendarTitle={monthData.calendarTitle}
//       calendarData={monthData.calendarData}
//       emptyCells={monthData.emptyCells}
//       teamId={teamId}
//     />
//   ));
// }

export default async function TeamDashboardPage() {
  return (
    <div className="flex flex-col items-center max-w-screen-xl gap-2 py-4 mx-auto">
      <h1 className="text-2xl font-bold">Team Dashboard</h1>
      <p className="text-lg">Welcome to the team dashboard!</p>
    </div>
  )
}