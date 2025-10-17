import { Serie } from "./serie.js";
import { series as dataSeries } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;


function renderSeriesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td><a href="${s.link}" target="_blank" rel="noopener noreferrer">${s.name}</a></td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });

  let totalSeasons = 0;
  series.forEach(s => { totalSeasons += s.seasons; });
  let avg = Math.round(totalSeasons / series.length);

  let trAvg = document.createElement("tr");
  trAvg.innerHTML = `<td colspan="4"><strong>Seasons average: ${avg}</strong></td>`;
  seriesTbody.appendChild(trAvg);
}

renderSeriesInTable(dataSeries);
