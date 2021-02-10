import {Line} from 'react-chartjs-2';

const ChartComponent = ({state}) =>{
    return(
        <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
}

export default ChartComponent
