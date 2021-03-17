import React,{useState, createContext, useContext, useEffect} from 'react';
// import {storyInput} from './Stories';

const LS_KEY = "story.key";

const StoryContext = createContext();
export function useStoriesContext(){
    return useContext(StoryContext)
}
// const clearStoryContext = createContext();
// export function useClearStoryContext(){
//     return useContext(clearStoryContext)
// }
const handleStoryContext = createContext();
export function useHandleStoryContext(){
    return useContext(handleStoryContext)
}
const userStoryContext = createContext();
export function useStory(){
    return useContext(userStoryContext)
}
const useFirstNameContext = createContext();
export function useFirstName(){
    return useContext(useFirstNameContext)
}
const useLastNameContext = createContext();
export function useLastName(){
    return useContext(useLastNameContext)
}
const useLocationContext = createContext();
export function useLocation(){
    return useContext(useLocationContext)
}


export default function StoryProvider({children}){
    const [stories, setStories] = useState([]);
    const [userStory, setUserStory] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');

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
    useEffect(()=>{
        const storedStories = JSON.parse(localStorage.getItem(LS_KEY))
        storedStories && setStories(storedStories)
    }, []);
    useEffect(()=>{
        localStorage.setItem(LS_KEY, JSON.stringify(stories))
    }, [stories]);

    const rand = () => {
    return Math.floor((Math.random() * 10000) + 1)
    }

    const handleStorySubmit = (e) => {
        e.preventDefault()
    // const userInput = storyInput.current.value
    // const {name, value} = e.target
    const {target} = e;
    const {name, value} = target;

    console.log(value)
    if(value === "") return
 
    setStories(prevStories => [
        ...prevStories, {
        id: rand(),
        [name]: firstName }
    ])
    e.target.value = null
    }

    const clearStory = () => {
    localStorage.clear()
    }
    return(
        <StoryContext.Provider value={[stories, setStories]}>
            <userStoryContext.Provider value={[userStory, setUserStory]}>
                <useFirstNameContext.Provider value={[firstName, setFirstName]}>
                    <useLastNameContext.Provider value={[lastName, setLastName]}>
                        <useLocationContext.Provider value={[location, setLocation]}>
                            <handleStoryContext.Provider value={handleStorySubmit}>
                                {/* <clearStoryContext.Provider value={clearStory}> */}
                                    {children}
                                {/* </clearStoryContext.Provider> */}
                            </handleStoryContext.Provider>
                        </useLocationContext.Provider>
                    </useLastNameContext.Provider>
                </useFirstNameContext.Provider>
            </userStoryContext.Provider>
        </StoryContext.Provider>
    )
}