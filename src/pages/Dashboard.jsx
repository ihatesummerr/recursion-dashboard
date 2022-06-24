import React, { useEffect } from "react";
import Button from "../components/Button";
import { GoPrimitiveDot } from "react-icons/go";
import SparkLine from "../components/Charts/SparkLine";
import Stacked from "../components/Charts/Stacked";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/user";

const Dashboard = () => {
  const dispatch = useDispatch();

  const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
  ];

  useEffect(() => {}, []);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap flex-col justify-center">
        <div
          className="bg-white 
				dark:text-gray-200 
				dark:bg-secondary-dark-bg 
				h-44 rounded-xl w-full
				p-8 pt-9 m-3 bg-hero-pattern 
				bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Рекурсий накоплено</p>
              <p className="text-2xl">1000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Потратить"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 md:w-56 rounded-2xl">
            <button
              type="button"
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl bg-black"
            ></button>
            <p className="mt-3">
              <span className="text-lg font-semibold">10</span>
              <span className={`text-sm ml-2`}>+12%</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">Оценок всего</p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 md:w-56 rounded-2xl">
            <button
              type="button"
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl bg-black"
            ></button>
            <p className="mt-3">
              <span className="text-lg font-semibold">10</span>
              <span className={`text-sm ml-2`}>+12%</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">Средняя оценка</p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 md:w-56 rounded-2xl">
            <button
              type="button"
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl bg-black"
            ></button>
            <p className="mt-3">
              <span className="text-lg font-semibold">10</span>
              <span className={`text-sm ml-2`}>+12%</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">Время выполнения ДЗ</p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 md:w-56 rounded-2xl">
            <button
              type="button"
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl bg-black"
            ></button>
            <p className="mt-3">
              <span className="text-lg font-semibold">10</span>
              <span className={`text-sm ml-2`}>+12%</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">Уроков пройдено</p>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full  md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Обновления</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Ошибки</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Успехи</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">1000</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Успехи</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">10000</span>
                </p>
                <p className="text-gray-500 mt-1">Ошибки</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  color="blue"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Скачать"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
