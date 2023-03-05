import React, { useState, FC } from "react";
import Datepicker from "tailwind-datepicker-react";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarType } from "../types/types";

const options = {
  title: "",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "bg-rvnRed",
  },
  icons: {
    prev: () => <FontAwesomeIcon icon={faChevronLeft} />,
    next: () => <FontAwesomeIcon icon={faChevronRight} />,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date("2022-01-01"),
  language: "en",
};

const Calendar: FC<CalendarType> = ({ handleChangeDate }) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChangeDate}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default Calendar;
