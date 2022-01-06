import { format } from "date-fns";

export default function DateComponent({ dateString }) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "dd MMM, yyyy")}
    </time>
  );
}
