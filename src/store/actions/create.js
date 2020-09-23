import axios from "../../axios/axios-quiz";
import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./actionTypes";

export const createQuizQuestion = item => {
    return {
        type: CREATE_QUIZ_QUESTION,
        item: item,
    };
};

export const resetQuizCreation = () => {
    return {
        type: RESET_QUIZ_CREATION,
    };
};

export const finishCreateQuiz = () => {
    return async (dispatch, getState) => {
        await axios.post("/quizes.json", getState().create.quiz);
        dispatch(resetQuizCreation());
    };
};
