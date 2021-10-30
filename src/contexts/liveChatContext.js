import React, { useContext, useState } from 'react';

const LiveChatContext = React.createContext();

export function useLiveChat() {
    return useContext(LiveChatContext);
};

export function LiveChatProvider({ children }) {
    const [liveChatBoxActive, setLiveChatBoxActive] = useState(false);


    const value = {
        liveChatBoxActive,
        setLiveChatBoxActive
    };

    return (
        <LiveChatContext.Provider value={value}>
            {children}
        </LiveChatContext.Provider>
    )
}