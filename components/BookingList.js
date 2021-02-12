import BookingItem from './BookingItem'

const BookingList = ({bookings, cancellations}) =>{

    let dailyArr = [];

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
console.log(days);
    return(
        <div>
            
        </div>
    )
}

export default BookingList
