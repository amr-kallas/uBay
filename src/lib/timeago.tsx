import TimeAgo from "react-timeago"
//@ts-expect-error nothing
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
//@ts-expect-error nothing
import arabic from "react-timeago/lib/language-strings/ar"
type Timeago={
    date:Date
}
const Timeago = ({date}:Timeago) => {
    const formatter=buildFormatter(arabic)
  return (
    <TimeAgo date={date} formatter={formatter} />
  )
}

export default Timeago