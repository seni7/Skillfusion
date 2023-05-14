import { useEffect } from "react"
import { Chart } from "chart.js";
function Example() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["September", "October", "November", "December", "January", "February", "March","April"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Registered",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Accepted",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, {
          data: [10, 21, 60, 44, 17, 21, 17],
          label: "Pending",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }, {
          data: [6, 3, 2, 2, 7, 0, 16],
          label: "Rejected",
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
          fill: false,
        }
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <h1 className=" w-[210px] mx-auto  text-xl font-semibold capitalize mt-16 mb-8">School Registered</h1>
      <div className=" mx-16 w-[350px] md:w-[500px] h-[500px]  flex md:mx-96 ">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;