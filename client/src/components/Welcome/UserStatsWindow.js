import React, {useContext} from 'react'
import { getData } from '../../helpers/Stats';
import { UserContext } from '../../providers/UserProvider';

const SVG_WIDTH = 400;
const SVG_HEIGHT = 200;

export const UserStatsWindow = () => {
  const {user} = useContext(UserContext);
  const data = getData(user);
  const x0 = 20;
  const xAxisLength = 300//SVG_WIDTH - x0 * 2;

  const y0 = 40;
  const yAxisLength = 120//SVG_HEIGHT - y0 * 2;

  const xAxisY = y0 + yAxisLength;
  const dataYMax = 10
  const dataYMin = 0
/*
  const dataYMax = data.reduce(
    (currMax, [_, dataY]) => Math.max(currMax, dataY),
    -Infinity
  );
  const dataYMin = data.reduce(
    (currMin, [_, dataY]) => Math.min(currMin, dataY),
    Infinity
  );*/
  const dataYRange = dataYMax - dataYMin;

  const numYTicks = 10;

  const barPlotWidth = xAxisLength / data.length;


  
  return (
    <div className='statsWindow' id="statsWindow">
          <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      {/* X axis */}
      <line
        x1={x0}
        y1={xAxisY}
        x2={x0 + xAxisLength}
        y2={xAxisY}
        stroke="grey"
      />
      <text x={x0 + xAxisLength + 5} y={xAxisY + 4}>
        Fecha
      </text>

      {/* Y axis */}
      <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke="grey" />
      {Array.from({ length: numYTicks }).map((_, index) => {
        const y = y0 + index * (yAxisLength / numYTicks);

        //const yValue = Math.round(dataYMax - index * (dataYRange / numYTicks));
        const yValue = Math.round(10 - index * (dataYRange / numYTicks));
        return (
          <g key={index}>
            <line x1={x0} y1={y} x2={x0 - 5} y2={y} stroke="grey" />
            <text x={x0 - 5} y={y + 5} textAnchor="end">
             {yValue}
            </text>
          </g>
        );
      })}
      <text x={x0} y={y0 - 8} textAnchor="middle">
        Pts
      </text>

      {/* Bar plots */}
      {data.map(([day, dataY], index) => {
        const x = x0 + index * barPlotWidth;

        //const yRatio = (dataY - dataYMin) / dataYRange;
        const yRatio = (dataY - dataYMin)/ dataYRange
        const y = y0 + (1 - yRatio) * yAxisLength;
        const height = yRatio * yAxisLength;

        const sidePadding = 10;

        return (
          <g key={index}>
            <rect
              x={x + sidePadding / 2}
              y={y}
              width={barPlotWidth - sidePadding}
              height={height}
            />
            <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle">
              {day}
            </text>
          </g>
        );
      })}
    </svg>
    </div>
  )
}
