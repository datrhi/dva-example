import fetchData from "../services/fetchData";

export default {
  namespace: "students",
  state: {
    items: [],
  },
  reducers: {
    save(state, { payload: items }) {
      return {
        ...state,
        items,
      };
    },
    delete(state, { payload: id }) {
      console.log(state.items.filter((item) => item.id !== id));
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id),
      };
    },
  },
  effects: {
    *fetchStudents({ payload: { _limit, _page } }, { call, put }) {
      try {
        const res = yield call(
          fetchData,
          `http://js-post-api.herokuapp.com/api/students?_limit=${_limit}&_page=${_page}`
        );
        yield put({ type: "save", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    },
  },
  subcriptions: {
    setup({ dispatch, history }) {
      // todo
    },
  },
};
