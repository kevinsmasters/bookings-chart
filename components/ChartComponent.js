import { server } from '../config'
import React from "react";
import { Line } from "react-chartjs-2";

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/bookings`)
    const bookings = await res.json()

    console.log(bookings);

    return {
        props: {
            bookings
        }
    }
}

const dripDrops = [17, 39, 28, 90, 100]


const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Drippies",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: dripDrops
    }
  ]
};

export default class ChartComponent extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}
