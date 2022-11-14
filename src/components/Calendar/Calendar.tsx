import { memo, useMemo, useState } from "react";
import { getMonth, getYear } from "date-fns";
import { Icon } from "./Icon";
import { RowProps } from "./types";
import {
  Wrapper,
  YearMonth,
  Prev,
  Next,
  Header,
  Cell,
  Row,
  RowCell,
} from "./Calendar.styles";

const Calendar = memo(({ selectedDate, onChange }: any) => {
  const [chosenDate, setChosenDate] = useState(selectedDate);

  const handleChangeYearAndMonth = (date: any, isNextMonth: boolean) => {
    if (date.month() === 0 && !isNextMonth) {
      return date.set("year", date.year() - 1).set("month", 11);
    }

    if (date.month() === 11 && isNextMonth) {
      return date.set("year", date.year() + 1).set("month", 0);
    }

    return date.add(isNextMonth ? 1 : -1, "month");
  };

  const getCalendarRows = (date: any, customDate: any) => {
    const allDays = new Array(date.daysInMonth()).fill(1);

    const createCell = (date: any, day: number) => ({
      day,
      value: date.clone().set("date", day),
    });

    const monthCells = allDays.map((_: number[], iter: number) =>
      createCell(date, iter + 1)
    );

    const addCells = 35 - allDays.length;
    const lastMonth = date.subtract(1, "month");
    const nextMonth = date.add(1, "month");

    const lastMonthCell = Array.from(Array(Math.floor(addCells / 2)).keys())
      .map((_: any, iter: number) =>
        createCell(lastMonth, lastMonth.daysInMonth() - iter)
      )
      .reverse();

    const nextMonthCell = Array.from(
      Array(Math.round(addCells / 2)).keys()
    ).map((_: any, iter: number) => createCell(nextMonth, iter + 1));

    const cells = [...lastMonthCell, ...monthCells, ...nextMonthCell];
    return cells.reduce((acc: any, _: RowProps, iter: number) => {
      if (iter % 7 === 0) {
        return [...acc, cells.slice(iter, iter + 7)];
      }
      return acc;
    }, []);
  };

  const rows = useMemo(
    () => getCalendarRows(chosenDate, new Date(selectedDate)),
    [chosenDate]
  );

  return (
    <Wrapper>
      <YearMonth>
        <Prev
          onClick={() =>
            setChosenDate(handleChangeYearAndMonth(chosenDate, false))
          }
        >
          <Icon />
        </Prev>
        <div>{chosenDate.format("MMMM YYYY")}</div>
        <Next
          onClick={() =>
            setChosenDate(handleChangeYearAndMonth(chosenDate, true))
          }
        >
          <Icon />
        </Next>
      </YearMonth>
      <Header>
        {rows[0].map((row: RowProps, iter: number) => (
          <Cell key={iter}>{row.value.format("dd")}</Cell>
        ))}
      </Header>
      {rows.map((cells: RowProps[], iter: number) => (
        <Row key={iter}>
          {cells.map(({ day, value }: RowProps, iter: number) => (
            <RowCell
              key={`${day}-${iter}`}
              selected={value.toString() === selectedDate.toString()}
              onClick={() => onChange(value)}
            >
              {day}
            </RowCell>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
});

export default Calendar;
