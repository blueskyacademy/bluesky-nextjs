import { useState } from "react";
import { ContactForm } from "../contact-hero";
import { format } from "date-fns";
const VisitForm = () => {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusForm, setStatusForm] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      type: "School",
      submittedAt: format(Date.now(), "HH:mm:ss dd-MM-yyyy"),
      date: format(selectedDate, "HH:mm:ss dd-MM-yyyy"),
    };
    setIsLoading(true);
    try {
      const response = await fetch("/api/sheet", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("result", result);
      setStatusForm("success");
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <ContactForm
        handleChangeForm={handleChangeForm}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        status={statusForm}
        selectedDate={selectedDate}
        handleChangeDate={handleChangeDate}
      />
    </div>
  );
};

export default VisitForm;
