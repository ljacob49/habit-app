import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import AddGoalButton from "../Goals/AddGoalButton";
import UpdateGoalButton from "../Goals/UpdateGoalButton";
import DeleteGoalButton from "../Goals/DeleteGoalButton";

const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 45px;
`;
const HabitHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  margin-left: 10px;
`;
const TitleSection = styled.div`
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 30px;
  margin-top: 85px;
  margin-left: 10px;
`;
const GoalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 45px;
  margin-left: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;
const Name = styled.div`
  text-transform: uppercase;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 20px;
    margin-right: 8px;
  }
`;

const ErrorSection = styled.div`
  color: red;
`;

const HabitList = () => {
  
  const AllHabits = [
      {id: 0, name: "Prepared lunch ahead of time "},
      {id: 1, name: "30 Minutes of Cardio"},
      {id: 2, name: "Yoga Workout"},
      {id: 3, name: "Completed two chapters"},
      {id: 4, name: "Data Structures and Algo practice"},
  ]
  
  
  // const dispatch = useDispatch();
  
  // const goalState = useSelector((state) => state.goals);
  // const { goalsList, loading, error } = goalState;

  // const userState = useSelector((state) => state.user);
  // const { loggedInUser } = userState;

  // useEffect(() => {
  //   if (loggedInUser) {
  //     const userInfo = { token: loggedInUser.token };
  //     dispatch(getGoals(userInfo));
  //   }
  //   if (error && error[0].param === "auth error") {
  //     dispatch(logoutUser());
  //   }
  // }, [dispatch, loggedInUser, error]);

  return (
    <HabitsContainer>
        <>
          <HabitHeader>
            <TitleSection>Habits</TitleSection>
          </HabitHeader>
          {AllHabits
              .slice()
              .sort((a, b) => a.id - b.id)
              .map((habit) => (
                <GoalRow key={`goal-number-` + habit.id}>
                  <Name>{habit.name}</Name>
                  <Action>
                    <UpdateGoalButton habitID={habit.id} />
                    <DeleteGoalButton habitID={habit.id} habitName={habit.name} />
                    <input
                    type="checkbox"
                    ></input>
                  </Action>
                </GoalRow>
              ))}
        </>
    </HabitsContainer>
  );
};

export default HabitList;