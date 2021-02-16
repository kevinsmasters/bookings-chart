import { Line } from "react-chartjs-2";
const BookingList = ({numbers}) =>{
    
    let dailyArr = [];

    const cancellations = numbers.cancellations.data;

    const bookings = numbers.bookings.data;

    for (let item in bookings) {
        let tempItem = {date: "",booking: 0};
        tempItem.date = bookings[item]['label']
        tempItem.booking = bookings[item]['amount']
        dailyArr.push(tempItem)
    }

    for (let item in cancellations) {
        let tempItem = {date: "",cancel: 0};
        tempItem.date = cancellations[item]['label']
        tempItem.cancel = cancellations[item]['amount']

        // loop through dailyArr
        // if object date matches tempItem.date append cancel amount
        // if not found make new tempItem with zero booking amount
        //
        let finddate = dailyArr.find(o => o.date === tempItem.date);

        if(finddate == undefined) {
            //console.log('no')
            dailyArr.push(tempItem)
        }

        for (let obj in dailyArr) {
            //console.log(dailyArr[obj].date)
            if(dailyArr[obj].date == tempItem.date) {
                dailyArr[obj].cancellation = tempItem.cancel
            }
        }
        //dailyArr.push(tempItem)
    }

    //console.log("cancellations: "+cancellations.length)

    // loop through dailyArr get date, booking, and cancellation amounts
    // append them to their respective arrays
    // if its missing a cancel amount put zero for that



    //
    for (let daily in dailyArr) {
        dailyArr[daily].realdate = new Date(dailyArr[daily].date)
    }

    const sortedDaily = dailyArr.sort((a, b) => a.realdate - b.realdate)
    //console.log(sortedDaily)

    let days = []
    let bookingTotal = []
    let cancelTotal = []

    for (let chartitem in sortedDaily) {
        days.push(sortedDaily[chartitem].date)
        bookingTotal.push(sortedDaily[chartitem].booking)
        cancelTotal.push(sortedDaily[chartitem].cancellation)
    }

    const data = {
      labels: days,
      datasets: [
        {
          label: 'Bookings',
          backgroundColor: '#5d205b',
          borderColor: '#5d205b',
          borderWidth: 3,
          fill: false,
          data: bookingTotal
        },
        {
          label: 'Cancellations',
          data: cancelTotal,
          backgroundColor: 'rgba(223,66,72,1)',
          borderColor: 'rgba(223,66,72,1)',
          borderWidth: 3,
          fill: false
        },
      ]
    };

    return(
        <div>
        <Line
          data={data}
          height={500}
          width={900}
          options={{
            spanGaps: true,
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'USD'
                  },
                display: true,
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return '$' + value;
                    }
                }
              }],
            }
          }}
        />
        </div>
    )
}

export default BookingList
