export const useMedia = (id) => {
  // Team Logo (Cap/Primary on Light/Dark)
  const logo = (logoType, logoShade) => {
    const logoUrl = "https://www.mlbstatic.com/team-logos";
    let type, shade;
    logoType === "cap" ? (type = "cap") : (type = "primary");
    logoShade === "light" ? (shade = "light") : (shade = "dark");

    return `${logoUrl}/team-${type}-on-${shade}/${id}.svg`;
  };

  // Player Headshot
  const headshotUrl = (id) => {
    const url =
      "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people";
    return `${url}/${id}/headshot/67/current`;
  };

  const headshot = headshotUrl(id);

  return { logo, headshot };
};
