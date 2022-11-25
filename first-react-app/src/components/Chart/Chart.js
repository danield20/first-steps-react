import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(d => d.value);
    const totalMaximum = Math.max(...dataPointValues)
    console.log(props.dataPoints)
    return (
        <div className="chart">
            {props.dataPoints.map((data) => (
                <ChartBar
                    key={data.label}
                    value={data.value}
                    max={totalMaximum}
                    label={data.label}
                />
            ))}
        </div>
    );
};

export default Chart;
