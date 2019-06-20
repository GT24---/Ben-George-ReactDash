import React, { useState } from 'react'
import './HorizontalChart.scss'
import {
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Brush
} from 'recharts'

const TraceColors: string[] = [
  'red',
  'green',
  'blue',
  'orange',
  'purple',
  'pink',
  'yellow',
  'cyan',
  'magenta'
]

interface IOwnProps {
  visibleData: object[]
  labels: string[]
}

export default function HorizontalChart(props: IOwnProps) {
  const [currentY, setCurrentY] = useState('')

  return (
    <ResponsiveContainer
      className="HorizontalResponsiveContainer"
      width={'100%'}
      height={200}
    >
      <ComposedChart data={props.visibleData}>
        <XAxis
          height={40}
          label={{
            value: 'MONTH',
            position: 'insideBottom',
            textAnchor: 'middle',
            dy: 0,
            className: 'ChartFont'
          }}
          tick={{ fontSize: '12', fill: 'white' }}
          dataKey={'month'}
          type="category"
        />
        {props.labels.map(
          (label, index) =>
            <YAxis
            hide={currentY !== '' && label !== currentY}
              onClick={() => label === currentY ? setCurrentY('') : setCurrentY(label)}
              key={index}
              yAxisId={`y${index}`}
              label={{
                value: label,
                angle: -90,
                position: 'insideLeft',
                textAnchor: 'middle',
                dx: 4,
                className: 'ChartFont'
              }}
              tick={{ fill: 'white', fontSize: '8' }}
              type="number"
              width={50}
              stroke={TraceColors[index % 9]}
            />
        )}
        <CartesianGrid strokeDasharray="3 3" />
        <Brush
          className="BrushStyling"
          height={15}
          stroke="#8884d8"
          startIndex={
            props.labels.length > 500 ? props.visibleData.length - 500 : 0
          }
          endIndex={props.visibleData.length - 1}
        />
        <Legend layout="vertical" verticalAlign="top" align="right" />
        {props.labels.map(
          (label, index) =>
            <Line
            hide={currentY !== '' && label !== currentY}
            onClick={() => label === currentY ? setCurrentY('') : setCurrentY(label)}
              dot={true}
              key={index}
              yAxisId={`y${index}`}
              type="monotone"
              dataKey={label}
              stroke={TraceColors[index % 9]}
            />
        )}
      </ComposedChart>
    </ResponsiveContainer>
  )
}
