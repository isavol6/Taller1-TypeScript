console.log("Main cargó ✅");
import { series as dataSeries } from "./data.js";
console.log("dataSeries length:", Array.isArray(dataSeries) ? dataSeries.length : dataSeries);
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td><a href=\"").concat(s.link, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(s.name, "</a></td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var totalSeasons = 0;
    series.forEach(function (s) { totalSeasons += s.seasons; });
    var avg = Math.round(totalSeasons / series.length);
    var trAvg = document.createElement("tr");
    trAvg.innerHTML = "<td colspan=\"4\"><strong>Seasons average: ".concat(avg, "</strong></td>");
    seriesTbody.appendChild(trAvg);
}
// Llamada directa (sin event listeners)
renderSeriesInTable(dataSeries);
