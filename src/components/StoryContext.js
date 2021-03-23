import React,{useState, createContext, useContext, useEffect} from 'react';

const LS_KEY = "story.key";

const storyContext = createContext();
export function useStoriesContext(){
    return useContext(storyContext)
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
const custVendorContext = createContext();
export function useCustVendor(){
    return useContext(custVendorContext);
}
const imageUrlContext = createContext();
export function useImageUrl(){
    return useContext(imageUrlContext);
}


export default function StoryProvider({children}){
    const [userStory, setUserStory] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [thankYou, setThankYou] = useState(false);
    const [customer, setCustomer] = useState(false);
    const [vendor, setVendor] = useState(false);
    const [custVendor, setCustVendor] = useState('');
    const [stories, setStories] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);


    useEffect(()=>{
        const storedStories = JSON.parse(localStorage.getItem(LS_KEY))
        storedStories && setStories(storedStories)
    }, []);
    useEffect(()=>{
        localStorage.setItem(LS_KEY, JSON.stringify(stories))
    }, [stories]);

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
                                            <custVendorContext.Provider value={[custVendor, setCustVendor]}>
                                                <imageUrlContext.Provider value={[imageUrl, setImageUrl]}>
                                                {children}
                                                </imageUrlContext.Provider>
                                            </custVendorContext.Provider>
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