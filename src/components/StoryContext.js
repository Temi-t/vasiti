import React,{useState, createContext, useContext, useEffect} from 'react';
// import {storyInput} from './Stories';

const LS_KEY = "story.key";

const storyContext = createContext();
export function useStoriesContext(){
    return useContext(storyContext)
}
const clearStoryContext = createContext();
export function useClearStoryContext(){
    return useContext(clearStoryContext)
}
const handleStoryContext = createContext();
export function useHandleStoryContext(){
    return useContext(handleStoryContext)
}
const userStoryContext = createContext();
export function useStory(){
    return useContext(userStoryContext)
}
const firstNameContext = createContext();
export function useFirstName(){
    return useContext(firstNameContext)
}
const lastNameContext = createContext();
export function useLastName(){
    return useContext(lastNameContext)
}
const locationContext = createContext();
export function useLocation(){
    return useContext(locationContext)
}
const modalContext = createContext();
export function useModal(){
    return useContext(modalContext)
}
const thankYouContext = createContext();
export function useThanks(){
    return useContext(thankYouContext)
}
const customerContext = createContext();
export function useCustomer(){
    return useContext(customerContext)
}
const vendorContext = createContext();
export function useVendor(){
    return useContext(vendorContext);
}

export default function StoryProvider({children}){
    const [stories, setStories] = useState([]);
    const [userStory, setUserStory] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [thankYou, setThankYou] = useState(false);
    const [customer, setCustomer] = useState(false);
    const [vendor, setVendor] = useState(false);

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

    const clearStory = () => {
    localStorage.clear()
    }
    return(
        <storyContext.Provider value={[stories, setStories]}>
            <userStoryContext.Provider value={[userStory, setUserStory]}>
                <firstNameContext.Provider value={[firstName, setFirstName]}>
                    <lastNameContext.Provider value={[lastName, setLastName]}>
                        <locationContext.Provider value={[location, setLocation]}>
                            <modalContext.Provider value={[isModalOpen, setIsModalOpen]}>
                                <thankYouContext.Provider value={[thankYou, setThankYou]}>
                                    <customerContext.Provider value={[customer, setCustomer]}>
                                        <vendorContext.Provider value={[vendor, setVendor]}>
                                            {/* <handleStoryContext.Provider value={handleStorySubmit}> */}
                                                <clearStoryContext.Provider value={clearStory}>
                                                    {children}
                                                </clearStoryContext.Provider>
                                            {/* </handleStoryContext.Provider> */}
                                        </vendorContext.Provider>
                                    </customerContext.Provider>
                                </thankYouContext.Provider>
                            </modalContext.Provider>
                        </locationContext.Provider>
                    </lastNameContext.Provider>
                </firstNameContext.Provider>
            </userStoryContext.Provider>
        </storyContext.Provider>
    )
}