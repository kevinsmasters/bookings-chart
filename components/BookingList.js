import BookingItem from './BookingItem'

const BookingList = ({bookings}) =>{

    let dailyArr = [];

    for (let item in bookings) {
        let tempItem = {date: "",booking: 0};

        tempItem.date = bookings[item]['label']


        tempItem.booking = bookings[item]['amount']



        dailyArr.push(tempItem)
    }

console.log(dailyArr)
    return(
        <div>
            dailyArr
        </div>
    )
}

export default BookingList
