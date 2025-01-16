import { create } from "zustand";

//create function create a store for us

const wordStore = create((set) => ({
  wordList: [],
  word: "",
  setWordlist: (list) => {
    set((state) => {
        console.log("state printing",state);
      //whatever you return from here will be the new state
      return {
        ...state,
        wordList: list,
      };
    });
  },
  setword:(newword)=>{
    set((state)=>{
        return{
            ...state,
            word:newword,
        }
    })

}
}));


export default wordStore;
