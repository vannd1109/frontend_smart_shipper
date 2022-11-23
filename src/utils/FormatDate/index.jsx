import Moment from "react-moment";

const FormatDate = (dateToFormat) => {
  return (
    <Moment
      date={dateToFormat}
      format="DD/MM/YYYY"
    />
  );
};

export default FormatDate;
