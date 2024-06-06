import { useDate } from "@/utils/useDate";
import { getMonthSchedule } from "@/lib/getMlbData";

export async function getMonthScheduleData(teamId, month) {
  const { dates } = await getMonthSchedule(teamId, month);

  const [...gameData] = dates.map((day) => ({
    date: day.date,
    game: [...day.games],
  }));

  const firstGame = gameData[0].date;

  const calendarTitle = useDate(firstGame).calendarTitle;
  let calendarStart;
  if (month == "Mar") {
    calendarStart = useDate("2024-03-24").calendarStartAlt;
  } else {
    calendarStart = useDate(firstGame).calendarStart;
  }

  const calendarEnd = useDate(firstGame).calendarEnd;
  const calendarData = [];

  let currentDay = calendarStart;

  while (currentDay.isBefore(calendarEnd)) {
    calendarData.push({
      date: useDate(currentDay).calendarDay,
      info: null,
    });
    currentDay = currentDay.add(1, "day");
  }

  gameData.forEach(({ date, game }) => {
    const calendarDay = calendarData.find(
      (day) => day.date === useDate(date).calendarDay,
    );
    if (calendarDay) {
      const gameStart = useDate(game[0].gameDate).gameStart;
      calendarDay.info = {
        awayId: game[0].teams.away.team.id,
        homeId: game[0].teams.home.team.id,
        gameId: game[0].gamePk,
        homeWin: game[0].teams.home.isWinner,
        rescheduled: game[0].rescheduleGameDate ? true : false,
        isFutureGame:
          game[0].status.detailedState === "Scheduled" ? true : false,
        gameStart: gameStart,
      };
      if (game[1]) {
        const gameStartGm2 = useDate(game[1].gameDate).gameStart;
        calendarDay.info.gameIdGm2 = game[1].gamePk;
        calendarDay.info.homeWinGm2 = game[1].teams.home.isWinner;
        calendarDay.info.rescheduledGm2 = game[1].rescheduleGameDate
          ? true
          : false;
        calendarDay.info.isFutureGameGm2 =
          game[1].status.detailedState === "Scheduled" ? true : false;
        calendarDay.info.gameStartGm2 = gameStartGm2;
      }
    }
  });

  const firstDay = useDate(firstGame).firstDay;
  let emptyCells;
  if (month === "Mar") {
    emptyCells = [];
  } else {
    emptyCells = [...Array(firstDay)].map((_, index) => (
      <div key={`empty-${index}`} />
    ));
  }

  return { calendarTitle, calendarData, emptyCells };
}
