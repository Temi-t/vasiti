import React,{useState, createContext, useContext} from 'react';

const StoryContext = createContext();
export function useStoryContext(){
    return useContext(StoryContext)
}

// const handleStoryContext = createContext();
// export function useHandleStoryContext(){
//     return useContext(handleStoryContext)
// }

export default function StoryProvider({children}){
    const [stories, setStories] = useState([]);
//   const storyInput = useRef();

//   const rand = () => {
//     return Math.floor((Math.random() * 10000) + 1)
//   }

//   const handleStory = (e) => {
//     // const userInput = storyInput.current.value
//     const userInput = e.target.value
//     if(userInput === "") return
//     setStories(prevStories => [
//       ...prevStories, {
//         id: rand(),
//        details: userInput, }
//     ])
//     // storyInput.current.value = null
//     e.target.value = null
//   }
    return(
        <StoryContext.Provider value={[stories, setStories]}>
            {/* <handleStoryContext.Provider value={handleStory}> */}
                {children}
            {/* </handleStoryContext.Provider> */}
        </StoryContext.Provider>
    )
}