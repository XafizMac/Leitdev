"use client";

import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Список команд
const teams = [
  "Eventhon",
  "Apple",
  "Samsung",
  "Munai",
  "Microsoft",
  "TechnoArt",
  "Bell Universe",
  "TOLTURA",
  "Kyrgyz Art Space",
  "DeCom",
];

// Функция для генерации случайного времени между 9:00 и 18:00
const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
  const minutes = Math.floor(Math.random() * 4) * 15;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};

export default function MentorDashboard() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [activeMeeting, setActiveMeeting] = useState<{
    team: string;
    startTime: Date;
  } | null>(null);
  const [pastMeetings, setPastMeetings] = useState<
    Array<{ team: string; startTime: Date; endTime: Date }>
  >([]);
  const [scheduledMeetings, setScheduledMeetings] = useState<
    Array<{ team: string; time: string }>
  >([]);

  useEffect(() => {
    // Генерируем запланированные встречи при первой загрузке компонента
    const meetings = teams.map((team) => ({
      team,
      time: generateRandomTime(),
    }));
    setScheduledMeetings(meetings.sort((a, b) => a.time.localeCompare(b.time)));
  }, []);

  const handleStartMeeting = (team: string) => {
    setActiveMeeting({
      team,
      startTime: new Date(),
    });
    setSelectedTeam("");
  };

  const handleEndMeeting = () => {
    if (activeMeeting) {
      setPastMeetings([
        ...pastMeetings,
        { ...activeMeeting, endTime: new Date() },
      ]);
      setActiveMeeting(null);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Ментор: Даниэль Абдылдаев</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Запланированные встречи</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {scheduledMeetings.map((meeting, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 bg-secondary rounded-md"
                >
                  <span className="flex items-center">
                    <Users className="mr-2" /> {meeting.team}
                  </span>
                  <div className="flex gap-5">
                    <span className="flex items-center">
                      <Clock className="mr-2" /> {meeting.time}
                    </span>
                    <Button
                      onClick={() => handleStartMeeting(meeting.team)}
                      disabled={!!activeMeeting}
                      size="sm"
                    >
                      Начать
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div>
          <Card className="h-[max-content] overflow-hidden">
            <CardHeader>
              <CardTitle>Текущая встреча</CardTitle>
            </CardHeader>
            <CardContent>
              {activeMeeting ? (
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Users className="mr-2" /> {activeMeeting.team}
                  </p>
                  <p className="flex items-center">
                    <Clock className="mr-2" /> Начало:{" "}
                    {activeMeeting.startTime.toLocaleTimeString()}
                  </p>
                  <Button
                    onClick={handleEndMeeting}
                    variant="destructive"
                    className="w-full mt-4"
                  >
                    Завершить встречу
                  </Button>
                </div>
              ) : (
                <p>Нет активных встреч</p>
              )}
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>История встреч</CardTitle>
            </CardHeader>
            <CardContent>
              {pastMeetings.length > 0 ? (
                <ul className="space-y-2">
                  {pastMeetings.map((meeting, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-2 bg-secondary rounded-md"
                    >
                      <span className="flex items-center">
                        <Users className="mr-2" /> {meeting.team}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-2" />
                        {meeting.startTime.toLocaleTimeString()} -{" "}
                        {meeting.endTime.toLocaleTimeString()}
                      </span>
                      <CheckCircle className="text-green-500" />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Нет прошедших встреч</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
