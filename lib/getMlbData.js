import buildUrl from "@/utils/useBuildUrl";

export async function getTeams() {
  try {
    const url = buildUrl("teams", {}, { sportId: 1 });
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(`Failed to fetch teams: ${res.status} ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTeam(id) {
  try {
    const url = buildUrl(
      "teams",
      {},
      {
        teamId: id,
        hydrate: "deviceProperties",
        fields: "teams,deviceProperties"
      },
    );
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(`Failed to fetch team: ${res.status} ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getRoster(id) {
  try {
    const url = buildUrl("roster", { teamId: id }, {});
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch roster: ${res.status} ${res.statusText}`,
      );
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPlayer(id) {
  try {
    const url = buildUrl(
      "player",
      { personId: id },
      {
        hydrate:
          "person,stats(group=[hitting,pitching,fielding],type=[yearByYear])",
      },
    );
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch player: ${res.status} ${res.statusText}`,
      );
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getSchedule(id) {
  try {
    const url = buildUrl(
      "schedule",
      {},
      {
        sportId: 1,
        season: 2023,
        gameType: "R",
        teamId: id,
        hydrate: "team",
        fields:
          "dates,date,totalGames,games,gamePk,gameDate,rescheduleDate,status,detailedState,statusCode,reason,teams,away,home,leagueRecord,wins,losses,score,team,id,abbreviation,franchiseName,clubName,isWinner,venue,name,doubleHeader,dayNight,gamesInSeries,seriesGameNumber",
      },
    );
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch schedule: ${res.status} ${res.statusText}`,
      );
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMonthSchedule(id, month) {
  try {
    const monthMapping = {
      Mar: { start: "2023-03-01", end: "2023-03-31" },
      Apr: { start: "2023-04-01", end: "2023-04-30" },
      May: { start: "2023-05-01", end: "2023-05-31" },
      Jun: { start: "2023-06-01", end: "2023-06-30" },
      Jul: { start: "2023-07-01", end: "2023-07-31" },
      Aug: { start: "2023-08-01", end: "2023-08-31" },
      Sep: { start: "2023-09-01", end: "2023-09-30" },
      Oct: { start: "2023-10-01", end: "2023-10-31" },
    };
    const { start, end } = monthMapping[month];
    const url = buildUrl(
      "schedule",
      {},
      {
        sportId: 1,
        teamId: id,
        gameType: "R",
        startDate: start,
        endDate: end,
      },
    );
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch month schedule: ${res.status} ${res.statusText}`,
      );
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getBoxscore(id) {
  try {
    const url = buildUrl("boxscore", { gamePk: id }, {});
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch box score: ${res.status} ${res.statusText}`,
      );
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getLinescore(id) {
  try {
    const url = buildUrl("linescore", { gamePk: id }, {});
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch line score: ${res.status} ${res.statusText}`,
      );
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getGameDate(id) {
  try {
    const url = buildUrl(
      "schedule",
      {},
      {
        gamePks: id,
        fields: "dates,game,gameDate",
      },
    );
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch game date: ${res.status} ${res.statusText}`,
      );
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
