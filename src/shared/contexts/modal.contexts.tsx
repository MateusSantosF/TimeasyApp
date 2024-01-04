'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

type ModalContextProviderProps = {
    children: ReactNode;
};

interface ModalConfig {
    title: string;
    size?: "sm" | "md" | "lg";
    content: JSX.Element;
}

type TModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    createModal: (config: ModalConfig) => void;
}

const ModalContext = createContext<TModalProps | null>(null);

export const ModalContextProvider = ({ children }: ModalContextProviderProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

    const createModal = (config: ModalConfig) => {
        setModalConfig(config);
        setIsOpen(true);
    };

    const closeModal = () => {
        setModalConfig(null);
        setIsOpen(false);
    };

    const ModalComponent: React.FC = () => {
        return isOpen && modalConfig ? (
            ReactDOM.createPortal(
                <Modal isOpen={isOpen} onClose={closeModal} size={modalConfig.size || "sm"}>
                    <ModalContent>
                        <ModalHeader>
                            <h2>{modalConfig.title}</h2>
                        </ModalHeader>
                        <ModalBody>
                            {modalConfig.content}
                        </ModalBody>
                    </ModalContent>
                </Modal>,
                document.body
            )
        ) : null;
    };


    return (
        <ModalContext.Provider value={{
            isOpen,
            closeModal,
            createModal
        }}>
            {children}
            <ModalComponent />
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    var ctx = useContext(ModalContext);

    if (ctx !== null) return ctx;

    throw new Error("You cannot use modalContext without a provider.");
};