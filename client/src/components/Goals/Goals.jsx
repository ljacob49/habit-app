import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import AddGoalButton from "./AddGoalButton";
import UpdateGoalButton from "./UpdateGoalButton";
import DeleteGoalButton from "./DeleteGoalButton";

const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 45px;
`;
const GoalsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;
const TitleSection = styled.div`
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 30px;
`;
const GoalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
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

const Goals = () => {
  const [goal, setGoal] = useState([]);
  useEffect(() => {
    fetch("/goals")
      .then((r) => r.json())
      .then(setGoal);
  }, []);
  
  
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

  // const AllGoals = [
  //     {id: 0, name: "lose weight"},
  //     {id: 1, name: "Test"},
  //     {id: 2, name: "Test"},
  //     {id: 3, name: "Test"},
  // ]

  return (
    <GoalsContainer>
        <>
          <GoalsHeader>
            <TitleSection>goals</TitleSection>
            <AddGoalButton />
          </GoalsHeader>
          {goal
              .slice()
              .sort((a, b) => a.id - b.id)
              .map((goal) => (
                <GoalRow key={`goal-number-` + goal.id}>
                  <Name>{goal.name}</Name>
                  <Action>
                    <UpdateGoalButton goalID={goal.id} />
                    <DeleteGoalButton goalID={goal.id} goalName={goal.name} />
                  </Action>
                </GoalRow>
              ))}
        </>
    </GoalsContainer>
  );
};

export default Goals;