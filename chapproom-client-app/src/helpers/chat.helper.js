import { getConnectedUser } from "./auth.helper"


export class ChatHelper {
    static createNewChat(to) {
        const connectedUser = getConnectedUser();
        const from = {
            id: connectedUser.id,
            username: connectedUser.username,
        }
        return {
            from: from,
            to: to,
            lastMessage: {
                time: new Date(),
                content: ""
            },
        }
    }

    static createNewMessage({ to, content, conversationId, type }) {
        const connectedUser = getConnectedUser();
        const from = {
            id: connectedUser.id,
            username: connectedUser.username,
        }
        return {
            sender: from,
            receiver: to,
            content: content,
            conversation: {
                id: conversationId
            },
            messageType: type,
            time: new Date()
        }
    }
}