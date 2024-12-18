import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import MyTouchableOpacity from "../MyTouchableOpacity/my-touchable-opacity";

interface ICalendarTab {
  selectedDate?: Date;
}

export const CalendarTab: React.FC<ICalendarTab> = ({
  selectedDate = new Date(),
}) => {
  const [activeDate, setActiveDate] = useState(selectedDate);

  // Генерация дней недели (с воскресенья по субботу)
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    return dayjs(activeDate).startOf("week").add(i, "day");
  });

  // Обработчик выбора дня
  const handleDayPress = (date: dayjs.Dayjs) => {
    setActiveDate(date.toDate());
  };

  return (
    <View className="flex-row justify-around py-2 bg-[#F0F4F8]">
      {weekDays.map((day, index) => {
        const isActive = day.isSame(dayjs(activeDate), "day");
        return (
          <MyTouchableOpacity
            key={index}
            className={`items-center px-3 py-2 rounded-full ${
              isActive ? "bg-[#22C55E]" : "bg-[#22C55E]/20"
            }`}
            onPress={() => handleDayPress(day)}
          >
            <Text
              className={`text-lg ${
                isActive ? "text-white font-bold" : "text-[#1E1E1E]"
              }`}
            >
              {day.format("D")}
            </Text>
            <Text
              className={`text-xs mt-1 ${
                isActive ? "text-white" : "text-gray-500"
              }`}
            >
              {day.format("dd")[0]} {/* Первая буква дня */}
            </Text>
          </MyTouchableOpacity>
        );
      })}
    </View>
  );
};
